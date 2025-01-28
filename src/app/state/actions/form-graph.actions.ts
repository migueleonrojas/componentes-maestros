import { FormGroup } from "@angular/forms";
import { ValueGraph } from "@core/models/value.graph.interface";
import { createAction, props } from "@ngrx/store"; 


export const setCurrentValueGraph = createAction(
   '[Form Graph] Set ValueGraph To Form Graph',
   props<{valueGraph:ValueGraph}>()
);

export const setModeUpdateFormGraph = createAction(
   '[Form Graph] Set Mode Update Form Graph',
   props<{isUpdating: boolean}>()
);

export const setCurrentIndexValueGraphToFormGraph = createAction(
   '[Form Graph] Set Current Index Value Graph To Form Graph',
   props<{index: number}>()
);