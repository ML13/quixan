import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../core/article.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
