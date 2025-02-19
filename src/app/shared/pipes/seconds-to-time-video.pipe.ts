import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTimeVideo'
})
export class SecondsToTimeVideoPipe implements PipeTransform {

   transform(value: number): string {

      if(typeof value !== 'number') return value;

      let minutes = `0${Math.floor(value / 60)}`.slice(-2);

      let seconds = `0${Math.round(( (value / 60) - Number(minutes) ) * 60)}`.slice(-2);

      return `${minutes}:${seconds}`;

   }

}
