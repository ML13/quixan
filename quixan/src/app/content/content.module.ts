import { NgModule } from '@angular/core';

import { ContentComponent } from './content/content.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContentComponent,
    ArticleItemComponent,
    CommentsComponent
  ],
  imports: [
  SharedModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
