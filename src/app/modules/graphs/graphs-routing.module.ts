import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { GraphsPageComponent } from "./page/graphs-page/graphs-page.component";

const routes: Routes = [
   {
      path: '',
      component: GraphsPageComponent
   }
];


@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class GraphRoutingModule { }