import { BreakpointState } from "@angular/cdk/layout";
import { createReducer, on } from "@ngrx/store";
import { setMediaMatcher, startSetMediaMatcher } from "../actions/media-matcher.actions";

export const initialState: ReadonlyArray<BreakpointState> = [];


export const mediaMatcherReducer = createReducer(
   initialState,
   on(startSetMediaMatcher, (state, { breakpoint }) => {
      return [...state];
   }),
   on(setMediaMatcher, (state, { breakpointState }) => {
      return [...state, breakpointState];
   })
);