import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Author } from 'src/app/core/author.model';
import { AuthorSelectorService } from 'src/app/store/state/selectors';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    public authorSelectorService: AuthorSelectorService
  ) {}

  ngOnInit() {
  }
}
