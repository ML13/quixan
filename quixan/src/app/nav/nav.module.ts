import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { ArticlesComponent } from './articles/articles.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [SearchService]
})
export class NavModule { }
