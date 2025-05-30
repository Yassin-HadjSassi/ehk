import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'app/models/Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) {
    
  }

  GetAllArticle():Observable<Article[]>
  {
    //mode get
    return this.http.get<Article[]>
    ('http://127.0.0.1:8000/api/articles')
  }

  addArticle(x:Article):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/articles',x)
  }

  getArticleById(id:string):Observable<Article>
  {
    return this.http.get<Article>
    (`http://127.0.0.1:8000/api/articles/${id}`)
  }

  updateArticle(f:Article,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/articles/${id}`,f)
  }

  deleteArticle(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/articles/${id}`)
  }
}
