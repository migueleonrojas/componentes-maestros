import { LinearGraphState } from "@core/models/linear.graph.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectLinearGraph = createFeatureSelector<LinearGraphState>('linearGraphState');

export const selectLinesOfLinearGraph = createSelector(
   selectLinearGraph,
   (state: LinearGraphState) => state.lines
);

export const selectRectsOfLinearGraph = createSelector(
   selectLinearGraph,
   (state: LinearGraphState) => state.rects
);

export const selectTextsLinearGraph = createSelector(
   selectLinearGraph,
   (state: LinearGraphState) => state.texts
);

export const selectWidthLinearGraph = createSelector(
   selectLinearGraph,
   (state: LinearGraphState) => state.width
);

export const selectHeightLinearGraph = createSelector(
   selectLinearGraph,
   (state: LinearGraphState) => state.height
);
