import { Article } from './../../core/article.model';
import { AuthorService } from './../../core/author.service';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/author.model';
import { ArticleService } from 'src/app/core/article.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  authors: Author[];
  articles: Article[];

  constructor(
    private authorService: AuthorService,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.getAuthors();
    this.getArticle();
  }

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => {
        console.log(authors);
        this.authors = authors;
      });
  }

  getArticle(): void {
    this.articleService.getArticles()
      .subscribe(articles => {
        console.log(articles);
        this.articles = articles;
      });
  }

}
