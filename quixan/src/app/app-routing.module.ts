import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './nav/articles/articles.component';
import { ArticleItemComponent } from './content/article-item/article-item.component';
import { ContentComponent } from './content/content/content.component';


const routes: Routes = [
  { path: '', component: NavBarComponent},
  { path: 'article/:id', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
