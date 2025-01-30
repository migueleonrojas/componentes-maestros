import { BarGraphState } from "@core/models/bar.graph.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectBarGraph = createFeatureSelector<BarGraphState>('barGraphState');

export const selectLinesOfBarGraph = createSelector(
   selectBarGraph,
   (state: BarGraphState) => state.lines
);

export const selectRectsOfBarGraph = createSelector(
   selectBarGraph,
   (state: BarGraphState) => state.rects
);

export const selectTextsBarGraph = createSelector(
   selectBarGraph,
   (state: BarGraphState) => state.texts
);

export const selectWidthBarGraph = createSelector(
   selectBarGraph,
   (state: BarGraphState) => state.width
);

export const selectHeightBarGraph = createSelector(
   selectBarGraph,
   (state: BarGraphState) => state.height
);
