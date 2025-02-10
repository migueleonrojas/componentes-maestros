import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Line } from '@core/models/line.interface';
import { Rect } from '@core/models/rect.interface';
import { Text } from '@core/models/text.interface';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { setFilteredValueGraph } from 'src/app/state/actions/values-graphs.actions';
import { selectHeightLinearGraph, selectLinesOfLinearGraph, selectTextsLinearGraph, selectRectsOfLinearGraph, selectWidthLinearGraph } from 'src/app/state/selectors/linear-graph.selectors';
import { selectFilteredValuesGraph } from 'src/app/state/selectors/values-graphs.selectors';
import { clearLinearGraph, startBuildLinearGraphs } from 'src/app/state/actions/linear-graph.action';

@Component({
  selector: 'app-linear-graph',
  templateUrl: './linear-graph.component.html',
  styleUrls: ['./linear-graph.component.scss']
})
export class LinearGraphComponent implements OnInit, OnDestroy {

   valuesGraph$: Observable<ReadonlyArray<ValueGraph>> = new Observable();
   rectsGraph$: Observable<ReadonlyArray<Rect>> = new Observable();
   linesGraph$: Observable<ReadonlyArray<Line>> = new Observable();
   textsGraph$: Observable<ReadonlyArray<Text>> = new Observable();
   heightGraph$: Observable<number> = new Observable();
   widthGraph$: Observable<number> = new Observable();

   constructor(private store: Store, private asyncPipe: AsyncPipe) {

      this.rectsGraph$ = this.store.select(selectRectsOfLinearGraph);
      this.linesGraph$ = this.store.select(selectLinesOfLinearGraph);
      this.textsGraph$ = this.store.select(selectTextsLinearGraph);
      this.heightGraph$ = this.store.select(selectHeightLinearGraph);
      this.widthGraph$ = this.store.select(selectWidthLinearGraph);   
   }

   ngOnInit(): void {
   }

   filterLegend(id: string) {

      this.store.dispatch(clearLinearGraph());
      
      this.store.dispatch(setFilteredValueGraph({id}));
      
      
      this.store.dispatch(startBuildLinearGraphs({
         height: 500,
         width: 0,
         valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
      }));      
  
   }

   ngOnDestroy(): void {
      this.store.dispatch(clearLinearGraph()); 
   }

}
