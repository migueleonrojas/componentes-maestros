import { BreakpointState } from "@angular/cdk/layout";
import { ActionReducerMap } from "@ngrx/store";
import { mediaMatcherReducer } from "./reducers/media-matcher.reducers";
import { ValueGraph } from "@core/models/value.graph.interface";

import { FormGraphState } from "@core/models/form.graph.state";
import { formGraphReducer } from "./reducers/form-graph.reducers";
import { valuesGraphsReducer } from "./reducers/values-graphs.reducers";


export interface AppState {
   mediaMatcher: ReadonlyArray<BreakpointState>;
   valuesGraph: ReadonlyArray<ValueGraph>;
   formGraphState: FormGraphState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
   mediaMatcher: mediaMatcherReducer,
   valuesGraph: valuesGraphsReducer,
   formGraphState: formGraphReducer

};