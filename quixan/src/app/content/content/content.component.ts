import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/article.service';
import { Article } from 'src/app/core/article.model';
import { Title } from '@angular/platform-browser';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    this.route.paramMap.pipe(
      tap(() => console.log('route changed')),
      catchError(err => {
        console.log('error', err);
        return []
      })
    ).subscribe(
      routeParams => {
        this.articleService.getArticle(+routeParams.get('id')).subscribe(article => {
          this.article = article
          console.log('current article', this.article);
        });
      })
  }

  setArticle(): void {
    this.article = new Article;
    this.article.title = "nadpis";
  }

}
