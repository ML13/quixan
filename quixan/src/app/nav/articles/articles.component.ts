import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/article.model';
import { ArticleService } from 'src/app/core/article.service';
import { AuthorSelectorService } from 'src/app/store/state/selectors';
import { switchMap, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Author } from 'src/app/core/author.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;
  isReady$: Observable<boolean>;

  constructor(
    private articleService: ArticleService,
    public authorSelectorService: AuthorSelectorService,
  ) { }

  ngOnInit() {
    this.displayArticles();
    this.jahoda();
    // this.articles$ = this.displayArticles;
  }

  // private get displayArticles(): Observable<any> {
  //   this.articles$ = null;
  //   this.isReady = false;
  //   return this.authorSelectorService.CurrentAuthor$.pipe(
  //     switchMap(
  //       author => author === null ? this.articleService.getArticles() : this.articleService.getArticlesByAuthor(author.id),
  //     ),
  //     () => this.isReady = true,
  //     tap(
  //       author => console.log(author)
  //     )
  //   );
  // }

  displayArticles(): void {
    this.articles$ = this.authorSelectorService.CurrentAuthor$.pipe(
      switchMap(
        author => author === null ? this.articleService.getArticles() : this.articleService.getArticlesByAuthor(author.id),
      ),
    );
    // this.isReady = true;

  }

  jahoda(): void {
    this.isReady$ = of(false);
    this.articles$.pipe(map(() => this.isReady$ = of(true)));
  }
}
