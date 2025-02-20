import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild,  } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { Quality } from '@core/models/quality.interface';
import { Subtitle } from '@core/models/subtitle.interface';
import { MediaService } from '@modules/media/service/media.service';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { startSetMediaMatcher } from 'src/app/state/actions/media-matcher.actions';
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

   ischangedQuality: boolean = false;



   constructor(private store: Store, private asyncPipe: AsyncPipe, private mediaService:MediaService) {
      
      this.store.dispatch(startSetMediaMatcher({breakpoint: '(min-width: 42.5rem)'}))
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
      
      if(this.ischangedQuality) {
         this.store.dispatch(saveProgressVideo({progress: this.asyncPipe.transform(this.currentTime$)!}));
         ($event.target as HTMLVideoElement).textTracks[0].mode = "disabled";
         this.ischangedQuality = false;
      }
      else{
         ($event.target as HTMLVideoElement).textTracks[0].mode = "showing";
         this.store.dispatch(saveProgressVideo({progress: ($event.target as HTMLVideoElement).currentTime}));
      }
           
   }

   setSliderProperties($event: Event) {
      this.max = ($event.target as HTMLVideoElement).duration;
   }

   putSubtitles(subtitle: Subtitle) {

      this.store.dispatch(setSubtitle({subtitle}));

   }

   setQuality(quality:string) {

      this.store.dispatch(setQualityVideo({quality}));

      this.ischangedQuality = true;
   }

}
