import { createReducer, on } from "@ngrx/store";
import { setCurrentIndexValueGraphToFormGraph, setCurrentValueGraph, setModeUpdateFormGraph } from "../actions/form-graph.actions";
import { FormGraphState } from "@core/models/form.graph.state";
import { FormGroup } from "@angular/forms";


export const initialState: FormGraphState = {
   currentIndex: 0,
   isEditingValue: false,
   valueGraph: {color: '#000000', label: '', value: 0, id: '0', itsFiltered: false}
};

export const formGraphReducer = createReducer(
   initialState,
   on(setCurrentValueGraph, (state, { valueGraph }) => {
      return {
         ...state,
         valueGraph: valueGraph
      }
   }),
   on(setModeUpdateFormGraph, (state, { isUpdating }) => {
      return {
         ...state,
         isEditingValue: isUpdating
      }
   }),
   on(setCurrentIndexValueGraphToFormGraph, (state, { index }) => {
      return {
         ...state,
         currentIndex: index
      }
   })
);