import { Injectable } from "@angular/core";
import { GraphService } from "@modules/graphs/services/graph.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { merge, of } from "rxjs";
import { concatMap, exhaustMap, map, mergeAll, mergeMap, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { selectValuesGraph } from "../selectors/values-graphs.selectors";

@Injectable()
export class BarGraphEffects {

   $startBuildMainAxisGraph = createEffect(() => this.actions$.pipe(
      ofType('[Bar Graph] Start Build Bar Graphs'),
      mergeMap(( startAction: any ) => this.graphService.generateMainAxis(
            startAction.valuesGraph,
            startAction.height,
      ).pipe(
         mergeMap((mainAxisService) => this.graphService.generateCrossAxis(
            mainAxisService.valuesGraph, 
            mainAxisService.height, 
            mainAxisService.width,
         ).pipe(
            withLatestFrom(this.store.select(selectValuesGraph)),
            mergeMap(([crossAxisService, valuesGraph]) => this.graphService.generateLegends(valuesGraph).pipe(

               switchMap((legendService) => of(
                  ({
                     type: '[Bars Graph] Set Main Axis',
                     rects: mainAxisService.rects,
                     lines: mainAxisService.lines,
                     texts: mainAxisService.texts,
                     valuesGraph: mainAxisService.valuesGraph,
                     height: mainAxisService.height
                  }),
                  ({
                     type: '[Bar Graph] Set Cross Axis',
                     lines: crossAxisService.lines,
                     texts: crossAxisService.texts
                  }),
                  ({
                     type: '[Bars Graph] Generate Legend To Bar Graph',
                     texts: legendService.texts,
                     rects: legendService.rects,
                     width: legendService.width
                  })
               ))

               )
            )
         ))
      )),
   ));


   constructor(
      private actions$: Actions,
      private graphService: GraphService,
      private store: Store,
   ) { }

}