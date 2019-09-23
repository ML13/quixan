import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author.model';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authorsUrl = 'https://gorest.co.in/public-api/users';
  private authToken = 'Bearer W7fyipwQdZWpqX4pg9NAGcIta_LEv5j4209N';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get<Author[]>(this.authorsUrl, { headers: httpHeaders })
      .pipe(
        map(author => author.result),
        tap(_ => this.log('fetched authors'))
      );
  }

  private log(message: string) {
    console.log(`AuthorService: ${message}`);
  }
}
