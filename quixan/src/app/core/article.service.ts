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
  private authToken = 'Bearer NmdVBVhKaxJ2K_vJnzpbh-TTivV7wVFkx6FR';
  private articlesByAuthor = '?user_id=';


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
      map(response =>  {
         const article = response.result as Article;
         return article;
      }),
      tap(x => console.log('fetched article', x)),
    );
  }

  getArticlesByAuthor(id: number): Observable<Article[]> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get<any>(this.articlesUrl + this.articlesByAuthor + id, { headers: httpHeaders })
    .pipe(
      tap(_ => this.log('fetched articles by author')),
      map(response =>  {
         const article = [ ...response.result] as Article[];
         return article;
      })
    );
  }

  private log(message: string) {
    console.log(`AuthorService: ${message}`);
  }
}
