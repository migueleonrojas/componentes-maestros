import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { GraphsPageComponent } from "./page/graphs-page/graphs-page.component";
import { FormGraphsPageComponent } from "./page/form-graphs-page/form-graphs-page.component";

const routes: Routes = [
   {
      path: '',
      component: GraphsPageComponent,
   },
   {
      path: 'formulario',
      component: FormGraphsPageComponent
   }

];


@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class GraphRoutingModule { }