import { ValueGraph } from "@core/models/value.graph.interface";
import { createAction, props } from "@ngrx/store"; 
import { Rect } from "@core/models/rect.interface";
import { Text } from "@core/models/text.interface";
import { Circle } from "@core/models/circle.interface";

export const startBuildCircleGraphs = createAction(
   '[Circle Graph] Start Build Circle Graphs',
   props<{
      valuesGraph: ReadonlyArray<ValueGraph>,
      height: number
   }>()
);

export const putPies = createAction(
   '[Circle Graph] Put Pies On Circle Graphs',
   props<{
      circles: ReadonlyArray<Circle>,
      textsValue: ReadonlyArray<Text>,
      height: number,
      width: number
   }>()
);


export const clearCircleGraph = createAction(
   '[Circle Graph] Clear All Element of the Graph'
);

export const setLegend = createAction(
   '[Circle Graph] Generate Legend To Circle Graph',
   props<{
      texts: ReadonlyArray<Text>,
      rects: ReadonlyArray<Rect>,
      width: number
   }>()
);