import { ElementRef, Injectable } from '@angular/core';
import { Line } from '@core/models/line.interface';
import { Rect } from '@core/models/rect.interface';
import { Text } from '@core/models/text.interface';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Observable, of } from 'rxjs';
import { generateScaleByMaxValue, getLengthByMaxValueWidth, getMaxValueByListModel } from 'src/app/utils/list-numbers/numbers';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

   constructor() { }

   _widthLetter = 8;
   _heightText = 17;
   _countScale = 10;
   _widthRect = 80;
   _paddingRect = 25;
   _paddingBottom = 50
   _paddingTop = 50


   generateMainAxis(
      valuesGraph: ReadonlyArray<ValueGraph>,
      height: number,
   ): Observable<{
      texts: Text[],
      lines: Line[],
      rects: Rect[],
      width: number,
      height: number,
      valuesGraph: ReadonlyArray<ValueGraph>,
      
   }>{

      const maxValue = getMaxValueByListModel('value', valuesGraph);

      const listScaleText = generateScaleByMaxValue(maxValue, 10);

      const maxLengthByMaxWidthValue = getLengthByMaxValueWidth(listScaleText);

      const paddingLeftLine = (maxLengthByMaxWidthValue.length * this._widthLetter) + this._widthLetter;
      
      const heightWithPadding = height - (this._paddingTop + this._paddingBottom);
      
      const unitFromValueToPx = heightWithPadding / maxValue;

      let xRectProperty = (maxLengthByMaxWidthValue.length * this._widthLetter) + this._widthLetter;
      let xTextLabelProperty = 0;
      let xTextValueProperty = 0;
      let labelWidth = 0;
      let valueWidth = 0
      
      const listForms: {
         rects: Rect, textsLabel: Text, textValue: Text 
      }[] = 
      valuesGraph.map((valueGraph) => {

         let heightValue = Number((unitFromValueToPx * valueGraph.value).toFixed(2));
         labelWidth = `${valueGraph.label}`.length * this._widthLetter;
         valueWidth = `${valueGraph.value}`.length * this._widthLetter; 

         xTextLabelProperty = (this._widthRect > labelWidth) 
            ? (this._widthRect - labelWidth) / 2 
            : -(labelWidth - this._widthRect) / 2;

         xTextValueProperty = (labelWidth < this._widthRect)
            ? (this._widthRect - valueWidth) / 2
            : -(valueWidth- this._widthRect) / 2
         

         xRectProperty += this._widthRect + (labelWidth);     

         return {
            rects: {
               x: xRectProperty - this._widthRect,
               y: this._paddingTop + (heightWithPadding - heightValue), 
               height: heightValue,
               width: this._widthRect,
               color: valueGraph.color,
               rx:0,
               ry:0,
               pathLength: 0,
               id: ``,
               itsFiltered: valueGraph.itsFiltered
            },
            textsLabel: {
               x: xRectProperty - this._widthRect + xTextLabelProperty,
               color: valueGraph.color,
               content: valueGraph.label,
               y: (height - this._paddingBottom) + this._heightText,
               textSpan: [

               ],
               strokeWidth: "0.25",
               itsFiltered: valueGraph.itsFiltered,
               textLength: labelWidth
            },
            textValue: {
               x: xRectProperty - this._widthRect + xTextValueProperty,
               color: valueGraph.color,
               content: `${valueGraph.value}`,
               y: height - (heightValue + this._paddingTop) - 5,
               textSpan: [],
               strokeWidth: "0.8",
               itsFiltered: valueGraph.itsFiltered,
               textLength: valueWidth
            }
         }
      });

      xRectProperty += labelWidth;

      const mainLine: Line = {
         x1: paddingLeftLine,
         x2: xRectProperty,
         pathLength: 2,
         stroke: "black",
         y1: this._paddingTop + heightWithPadding,
         y2: this._paddingTop + heightWithPadding
      };

      return of({
         texts: [...listForms.map(form => form.textsLabel), ...listForms.map(form => form.textValue)],
         lines: [mainLine],
         rects: [...listForms.map(form => form.rects)],
         width: xRectProperty,
         height,
         valuesGraph
      });
   }


   generateCrossAxis(
      valuesGraph: ReadonlyArray<ValueGraph>,
      height: number,
      width: number
   ): Observable<{
      texts: Text[],
      lines: Line[]
   }> {

      const maxValue = getMaxValueByListModel('value', valuesGraph);

      const heightWithPadding = height - (this._paddingTop + this._paddingBottom);
      
      const listScaleLine = generateScaleByMaxValue(maxValue, 10);
      listScaleLine.pop();
      
      const listScaleText = generateScaleByMaxValue(maxValue, 10);
      
      const maxLengthByMaxWidthValue = getLengthByMaxValueWidth(listScaleText);
      
      const paddingLeft = (maxLengthByMaxWidthValue.length * this._widthLetter) + this._widthLetter;

      const heightLine = ( height - (this._paddingBottom + this._paddingTop) ) / listScaleLine.length;

      let posYProgresive = this._paddingBottom;


      const listLine: Line[] = listScaleLine.map<Line>((scale, index) => {
         posYProgresive += heightLine;
         return {
            x1: paddingLeft,
            x2: width,
            y1: height - (posYProgresive),
            y2: height - (posYProgresive),
            pathLength: 2,
            stroke: "black",
         }
      });

      posYProgresive =  this._paddingBottom;

      const listText: Text[] = listScaleText.map<Text>((scale, index) => {
         
         let scaleWidth = (`${scale}`.length) * this._widthLetter;

         posYProgresive += heightLine;
         return {
            x: 0,
            y: height - (posYProgresive - heightLine - (this._heightText / 4)),
            color: "#000",
            content: `${scale}`,
            strokeWidth: "0.8",
            textSpan: [],
            itsFiltered: false,
            textLength: scaleWidth
         }
      });

      const crossAxisLine: Line = {
         x1: paddingLeft,
         x2: paddingLeft,
         pathLength: 2,
         stroke: "black",
         y1: this._paddingTop,
         y2: this._paddingTop + heightWithPadding
      };
      
      return of({
         texts: [...listText],
         lines: [crossAxisLine, ...listLine]
      })
   }

   generateLegends(
      valuesGraph: ReadonlyArray<ValueGraph>,
   ):Observable<{
      texts: Text[],
      rects: Rect[],
      width: number
   }> {
      const maxValue = getMaxValueByListModel('value', valuesGraph);

      let xPosition = (`${maxValue}`.length * this._widthLetter) + this._widthLetter;
      let labelWidth = 0;
      const paddingLeftTextLegend = 10

      const listLegends: {
         rectsLegend: Rect, textsLegend: Text
      }[] = valuesGraph.map((valueGraph, index) => {

         labelWidth = `${valueGraph.label}`.length * this._widthLetter;
         xPosition += (this._widthRect + labelWidth + paddingLeftTextLegend * 4)
         /* xPosition += this._widthRect + (labelWidth + paddingLeftTextLegend * 4);   */
         
         
         
         return {
            rectsLegend: {
               x: xPosition - (this._widthRect + labelWidth),
               y: this._paddingTop * 0.20,
               color: valueGraph.color,
               height: this._paddingTop * 0.40,
               pathLength: 0,
               rx: 0,
               ry: 0,
               width: this._widthRect,
               /* x: xPosition - this._widthRect, */
               id: valueGraph.id,
               itsFiltered: valueGraph.itsFiltered
            },
            textsLegend: {
               color: valueGraph.color,
               content: valueGraph.label,
               strokeWidth: "0.25",
               x: xPosition - labelWidth + paddingLeftTextLegend,
               /* x: xPosition + paddingLeftTextLegend * 0.25, */
               y: this._heightText + this._paddingTop * 0.15,
               textSpan: [],
               itsFiltered: valueGraph.itsFiltered,
               textLength: labelWidth
            }
         }
      });

      xPosition += (this._widthRect)

      return of({
         texts: [...listLegends.map((legend => legend.textsLegend))],
         rects: [...listLegends.map((legend => legend.rectsLegend))],
         width: xPosition
      });

   }
}
