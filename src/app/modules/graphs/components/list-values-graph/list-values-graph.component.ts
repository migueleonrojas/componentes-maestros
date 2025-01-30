import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startBuildBarGraphs } from 'src/app/state/actions/bar-graph.actions';
import { AppState } from 'src/app/state/app.state';
import { selectValuesGraph } from 'src/app/state/selectors/values-graphs.selectors';

@Component({
  selector: 'app-list-values-graph',
  templateUrl: './list-values-graph.component.html',
  styleUrls: ['./list-values-graph.component.scss']
})
export class ListValuesGraphComponent implements OnInit {

   listValuesGraph$: Observable<ReadonlyArray<ValueGraph>> = new Observable();

   constructor(private store:Store<AppState>, private asyncPipe: AsyncPipe) {

      this.listValuesGraph$ = this.store.select(selectValuesGraph);

      

   }

  ngOnInit(): void {
  }

}
