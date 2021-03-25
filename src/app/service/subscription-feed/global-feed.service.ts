import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IArticle} from '../../model/article';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsFeedService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticle[]>{
    return this.http.get<IArticle[]>('api/article/subscriptions-feed');
  }

  react(articleId: number): Observable<any>{
    return this.http.post(`api/article/react/${articleId}`, null);
  }
}
