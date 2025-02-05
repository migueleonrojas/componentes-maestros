import { Line } from "./line.interface";
import { Rect } from "./rect.interface";
import { Text } from "./text.interface";


export interface LinearGraphState {
   lines: ReadonlyArray<Line>;
   texts: ReadonlyArray<Text>;
   rects: ReadonlyArray<Rect>;
   width: number;
   height: number;
}