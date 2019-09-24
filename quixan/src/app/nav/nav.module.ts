import { NgModule } from '@angular/core';

import { SearchService } from './search.service';
import { ArticlesComponent } from './articles/articles.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticlesComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [SearchService]
})
export class NavModule {
 
}
