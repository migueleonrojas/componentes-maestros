import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ValueGraph } from '@core/models/value.graph.interface';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { setModeUpdateFormGraph } from 'src/app/state/actions/form-graph.actions';
import { addValueGraph, updateValueGraph } from 'src/app/state/actions/values-graphs.actions';
import { AppState } from 'src/app/state/app.state';

import { selectFormGraphEditingMode, selectValueGraphToFormGraph, selectCurrentIndexValueGraphToFormGraph } from 'src/app/state/selectors/form-graph.selectors';


@Component({
  selector: 'app-form-graph',
  templateUrl: './form-graph.component.html',
  styleUrls: ['./form-graph.component.scss']
})
export class FormGraphComponent {

   label: FormControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
   value: FormControl = new FormControl(0, [Validators.required, Validators.min(0), Validators.max(1000000000000)]);
   color: FormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]);

   label$: Observable<string> = of('hola');

   formValueGraph: FormGroup = new FormGroup({
      label: new FormControl(''),
      value: new FormControl(''),
      color: new FormControl(''),
   });

   isModeEditing$: Observable<boolean> = new Observable();
   currentValueGraph$: Observable<ValueGraph> = new Observable();
   currentIndexValueGraph$: Observable<number> = new Observable();

   
   constructor(private store: Store<AppState>, private asyncPipe: AsyncPipe) {

      this.getSelectors();
      this.createFormBuilder();

   }

   private getSelectors() {

      this.isModeEditing$ = this.store.select(selectFormGraphEditingMode);
      this.currentValueGraph$ = this.store.select(selectValueGraphToFormGraph);
      this.currentIndexValueGraph$ = this.store.select(selectCurrentIndexValueGraphToFormGraph);
   }

   

   private async createFormBuilder() {


      this.formValueGraph = new FormGroup({
         label: this.label,
         value: this.value,
         color: this.color,
      });

      this.currentValueGraph$.subscribe((value: ValueGraph) => {
         this.formValueGraph.setValue(value);
      });

   }


   sendValueGraph() {

      if(!this.asyncPipe.transform(this.isModeEditing$)) {

         this.store.dispatch(addValueGraph({valueGraph: {...this.formValueGraph.value}}))

         return;
      }

      this.store.dispatch(updateValueGraph({
         position: this.asyncPipe.transform(this.currentIndexValueGraph$)!,
         valueGraph: {...this.formValueGraph.value}
      }));

      this.store.dispatch(setModeUpdateFormGraph({isUpdating: false}));
      
   }

   

}
