import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { quixanReducer } from './state/reducer';
import { AuthorEffects } from './state/effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({common: quixanReducer}),
    EffectsModule.forRoot([AuthorEffects]),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
  })
  ]
})
export class AppStoreModule { }
