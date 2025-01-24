import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRoutingModule } from './media-routing.module';
import { VideoComponent } from './components/video/video.component';
import { MediaPageComponent } from './page/media-page/media-page.component';

@NgModule({
  declarations: [
    VideoComponent,
    MediaPageComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }