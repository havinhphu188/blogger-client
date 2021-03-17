import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IArticle} from '../../model/article';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeedService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticle[]>{
    return this.http.get<IArticle[]>('api/article/global-feed');
  }
}
