import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graphs-routing.module';
import { GraphsPageComponent } from './page/graphs-page/graphs-page.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { LinearGraphComponent } from './components/linear-graph/linear-graph.component';
import { CircleGraphComponent } from './components/circle-graph/circle-graph.component';


@NgModule({
  declarations: [
    GraphsPageComponent,
    BarGraphComponent,
    LinearGraphComponent,
    CircleGraphComponent
  ],
  imports: [
    CommonModule,
    GraphRoutingModule
  ]
})
export class GraphsModule { }