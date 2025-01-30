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
)

export const setCrossAxisWithUnits = createAction(
   '[Bar Graph] Set Cross Axis Lines With Units Scale',
   props<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>
   }>()
);

export const setMainAxisWithBarsAndLabels = createAction(
   '[Bars Graph] Set Main Axis With Bar and Labels',
   props<{
      lines: ReadonlyArray<Line>,
      texts: ReadonlyArray<Text>,
      rects: ReadonlyArray<Rect>,
      width: number
   }>()
)