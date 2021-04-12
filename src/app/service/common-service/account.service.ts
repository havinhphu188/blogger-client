import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getSubscribedAuthor(): Observable<any>{
    return this.http.get<any>('api/account/subscribed-author');
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>('api/account/user-info');
  }
}
