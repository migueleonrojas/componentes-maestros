
import { createReducer, on } from "@ngrx/store";
import { addValueGraph, subtractValueGraph, getValuesGraph, updateValueGraph, setFilteredValueGraph } from "../actions/values-graphs.actions";
import { ValueGraph } from "@core/models/value.graph.interface";

export const initialState: ReadonlyArray<ValueGraph> = [
   {
      color: '#f14212',
      id:'0',
      itsFiltered:false,
      label:'holis',
      value: 1000
   },
   {
      color: '#ee92f2',
      id:'1',
      itsFiltered:false,
      label:'holisa',
      value: 700
   },
   {
      color: '#86d2e0',
      id:'2',
      itsFiltered:false,
      label:'holisa',
      value: 789
   },
   {
      color: '#99d2ff',
      id:'3',
      itsFiltered:false,
      label:'holisa',
      value: 577
   },
   {
      color: '#eed2ff',
      id:'4',
      itsFiltered:false,
      label:'holisa',
      value: 875
   },
   {
      color: '#00d2e2',
      id:'5',
      itsFiltered:false,
      label:'holisa',
      value: 698
   },
];

export const valuesGraphsReducer = createReducer(
   initialState,
   on(addValueGraph, (state, { valueGraph } ) => {
      return [...state, {...valueGraph, id: `${state.length}`}]
   }),
   on(subtractValueGraph, (state, { position }) => {
      return [...state].filter((value, index) => index !== position);
   }),
   on(getValuesGraph, (state, {valuesGraph}) => {
      return [...state, ...valuesGraph]
   }),
   on(updateValueGraph, (state, {position, valueGraph}) => {
      return [...state].map((value, index) => index === position ? valueGraph: value)
   }),
   on(setFilteredValueGraph, (state, {id}) => {
      return [...state].map((valueGraph) => (valueGraph.id === id)
         ? {
            ...valueGraph, 
            itsFiltered: ([...state].filter((value) => value.itsFiltered).length === state.length - 1) 
               ? false
               : !valueGraph.itsFiltered
         }
         : valueGraph
      )
   }),
);