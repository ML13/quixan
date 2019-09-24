import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/article.model';
import { ArticleService } from 'src/app/core/article.service';
import { AuthorSelectorService } from 'src/app/store/state/selectors';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private articleService: ArticleService,
    public authorSelectorService: AuthorSelectorService,
  ) { }

  ngOnInit() {
    this.displayArticles();
  }

  displayArticles(): void {
    this.articles$ = this.authorSelectorService.CurrentAuthor$.pipe(
      switchMap(
        author => author === null ? this.articleService.getArticles() : this.articleService.getArticlesByAuthor(author.id),
      ),
      tap(
        author => console.log(author)
      )
    );
  }
}
