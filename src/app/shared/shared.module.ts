import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavigationComponent } from './components/menu-navigation/menu-navigation.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
   declarations: [
      MenuNavigationComponent
   ],
   imports: [
      CommonModule,
      RouterModule,
      MatListModule,
      MatDividerModule
   ],
   exports: [
      MenuNavigationComponent 
   ]
})
export class SharedModule { }
