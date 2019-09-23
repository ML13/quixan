import { NgModule } from '@angular/core';

import { SearchService } from './search.service';
import { ArticlesComponent } from './articles/articles.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ArticlesComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [SearchService]
})
export class NavModule { }
