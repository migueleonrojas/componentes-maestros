import { ElementRef, Injectable } from '@angular/core';
import { Line } from '@core/models/line.interface';
import { Rect } from '@core/models/rect.interface';
import { Text } from '@core/models/text.interface';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Observable, of } from 'rxjs';
import { generateScaleByMaxValue, getMaxValueByListModel } from 'src/app/utils/list-numbers/numbers';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

   constructor() { }

   _widthLetter = 9
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

      const paddingLeft = `${maxValue}`.length * this._widthLetter;
      
      const heightWithPadding = height - (this._paddingTop + this._paddingBottom);
      
      const unitFromValueToPx = heightWithPadding / maxValue;

      let xRectProperty = paddingLeft + this._paddingRect;

      const listForm: {
         rects: Rect, textsLabel: Text, textValue: Text 
      }[] = 
      valuesGraph.map((valueGraph) => {

         let heightValue = Number((unitFromValueToPx * valueGraph.value).toFixed(2))

         xRectProperty += (this._paddingRect + this._widthRect + this._paddingRect);

         return {
            rects: {
               y: this._paddingTop + (heightWithPadding - heightValue), 
               x: (xRectProperty - this._widthRect - this._paddingRect - this._paddingRect),
               height: heightValue,
               width: this._widthRect,
               color: valueGraph.color,
               rx:0,
               ry:0,
               pathLength: 0,
            },
            textsLabel: {
               x: (xRectProperty - this._widthRect - this._paddingRect - this._paddingRect),
               color: valueGraph.color,
               content: valueGraph.label,
               y: (height - this._paddingBottom) + this._heightText,
               textSpan: [],
               strokeWidth: "0.25"
            },
            textValue: {
               x: xRectProperty - this._widthRect - this._paddingRect - this._paddingRect,
               color: valueGraph.color,
               content: `${valueGraph.value}`,
               y: height - (heightValue + this._paddingTop) - 5,
               textSpan: [],
               strokeWidth: "0.8"
            }
         }
      });

      const mainLine: Line = {
         x1: paddingLeft,
         x2: xRectProperty,
         pathLength: 2,
         stroke: "black",
         y1: this._paddingTop + heightWithPadding,
         y2: this._paddingTop + heightWithPadding
      };


      return of({
         texts: [...listForm.map(form => form.textsLabel), ...listForm.map(form => form.textValue)],
         lines: [mainLine],
         rects: [...listForm.map(form => form.rects)],
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

      console.log(height);

      return of({
         texts: [],
         lines: []
      })
   }

   /* generateMainAxisGraph(
      valuesGraph:ReadonlyArray<ValueGraph>,
      height: number,
      width: number,
      paddingTop: number, 
      paddingBottom: number
   ): Observable<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>,
      rects: ReadonlyArray<Rect>
      width: number
   }> {

      const maxValue = getMaxValueByListModel('value', valuesGraph);

      const widthText = `${maxValue}`.length * this._widthLetter;

      const listScale = generateScaleByMaxValue(maxValue, 10);



      return of({
         lines: [],
         texts: [],
         rects: [],
         width: 0
      });
   }

   generateCrossAxisGraph(
      valuesGraph:ReadonlyArray<ValueGraph>,
      height: number,
      width: number,
      paddingTop: number, 
      paddingBottom: number
   ): Observable<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>
   }> {
      const maxValue = getMaxValueByListModel('value', valuesGraph);

      const widthText = `${maxValue}`.length * this._widthLetter;
      
      const listScale = generateScaleByMaxValue(maxValue, 10);
      const listScaleText = generateScaleByMaxValue(maxValue, 10);

      const heightLine = ( height - (paddingBottom + paddingTop) ) / listScale.length;

      let posYProgresive = paddingBottom;

      listScale.pop();
   

      const listLine: Line[] = listScale.map<Line>((scale, index) => {

         posYProgresive += heightLine;
         return {
            x1: widthText,
            x2: widthText,
            y1: height - (posYProgresive - heightLine),
            y2: height - (posYProgresive),
            pathLength: 2,
            stroke: "black",
         }
      });

      posYProgresive = paddingBottom;

      const indicatorsLine: Line[] = listScale.map<Line>((scale, index) => {

         posYProgresive += heightLine;
         return {
            x1: widthText,
            x2: widthText + width,
            y1: height - (posYProgresive),
            y2: height - (posYProgresive),
            pathLength: 2,
            stroke: "black",
         }
      });

      posYProgresive = paddingBottom;


      const listLineToText: Text[] = listScaleText.reverse().map<Text>((scale, index) => {

         posYProgresive += heightLine;
         return {
            x: 0,
            y: height - (posYProgresive - heightLine - (this._heightText / 2)),
            color: "#000",
            content: `${scale}` 
         }
      });
      

      return of({
         lines: [...listLine, ...indicatorsLine],
         texts: [...listLineToText]
      });
   } */

   /* generateText(
      valuesGraph:ReadonlyArray<ValueGraph>,
      height: number, 
      paddingTop: number, 
      paddingBottom: number
   ): Observable<ReadonlyArray<Text>> {


      const maxValue = getMaxValueByListModel('value', valuesGraph);

      const heightText = 10;
      
      const listScale = generateScaleByMaxValue(maxValue, 10);

      const heightLine = ( height - (paddingBottom + paddingTop) ) / listScale.length;

      let posYProgresive = paddingBottom;

      const listLine: Text[] = listScale.reverse().map<Text>((scale, index) => {

         posYProgresive += heightLine;
         return {
            x: 0,
            y: height - (posYProgresive - heightLine - (heightText / 2)),
            color: "#000",
            content: `${scale}` 
         }
      });

      return of(listLine);
   }

   generateLines(
      valuesGraph:ReadonlyArray<ValueGraph>,
      height: number, 
      paddingTop: number, 
      paddingBottom: number
   ): Observable<ReadonlyArray<Line>> {

      const maxValue = getMaxValueByListModel('value', valuesGraph);

      const widthText = `${maxValue}`.length * 9;

      const listScale = generateScaleByMaxValue(maxValue, 10);

      const heightLine = ( height - (paddingBottom + paddingTop) ) / (listScale.length);

      let posYProgresive = paddingBottom;

      listScale.pop();

      const listLine: Line[] = listScale.map<Line>((scale, index) => {

         posYProgresive += heightLine;
         return {
            x1: widthText,
            x2: widthText,
            y1: height - (posYProgresive - heightLine),
            y2: height - (posYProgresive),
            pathLength: 2,
            stroke: "black",
         }
      });

      posYProgresive = paddingBottom

      const indicatorsLine: Line[] = listScale.map<Line>((scale, index) => {

         posYProgresive += heightLine;
         return {
            x1: widthText,
            x2: widthText + 100,
            y1: height - (posYProgresive),
            y2: height - (posYProgresive),
            pathLength: 2,
            stroke: "black",
         }
      });

      return of([...listLine, ...indicatorsLine]);
   } */
}
