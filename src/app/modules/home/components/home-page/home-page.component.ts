import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startSetMediaMatcher } from 'src/app/state/actions/media-matcher.actions';
import { selectBreakPointIsMatched } from 'src/app/state/selectors/media-matcher.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

   isMatchesBreakPoint$: Observable<boolean> = new Observable();


   constructor(private store: Store<any>) {

      this.store.dispatch(startSetMediaMatcher({breakpoint: '(min-width: 30rem)'}))

      this.isMatchesBreakPoint$ = this.store.select(selectBreakPointIsMatched);

      /* console.log(this.isMatchesBreakPoint$); */

   }

   ngOnInit(): void {



   }

}
