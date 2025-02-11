import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { MediaMatcherEffects } from './state/effects/media-matcher.effects';
import { BarGraphEffects } from './state/effects/bar-graph.effects';
import { LinearGraphEffects } from './state/effects/linear-graph.effects';
import { CircleGraphEffects } from './state/effects/circle-graph.effects';

@NgModule({
   declarations: [
      AppComponent,
    
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      StoreModule.forRoot(ROOT_REDUCERS),
      StoreDevtoolsModule.instrument({name: 'TEST'}),
      EffectsModule.forRoot([
         MediaMatcherEffects,
         BarGraphEffects,
         LinearGraphEffects,
         CircleGraphEffects
      ]),
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
