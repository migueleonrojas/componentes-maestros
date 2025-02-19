import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavigationComponent } from './components/menu-navigation/menu-navigation.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { SecondsToTimeVideoPipe } from './pipes/seconds-to-time-video.pipe';

@NgModule({
   declarations: [
      MenuNavigationComponent,
      SecondsToTimeVideoPipe
      
   ],
   imports: [
      CommonModule,
      RouterModule,
      MatListModule,
      MatDividerModule,
   ],
   exports: [
      MenuNavigationComponent,
      SecondsToTimeVideoPipe
   ]
})
export class SharedModule { }
