import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesUrl = 'https://gorest.co.in/public-api/posts';
  private authToken = 'Bearer W7fyipwQdZWpqX4pg9NAGcIta_LEv5j4209N';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get<any>(this.articlesUrl, { headers: httpHeaders })
    .pipe(
      tap(_ => this.log('fetched articles')),
      map(response =>  {
         const article = [ ...response.result] as Article[];
         return article;
      })
    );
  }

  getArticle(id: number): Observable<Article> {this.log(this.articlesUrl + '/' + id.toString());
    
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    })
    return this.http.get<any>(this.articlesUrl + '/' + id.toString(), { headers: httpHeaders })
    .pipe(
      tap(_ => this.log('fetched article ' + this.articlesUrl + '/' + id.toString())),
      map(response =>  {
         const article = response.result as Article;
         return article;
      })
    );
  }
  



  private log(message: string) {
    console.log(`AuthorService: ${message}`);
  }
}
