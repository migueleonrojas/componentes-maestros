import { Line } from "@core/models/line.interface";
import { Rect } from "@core/models/rect.interface";
import { Text } from "@core/models/text.interface";
import { ValueGraph } from "@core/models/value.graph.interface";
import { createAction, props } from "@ngrx/store"; 


export const startBuildLinearGraphs = createAction(
   '[Linear Graph] Start Build Linear Graphs',
   props<{
      valuesGraph: ReadonlyArray<ValueGraph>,
      height: number,
      width: number
   }>()
);

export const clearLinearGraph = createAction(
   '[Linear Graph] Clear All Element of the Graph'
);

export const setCrossAxis = createAction(
   '[Linear Graph] Set Cross Axis',
   props<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>
   }>()
);

export const setMainAxis = createAction(
   '[Linear Graph] Set Main Axis',
   props<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>
      width: number
   }>()
);

export const setLegend = createAction(
   '[Linear Graph] Generate Legend To Linear Graph',
   props<{
      texts: ReadonlyArray<Text>,
      rects: ReadonlyArray<Rect>,
      width: number
   }>()
)