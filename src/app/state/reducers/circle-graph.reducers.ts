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
         textsValue: [],
         width: 0,
         height: 300
      }
   }),
   on(putPies, (state, { circles, textsValue } ) => {
      return { 
         ...state,
         circles: [...state.circles, ...circles],
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