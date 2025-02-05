import { ValueGraph } from "@core/models/value.graph.interface";
import { createAction, props } from "@ngrx/store"; 

export const addValueGraph = createAction(
   '[Form Values Graphs] Add Value',
   props<{ valueGraph: ValueGraph }>()
);

export const subtractValueGraph = createAction(
   '[Form Values Graphs] Remove Value',
   props<{ position:number }>()
);

export const getValuesGraph = createAction(
   '[Form Values Graphs] Get Values',
   props<{ valuesGraph: ReadonlyArray<ValueGraph>}>()
);

export const updateValueGraph = createAction(
   '[Form Values Graphs] Update Values',
   props<{position:number, valueGraph: ValueGraph}>()
);

export const setFilteredValueGraph = createAction(
   '[Form Values Graphs] Set Visible Value Graph',
   props<{id:string}>()
);