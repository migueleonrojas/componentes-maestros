import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
   declarations: [
      HomePageComponent
   ],
   imports: [
      CommonModule,
      HomeRoutingModule,
      SharedModule,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule
   ],
})
export class HomeModule { }
