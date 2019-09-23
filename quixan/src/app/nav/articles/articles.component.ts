import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/article.model';
import { ArticleService } from 'src/app/core/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(
    private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    this.articleService.getArticles()
      .subscribe(articles => {
        console.log(articles);
        this.articles = articles;
      });
  }
}
