import { Component, OnInit } from '@angular/core';
import { AuthorSelectorService } from 'src/app/store/state/selectors';
import { ArticleService } from 'src/app/core/article.service';
import { QuixanState } from 'src/app/store/state/state';
import { Store } from '@ngrx/store';
import * as QuixanAction from 'src/app/store/state/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    public authorSelectorService: AuthorSelectorService,
    private articleService: ArticleService,
    private store: Store<QuixanState>,

  ) { }

  ngOnInit() {
  }

  selectOption(id: number) {
    console.log(id);
    this.store.dispatch(new QuixanAction.SetCurrentAuthor(id));
    this.articleService.getArticlesByAuthor(id);
  }

}
