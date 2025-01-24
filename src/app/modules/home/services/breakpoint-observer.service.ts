import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BreakpointObserverService {

  constructor( private breakpointObserver: BreakpointObserver) { }


   setBreakpoints(breakpoint:string):Observable<BreakpointState> {
    
      return this.breakpointObserver.observe([breakpoint]);

   }


}
