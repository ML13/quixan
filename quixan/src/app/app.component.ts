import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author } from './core/author.model';
import { getAuthorList } from './store/state/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quixan';
  constructor(
    private store: Store<any>
  ) {}

  authors$: Observable<Author[]>;

  ngOnInit(): void {
    this.authors$ = this.store.select(getAuthorList);

  }
}
