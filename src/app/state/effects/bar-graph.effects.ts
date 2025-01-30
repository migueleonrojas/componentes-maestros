import { Injectable } from "@angular/core";
import { GraphService } from "@modules/graphs/services/graph.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, mergeMap } from "rxjs/operators";

@Injectable()
export class BarGraphEffects {

   $startBuildMainAxisGraph = createEffect(() => this.actions$.pipe(
      ofType('[Bar Graph] Start Build Bar Graphs'),
      mergeMap(({valuesGraph, height} ) => this.graphService.generateMainAxis(
            valuesGraph,
            height,
         ).pipe(
            map(({ rects, width, lines, texts, height, valuesGraph }) => ({ 
               type: '[Bars Graph] Set Main Axis With Bar and Labels',
               rects,
               lines,
               texts,
               width,
               valuesGraph,
               height
            })),      
         )
      )
   ));

   constructor(
         private actions$: Actions,
         private graphService: GraphService
      ) { }

}