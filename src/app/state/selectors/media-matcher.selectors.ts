import { BreakpointState } from "@angular/cdk/layout";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectBreakpoints = createFeatureSelector<ReadonlyArray<BreakpointState>>('mediaMatcher');

export const selectBreakPointIsMatched = createSelector(
   selectBreakpoints,
   (state: ReadonlyArray<BreakpointState>) => state[state.length - 1].matches ?? false
);