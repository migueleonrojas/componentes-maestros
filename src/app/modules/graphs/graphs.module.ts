import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { GraphRoutingModule } from './graphs-routing.module';
import { GraphsPageComponent } from './page/graphs-page/graphs-page.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { LinearGraphComponent } from './components/linear-graph/linear-graph.component';
import { CircleGraphComponent } from './components/circle-graph/circle-graph.component';
import { FormGraphsPageComponent } from './page/form-graphs-page/form-graphs-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormGraphComponent } from './components/form-graph/form-graph.component';
import { ListValuesGraphComponent } from './components/list-values-graph/list-values-graph.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValueGraphComponent } from './components/value-graph/value-graph.component';


@NgModule({
   providers: [
      AsyncPipe,
      DecimalPipe
   ], 
   declarations: [
      GraphsPageComponent,
      BarGraphComponent,
      LinearGraphComponent,
      CircleGraphComponent,
      FormGraphsPageComponent,
      FormGraphComponent,
      ListValuesGraphComponent,
      ValueGraphComponent,
      
   ],
   imports: [
      CommonModule,
      GraphRoutingModule,
      MatTabsModule,
      MatButtonModule,
      MatIconModule,
      RouterModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule
   ]
})
export class GraphsModule { }