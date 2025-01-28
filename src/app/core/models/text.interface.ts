import { TextSpan } from "./text.span.interface";

export interface Text {
   x: number;
   y: number;
   content: string;
   color: string;
   textSpan: ReadonlyArray<TextSpan>
}