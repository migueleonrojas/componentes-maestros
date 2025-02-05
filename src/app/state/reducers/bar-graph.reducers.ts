import { BarGraphState } from "@core/models/bar.graph.state";
import { createReducer, on } from "@ngrx/store";
import { startBuildBarGraphs, setMainAxis, setCrossAxis, clearBarGraph, setLegend } from "../actions/bar-graph.actions";

export const initialState: BarGraphState = {
   lines: [],
   texts: [],
   rects: [],
   width: 0,
   height: 300
};

export const barGraphReducer = createReducer(
   initialState,
   on(startBuildBarGraphs, (state, { valuesGraph, height }) => {
      return {
         ...state,
         height
      }
   }),
   on(clearBarGraph, ((state) => {
      return {
         ...state,
         rects: [],
         lines: [],
         texts: [],
         width: 0,
         height: 300
      }
   })),
   on(setCrossAxis, (state, { lines, texts }) => {
      return {
         ...state,
         lines: [...state.lines, ...lines],
         texts: [...state.texts, ...texts]
      }
   }),
   on(setMainAxis, (state, { lines, texts, rects }) => {
      return {
         ...state,
         lines: [...state.lines, ...lines],
         texts: [...state.texts, ...texts],
         rects: [...state.rects, ...rects],
         
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