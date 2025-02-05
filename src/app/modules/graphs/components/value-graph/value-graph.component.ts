import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setCurrentValueGraph, setModeUpdateFormGraph, setCurrentIndexValueGraphToFormGraph } from 'src/app/state/actions/form-graph.actions';
import { subtractValueGraph } from 'src/app/state/actions/values-graphs.actions';
import { AppState } from 'src/app/state/app.state';
import { selectFormGraphEditingMode } from 'src/app/state/selectors/form-graph.selectors';



@Component({
  selector: 'app-value-graph',
  templateUrl: './value-graph.component.html',
  styleUrls: ['./value-graph.component.scss']
})
export class ValueGraphComponent implements OnDestroy {

   isEditing$: Observable<boolean> = new Observable();

   @Input() value: ValueGraph = {
      color: "#000",
      label: '',
      value: 0,
      id: '0',
      itsFiltered: true,
   };

   @Input() currentIndex: number = 0;

   constructor(private store: Store<AppState>, private asyncPipe: AsyncPipe) {
      this.isEditing$ = this.store.select(selectFormGraphEditingMode)

   }


   ngOnDestroy() {

      this.store.dispatch(setModeUpdateFormGraph({isUpdating: false}));
   }

   update(value:ValueGraph, currentIndex: number) {

      const isEditing = this.asyncPipe.transform(this.isEditing$);

      this.store.dispatch(setModeUpdateFormGraph({isUpdating: !isEditing}));

      this.store.dispatch(setCurrentIndexValueGraphToFormGraph({index: currentIndex}));

      this.store.dispatch(setCurrentValueGraph({ valueGraph:value }));

   }

   delete(index:number) {
      
      this.store.dispatch(subtractValueGraph({position: index, }));
   }

}
