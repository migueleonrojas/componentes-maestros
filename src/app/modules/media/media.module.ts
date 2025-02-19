import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MediaRoutingModule } from './media-routing.module';
import { VideoComponent } from './components/video/video.component';
import { MediaPageComponent } from './page/media-page/media-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from '@shared/shared.module';



@NgModule({
   providers: [
      AsyncPipe
   ],
   declarations: [
      VideoComponent,
      MediaPageComponent
   ],
   imports: [
      CommonModule,
      MediaRoutingModule,
      MatIconModule,
      MatButtonModule,
      MatProgressBarModule,
      MatMenuModule,
      MatSliderModule,
      SharedModule
   ]
})
export class MediaModule { }