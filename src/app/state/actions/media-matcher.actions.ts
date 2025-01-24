import { BreakpointState } from "@angular/cdk/layout";
import { createAction, props } from "@ngrx/store"; 

export const startSetMediaMatcher = createAction(
   '[Media Matcher] Start Set Media Matcher',
   props<{ breakpoint: string }>()
);

export const setMediaMatcher = createAction(
  '[Media Matcher] Set Media Matcher',
  props<{ breakpointState: BreakpointState }>()
);
 
