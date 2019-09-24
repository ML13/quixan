import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { quixanReducer } from './state/reducer';
import { AuthorEffects } from './state/effects';
import { AuthorSelectorService } from './state/selectors';


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
  ],
  providers: [AuthorSelectorService]
})
export class AppStoreModule { }
