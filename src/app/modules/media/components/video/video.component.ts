import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild,  } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { Quality } from '@core/models/quality.interface';
import { Subtitle } from '@core/models/subtitle.interface';
import { MediaService } from '@modules/media/service/media.service';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { saveProgressVideo, setQualityVideo, setSubtitle } from 'src/app/state/actions/video-actions';
import {  selectProgressVideo, selectQualityVideo, selectSubtitleSelected } from 'src/app/state/selectors/video.selectors';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements AfterViewInit{

   @ViewChild('video') video : ElementRef<HTMLVideoElement> = {} as ElementRef<HTMLVideoElement>
   srcVideo$: Observable<string> = new Observable();
   isActivesubTitle$: Observable<boolean> = new Observable();
   subtitle$: Observable<Subtitle> = new Observable();
   subtitles$: Observable<Subtitle[]> = this.mediaService.getAllRoutesSubtitles();
   routesSrc$: Observable<Quality[]> = this.mediaService.getAllRoutesSrcVideo();

   currentTime$: Observable<number> = new Observable();
   min = 0;
   max = 0;



   constructor(private store: Store, private asyncPipe: AsyncPipe, private mediaService:MediaService) {
      
      this.srcVideo$ = this.store.select(selectQualityVideo)
      this.subtitle$ = this.store.select(selectSubtitleSelected);
      this.currentTime$ = this.store.select(selectProgressVideo);

   }

   ngAfterViewInit(): void {
   
   }


   toggleStart() {

      const video = (this.video.nativeElement as HTMLVideoElement);

      video.currentTime = this.asyncPipe.transform(this.currentTime$)?.valueOf()!;

      if(video.paused) {
         video.play();
      
         return;
      }

      video.pause();

   }

   changeProgress($event: MatSliderChange) {
      (this.video.nativeElement as HTMLVideoElement).currentTime = $event.value!;
   }

   setProgress($event: Event) {

      this.store.dispatch(saveProgressVideo({progress: Math.round(($event.target as HTMLVideoElement).currentTime)}))
   }

   setSliderProperties($event: Event) {
      this.max = Math.round(($event.target as HTMLVideoElement).duration);
   }

   putSubtitles(subtitle: Subtitle) {

      this.store.dispatch(setSubtitle({subtitle}));

   }

   setQuality(quality:string) {

      this.store.dispatch(setQualityVideo({quality}));
   }

}
