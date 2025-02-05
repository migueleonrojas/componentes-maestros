import { ElementRef } from "@angular/core";
import { Line } from "@core/models/line.interface";
import { Rect } from "@core/models/rect.interface";
import { Text } from "@core/models/text.interface";
import { ValueGraph } from "@core/models/value.graph.interface";
import { createAction, props } from "@ngrx/store"; 


export const startBuildBarGraphs = createAction(
   '[Bar Graph] Start Build Bar Graphs',
   props<{
      valuesGraph: ReadonlyArray<ValueGraph>,
      height: number,
      width: number
   }>()
);


export const clearBarGraph = createAction(
   '[Bar Graph] Clear All Element of the Graph'
);

export const setCrossAxis = createAction(
   '[Bar Graph] Set Cross Axis',
   props<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>
   }>()
);

export const setMainAxis = createAction(
   '[Bars Graph] Set Main Axis',
   props<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>,
      rects: ReadonlyArray<Rect>,
      width: number
   }>()
);

export const setLegend = createAction(
   '[Bars Graph] Generate Legend To Bar Graph',
   props<{
      texts: ReadonlyArray<Text>,
      rects: ReadonlyArray<Rect>,
      width: number
   }>()
)