import { FormGraphState } from "@core/models/form.graph.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectValueGraph = createFeatureSelector<FormGraphState>('formGraphState');


export const selectFormGraphEditingMode = createSelector(
   selectValueGraph,
   (state: FormGraphState) => state.isEditingValue
);

export const selectValueGraphToFormGraph = createSelector(
   selectValueGraph,
   (state: FormGraphState) => state.valueGraph
);

export const selectCurrentIndexValueGraphToFormGraph = createSelector(
   selectValueGraph,
   (state: FormGraphState) => state.currentIndex
);