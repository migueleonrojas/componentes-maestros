import { GraphService } from "@modules/graphs/services/graph.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { selectValuesGraph } from "../selectors/values-graphs.selectors";
import { Injectable } from "@angular/core";

@Injectable()
export class CircleGraphEffects {


   $startBuildCircleGraph = createEffect(() => this.actions$.pipe(
      ofType('[Circle Graph] Start Build Circle Graphs'),
      mergeMap((startAction: any) => this.store.select(selectValuesGraph)
         .pipe(
            mergeMap((valuesGraph) => this.graphService.generateLegends(valuesGraph).pipe(
                  mergeMap((legendService) => this.graphService.generatePiesToCircleGraphs(
                     startAction.valuesGraph,
                     startAction.height,
                     legendService.width
                     ).pipe(
                        switchMap((piesService) => of(
                        ({
                           type: '[Circle Graph] Generate Legend To Circle Graph',
                           texts: legendService.texts,
                           rects: legendService.rects,
                           width: legendService.width
                        }),
                        ({
                           type: '[Circle Graph] Put Pies On Circle Graphs',
                           circles: piesService,
                        })
                        ))
                     )
                  )
               )
            )
         )
      )
   ));



   constructor(
      private actions$: Actions,
      private graphService: GraphService,
      private store: Store,
   ) { }

}