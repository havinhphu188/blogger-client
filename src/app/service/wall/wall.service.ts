import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IArticle} from '../../model/article';

@Injectable({
  providedIn: 'root'
})
export class WallService {
  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticle[]>{
    return this.http.get<IArticle[]>('api/article/all');
  }

  postArticle(txtTitle: string, txtContent: string): Observable<IArticle> {
    return this.http.post<IArticle>('api/article', {
      title: txtTitle,
      content: txtContent
    });
  }

  updateArticle(article: IArticle): Observable<IArticle>{
    return this.http.put<IArticle>(`api/article/${article.id}`, article);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`api/article/${id}`);
  }
}
