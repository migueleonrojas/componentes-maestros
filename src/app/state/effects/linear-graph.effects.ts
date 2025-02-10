import { Injectable } from "@angular/core";
import { GraphService } from "@modules/graphs/services/graph.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import {  mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { selectValuesGraph } from "../selectors/values-graphs.selectors";

@Injectable()
export class LinearGraphEffects {


   $startBuildBarGraph = createEffect(() => this.actions$.pipe(
      ofType('[Linear Graph] Start Build Linear Graphs'),
      mergeMap(( startAction: any ) => this.graphService.generateMainAxisLinearGraphs(
            startAction.valuesGraph,
            startAction.height,
      ).pipe(
         mergeMap((mainAxisLinearGraphService) => this.graphService.generateCrossAxis(
            mainAxisLinearGraphService.valuesGraph, 
            mainAxisLinearGraphService.height, 
            mainAxisLinearGraphService.width,
         ).pipe(
            withLatestFrom(this.store.select(selectValuesGraph)),
            mergeMap(([crossAxisService, valuesGraph]) => this.graphService.generateLegends(valuesGraph).pipe(

               switchMap((legendService) => of(
                  ({
                     type: '[Linear Graph] Set Main Axis',
                     lines: mainAxisLinearGraphService.lines,
                     texts: mainAxisLinearGraphService.texts,
                     valuesGraph: mainAxisLinearGraphService.valuesGraph,
                     height: mainAxisLinearGraphService.height
                  }),
                  ({
                     type: '[Linear Graph] Set Cross Axis',
                     lines: crossAxisService.lines,
                     texts: crossAxisService.texts,
                     valuesGraph: mainAxisLinearGraphService.valuesGraph
                  }),
                  ({
                     type: '[Linear Graph] Generate Legend To Linear Graph',
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