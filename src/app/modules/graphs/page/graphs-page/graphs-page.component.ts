import { AsyncPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { Store } from '@ngrx/store';
import { clearBarGraph, startBuildBarGraphs } from 'src/app/state/actions/bar-graph.actions';
import { clearCircleGraph, startBuildCircleGraphs } from 'src/app/state/actions/circle-graph.actions';
import { clearLinearGraph, startBuildLinearGraphs } from 'src/app/state/actions/linear-graph.action';
import { selectFilteredValuesGraph, selectValuesGraph } from 'src/app/state/selectors/values-graphs.selectors';


@Component({
  selector: 'app-graphs-page',
  templateUrl: './graphs-page.component.html',
  styleUrls: ['./graphs-page.component.scss']
})
export class GraphsPageComponent implements OnInit {

   @ViewChild('matTabGroup') matTabGroup: MatTabGroup = {} as MatTabGroup;

   constructor(private store: Store, private asyncPipe: AsyncPipe) { }

   tabChanged(tabChangeEvent: MatTabChangeEvent): void {
      if(tabChangeEvent.index === 0) {
         
         this.store.dispatch(clearBarGraph());

         this.store.dispatch(startBuildBarGraphs({
            height: 500,
            width: 0,
            valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
         }));
      }
      
      else if(tabChangeEvent.index === 1) {

         this.store.dispatch(clearLinearGraph());

         this.store.dispatch(startBuildLinearGraphs({
            height: 500,
            width: 0,
            valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
         }));
      }

      else if(tabChangeEvent.index === 2) {
         this.store.dispatch(clearCircleGraph());

         this.store.dispatch(startBuildCircleGraphs({
            height: 500,
            valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
         }))
      }
   }
   

   ngOnInit(): void {

      if (this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))?.length === 0) return;

      this.store.dispatch(startBuildBarGraphs({
         height: 500,
         width: 0,
         valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
      }));

      this.store.dispatch(startBuildLinearGraphs({
         height: 500,
         width: 0,
         valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
      }));

      this.store.dispatch(startBuildCircleGraphs({
         height: 500,
         valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
      }))
   }

}
