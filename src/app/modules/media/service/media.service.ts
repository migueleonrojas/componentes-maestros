import { Injectable } from '@angular/core';
import { Quality, Resolution } from '@core/models/quality.interface';
import { Language, Subtitle } from '@core/models/subtitle.interface';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

   constructor() { }

   getAllRoutesSubtitles():Observable<Subtitle[]> {
      return of([
         {
            source: 'assets/subtitles/subtitles.es.vtt',
            language: Language.Spanish,
            srclang: 'es',
            label: 'Spanish'

         },
         {
            source: 'assets/subtitles/subtitles.en.vtt',
            language: Language.English,
            srclang: 'en',
            label: 'English'
         },
         {
            source: '',
            language: Language.None,
            srclang: '',
            label: 'None'
         }
      ])
   }

   getAllRoutesSrcVideo(): Observable<Quality[]> {
   
      return of([
         {
            source: 'assets/media/Music-480.mp4',
            resolution: Resolution.Standard
         },
         {
            source: 'assets/media/Music-720.mp4',
            resolution: Resolution.HD
         },
         {
            source: 'assets/media/Music-1080.mp4',
            resolution: Resolution.FULLHD
         },
      ]);

   }
}
