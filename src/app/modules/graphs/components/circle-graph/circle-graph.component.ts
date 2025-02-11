import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Circle } from '@core/models/circle.interface';
import { Line } from '@core/models/line.interface';
import { Rect } from '@core/models/rect.interface';
import { Text } from '@core/models/text.interface';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCircleGraph, startBuildCircleGraphs } from 'src/app/state/actions/circle-graph.actions';
import { setFilteredValueGraph } from 'src/app/state/actions/values-graphs.actions';
import { selectCirclesOfCircleGraph, selectHeightCircleGraph, selectRectsOfCircleGraph, selectTextsCirclerGraph, selectWidthCircleGraph } from 'src/app/state/selectors/circle-graph.selectors';
import { selectFilteredValuesGraph } from 'src/app/state/selectors/values-graphs.selectors';

@Component({
  selector: 'app-circle-graph',
  templateUrl: './circle-graph.component.html',
  styleUrls: ['./circle-graph.component.scss']
})
export class CircleGraphComponent implements OnDestroy {

   valuesGraph$: Observable<ReadonlyArray<ValueGraph>> = new Observable();
   rectsGraph$: Observable<ReadonlyArray<Rect>> = new Observable();
   circlesGraph$: Observable<ReadonlyArray<Circle>> = new Observable();
   textsGraph$: Observable<ReadonlyArray<Text>> = new Observable();
   heightGraph$: Observable<number> = new Observable();
   widthGraph$: Observable<number> = new Observable();

   constructor(private store: Store, private asyncPipe: AsyncPipe) {

      this.rectsGraph$ = this.store.select(selectRectsOfCircleGraph);
      this.textsGraph$ = this.store.select(selectTextsCirclerGraph);
      this.heightGraph$ = this.store.select(selectHeightCircleGraph);
      this.widthGraph$ = this.store.select(selectWidthCircleGraph);
      this.circlesGraph$ = this.store.select(selectCirclesOfCircleGraph);

   }

   filterLegend(id: string) {
   
      this.store.dispatch(setFilteredValueGraph({id}));
      
      this.store.dispatch(clearCircleGraph());
      
      this.store.dispatch(startBuildCircleGraphs({
         height: 500,
         valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
      }));      
        
   }


   ngOnDestroy(): void {
      this.store.dispatch(clearCircleGraph()); 
   }

 

}
