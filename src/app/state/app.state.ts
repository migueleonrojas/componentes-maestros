import { BreakpointState } from "@angular/cdk/layout";
import { ActionReducerMap } from "@ngrx/store";
import { mediaMatcherReducer } from "./reducers/media-matcher.reducers";

export interface AppState {
   mediaMatcher: ReadonlyArray<BreakpointState>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
   mediaMatcher: mediaMatcherReducer
};