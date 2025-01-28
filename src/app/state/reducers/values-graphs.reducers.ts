
import { createReducer, on } from "@ngrx/store";
import { addValueGraph, subtractValueGraph, getValuesGraph, updateValueGraph } from "../actions/values-graphs.actions";
import { ValueGraph } from "@core/models/value.graph.interface";

export const initialState: ReadonlyArray<ValueGraph> = []

export const valuesGraphsReducer = createReducer(
   initialState,
   on(addValueGraph, (state, { valueGraph } ) => {
      return [...state, valueGraph]
   }),
   on(subtractValueGraph, (state, { position }) => {
      return [...state].filter((value, index) => index !== position);
   }),
   on(getValuesGraph, (state, {valuesGraph}) => {
      return [...state, ...valuesGraph]
   }),
   on(updateValueGraph, (state, {position, valueGraph}) => {
      return [...state].map((value, index) => index === position ? valueGraph: value)
   })
);