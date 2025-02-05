import { LinearGraphState } from "@core/models/linear.graph.state";
import { createReducer, on } from "@ngrx/store";
import { clearLinearGraph, setCrossAxis, setLegend, setMainAxis, startBuildLinearGraphs } from "../actions/linear-graph.action";

export const initialState: LinearGraphState = {
   lines: [],
   texts: [],
   rects: [],
   width: 0,
   height: 300
};

export const linearGraphReducer = createReducer(
   initialState,
   on(startBuildLinearGraphs, (state, { valuesGraph, height }) => {
      return {
         ...state,
         height
      }
   }),
   on(clearLinearGraph, (state) => {
      return {
         ...state,
         rects: [],
         lines: [],
         texts: [],
         width: 0,
         height: 300
      }
   }),
   on(setCrossAxis, (state, { lines, texts }) => {
      return {
         ...state,
         lines: [...state.lines, ...lines],
         texts: [...state.texts, ...texts]
      }
   }),
   on(setMainAxis, (state, { lines, texts }) => {
      return {
         ...state,
         lines: [...state.lines, ...lines],
         texts: [...state.texts, ...texts],
         
      }
   }),
   on(setLegend, (state, { rects, texts, width }) => {
      return {
         ...state,
         rects: [...state.rects, ...rects],
         texts: [...state.texts, ...texts],
         width
      }
   })
);