import { CircleGraphState } from "@core/models/circle.graph.state";
import { createReducer, on } from "@ngrx/store";
import { clearCircleGraph, putPies, setLegend, startBuildCircleGraphs } from "../actions/circle-graph.actions";

export const initialState: CircleGraphState = {
   circles: [],
   texts: [],
   rects: [],
   width: 0,
   height: 300
};

export const circularGraphReducer = createReducer(
   initialState,
   on(startBuildCircleGraphs, (state, { valuesGraph, height } ) => {
      return {
         ...state,
         height
      }
   }),
   on(clearCircleGraph, (state) => {
      return {
         ...state,
         rects: [],
         circles: [],
         texts: [],
         width: 0,
         height: 300
      }
   }),
   on(putPies, (state, { circles, texts } ) => {
      return { 
         ...state,
         circles: [...state.circles, ...circles],
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