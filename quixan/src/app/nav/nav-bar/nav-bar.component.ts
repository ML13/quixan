import { AuthorService } from './../../core/author.service';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/author.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => {
        console.log(authors),
        this.authors = authors
      });
  }

}
