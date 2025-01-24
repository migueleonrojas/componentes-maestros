import { Injectable } from "@angular/core";
import { BreakpointObserverService } from "@modules/home/services/breakpoint-observer.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, tap, exhaustMap } from "rxjs/operators";

@Injectable()
export class MediaMatcherEffects {


   $setMediaMatcher = createEffect(() => this.actions$.pipe(
      ofType('[Media Matcher] Start Set Media Matcher'),
      mergeMap((action:any) => this.breakpointObserverService.setBreakpoints(action.breakpoint)
         .pipe(
            map(breakpointState => ({type:'[Media Matcher] Set Media Matcher', breakpointState}))
         )
      )
   ));

   constructor(
      private actions$: Actions,
      private breakpointObserverService: BreakpointObserverService
   ) { }
}