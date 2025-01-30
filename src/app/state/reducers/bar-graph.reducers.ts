import { BarGraphState } from "@core/models/bar.graph.state";
import { createReducer, on } from "@ngrx/store";
import { startBuildBarGraphs, setCrossAxisWithUnits, setMainAxisWithBarsAndLabels } from "../actions/bar-graph.actions";

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
   on(setCrossAxisWithUnits, (state, { lines, texts }) => {
      return {
         ...state,
         lines: [...state.lines, ...lines],
         texts: [...state.texts, ...texts]
      }
   }),
   on(setMainAxisWithBarsAndLabels, (state, { lines, texts, rects, width }) => {
      return {
         ...state,
         lines: [...state.lines, ...lines],
         texts: [...state.texts, ...texts],
         rects: [...state.rects, ...rects],
         width
      }
   })

);