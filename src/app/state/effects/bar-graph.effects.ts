import { Injectable } from "@angular/core";
import { GraphService } from "@modules/graphs/services/graph.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import {  mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { selectValuesGraph } from "../selectors/values-graphs.selectors";

@Injectable()
export class BarGraphEffects {

   $startBuildBarGraph = createEffect(() => this.actions$.pipe(
      ofType('[Bar Graph] Start Build Bar Graphs'),
      mergeMap(( startAction: any ) => this.graphService.generateMainAxisBarGraphs(
            startAction.valuesGraph,
            startAction.height,
      ).pipe(
         mergeMap((mainAxisBarGraphService) => this.graphService.generateCrossAxis(
            mainAxisBarGraphService.valuesGraph, 
            mainAxisBarGraphService.height, 
            mainAxisBarGraphService.width,
         ).pipe(
            withLatestFrom(this.store.select(selectValuesGraph)),
            mergeMap(([crossAxisService, valuesGraph]) => this.graphService.generateLegends(valuesGraph).pipe(

               switchMap((legendService) => of(
                  ({
                     type: '[Bars Graph] Set Main Axis',
                     rects: mainAxisBarGraphService.rects,
                     lines: mainAxisBarGraphService.lines,
                     texts: mainAxisBarGraphService.texts,
                     valuesGraph: mainAxisBarGraphService.valuesGraph,
                     height: mainAxisBarGraphService.height
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