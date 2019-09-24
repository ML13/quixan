import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/core/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article$: Observable<Article>;

  constructor() {}

  ngOnInit() {
  }

}
