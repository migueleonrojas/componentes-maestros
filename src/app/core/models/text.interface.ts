import { TextSpan } from "./text.span.interface";

export interface Text {
   x: number;
   y: number;
   content: string;
   color: string;
   strokeWidth: string;
   textSpan?: ReadonlyArray<TextSpan>
}