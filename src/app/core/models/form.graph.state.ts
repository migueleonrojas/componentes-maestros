import { FormGroup } from "@angular/forms";
import { ValueGraph } from "./value.graph.interface";


export interface FormGraphState {
   currentIndex: number;
   isEditingValue: boolean;
   valueGraph: ValueGraph;
}