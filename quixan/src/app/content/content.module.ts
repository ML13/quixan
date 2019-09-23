import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    ContentComponent,
    ArticleItemComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
