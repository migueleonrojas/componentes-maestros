import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { startBuildBarGraphs } from 'src/app/state/actions/bar-graph.actions';
import { selectFilteredValuesGraph, selectValuesGraph } from 'src/app/state/selectors/values-graphs.selectors';


@Component({
  selector: 'app-graphs-page',
  templateUrl: './graphs-page.component.html',
  styleUrls: ['./graphs-page.component.scss']
})
export class GraphsPageComponent implements OnInit {

  constructor(private store: Store, private asyncPipe: AsyncPipe) { 

   this.store.dispatch(startBuildBarGraphs({
      height: 500,
      width: 0,
      valuesGraph: this.asyncPipe.transform(this.store.select(selectFilteredValuesGraph))!
   }));
   
  }

  ngOnInit(): void {
  }

}
