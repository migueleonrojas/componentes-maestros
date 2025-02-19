import { BreakpointState } from "@angular/cdk/layout";
import { ActionReducerMap } from "@ngrx/store";
import { mediaMatcherReducer } from "./reducers/media-matcher.reducers";
import { ValueGraph } from "@core/models/value.graph.interface";

import { FormGraphState } from "@core/models/form.graph.state";
import { formGraphReducer } from "./reducers/form-graph.reducers";
import { valuesGraphsReducer } from "./reducers/values-graphs.reducers";
import { BarGraphState } from "@core/models/bar.graph.state";
import { barGraphReducer } from "./reducers/bar-graph.reducers";
import { LinearGraphState } from "@core/models/linear.graph.state";
import { linearGraphReducer } from "./reducers/linear-graph.reducers";
import { CircleGraphState } from "@core/models/circle.graph.state";
import { circularGraphReducer } from "./reducers/circle-graph.reducers";
import { VideoMedia } from "@core/models/video.interface";
import { videoReducer } from "./reducers/video.reducers";


export interface AppState {
   mediaMatcher: ReadonlyArray<BreakpointState>;
   valuesGraph: ReadonlyArray<ValueGraph>;
   formGraphState: FormGraphState;
   barGraphState: BarGraphState;
   linearGraphState: LinearGraphState;
   circleGraphState: CircleGraphState;
   videoMedia: VideoMedia
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
   mediaMatcher: mediaMatcherReducer,
   valuesGraph: valuesGraphsReducer,
   formGraphState: formGraphReducer,
   barGraphState: barGraphReducer,
   linearGraphState: linearGraphReducer,
   circleGraphState: circularGraphReducer,
   videoMedia: videoReducer
};