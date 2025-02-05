import { ValueGraph } from "@core/models/value.graph.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectValuesGraph = createFeatureSelector<ReadonlyArray<ValueGraph>>('valuesGraph');

export const selectValueGraphByIndex = (index: number) => createSelector(
   selectValuesGraph,
   (state: ReadonlyArray<ValueGraph>) => state[index]
);

export const selectFilteredValuesGraph =  createSelector(
   selectValuesGraph,
   (state: ReadonlyArray<ValueGraph>) => state.filter((value, index) => !value.itsFiltered)
)



