
import { CircleGraphState } from "@core/models/circle.graph.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCircleGraph = createFeatureSelector<CircleGraphState>('circleGraphState');



export const selectRectsOfCircleGraph = createSelector(
   selectCircleGraph,
   (state: CircleGraphState) => state.rects
);

export const selectCirclesOfCircleGraph = createSelector(
   selectCircleGraph,
   (state: CircleGraphState) => state.circles
);

export const selectTextsCircleGraph = createSelector(
   selectCircleGraph,
   (state: CircleGraphState) => state.texts
);


export const selectWidthCircleGraph = createSelector(
   selectCircleGraph,
   (state: CircleGraphState) => state.width
);

export const selectHeightCircleGraph = createSelector(
   selectCircleGraph,
   (state: CircleGraphState) => state.height
);
