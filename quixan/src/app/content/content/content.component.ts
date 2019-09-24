import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/article.service';
import { Article } from 'src/app/core/article.model';
import { Subject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  article: Article;
  article$: Observable<Article>;

  route$: Subject<number> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticle();    
  }

  getArticle() {
    this.route.toString().split('/');
      this.article$ = this.route.paramMap.pipe(
        switchMap(params => {
          const id = params.get('id');
          return this.articleService.getArticle(+id);
        })
      )      
  }
}