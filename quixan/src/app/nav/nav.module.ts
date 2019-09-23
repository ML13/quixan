import { NgModule } from '@angular/core';

import { SearchService } from './search.service';
import { ArticlesComponent } from './articles/articles.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { quixanReducer } from '../store/state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthorEffects } from '../store/state/effects';

@NgModule({
  declarations: [
    ArticlesComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forRoot({common: quixanReducer}),
    EffectsModule.forRoot([AuthorEffects]),
  ],
  exports: [
    NavBarComponent
  ],
  providers: [SearchService]
})
export class NavModule {

}
