
import { Circle } from "./circle.interface";
import { Rect } from "./rect.interface";
import { Text } from "./text.interface";

export interface CircleGraphState {
   circles: ReadonlyArray<Circle>;
   texts: ReadonlyArray<Text>;
   rects: ReadonlyArray<Rect>;
   width: number;
   height: number;
}
