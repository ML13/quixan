import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author } from './core/author.model';

import { QuixanState } from './store/state/state';
import * as QuixanAction from 'src/app/store/state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'quixan';
  constructor(
    private store: Store<QuixanState>,

  ) { }

  authors$: Observable<Author[]>;

  ngOnInit(): void {
    this.store.dispatch(new QuixanAction.LoadAuthors());
  }
}

