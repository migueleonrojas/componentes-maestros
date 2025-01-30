import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Line } from '@core/models/line.interface';
import { Rect } from '@core/models/rect.interface';
import { Text } from '@core/models/text.interface';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { startBuildBarGraphs } from 'src/app/state/actions/bar-graph.actions';
import { selectHeightBarGraph, selectLinesOfBarGraph, selectTextsBarGraph, selectRectsOfBarGraph, selectWidthBarGraph } from 'src/app/state/selectors/bar-graph.selectors';
import { selectValuesGraph } from 'src/app/state/selectors/values-graphs.selectors';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent {

   valuesGraph$: Observable<ReadonlyArray<ValueGraph>> = new Observable();
   rectsGraph$: Observable<ReadonlyArray<Rect>> = new Observable();
   linesGraph$: Observable<ReadonlyArray<Line>> = new Observable();
   textsGraph$: Observable<ReadonlyArray<Text>> = new Observable();
   heightGraph$: Observable<number> = new Observable();
   widthGraph$: Observable<number> = new Observable();

   constructor(private store: Store, private asyncPipe: AsyncPipe) {

      this.valuesGraph$ = this.store.select(selectValuesGraph);

      this.valuesGraph$.subscribe(valuesGraph => {
         this.store.dispatch(startBuildBarGraphs({
            height: 500,
            width: 0,
            valuesGraph
         }));
      });

      this.rectsGraph$ = this.store.select(selectRectsOfBarGraph);
      this.linesGraph$ = this.store.select(selectLinesOfBarGraph);
      this.textsGraph$ = this.store.select(selectTextsBarGraph);
      this.heightGraph$ = this.store.select(selectHeightBarGraph);
      this.widthGraph$ = this.store.select(selectWidthBarGraph);

   }
   

   
      
      
   


}
