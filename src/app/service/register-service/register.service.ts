import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterUser} from '../../model/register-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(newUser: RegisterUser): Observable<any> {
    return this.http.post<any>(`api/account/register`, newUser);
  }

  checkIfUsernameAvailable(username: string): Observable<boolean> {
    const params = new HttpParams().append('username', username);
    return this.http.get<boolean>('api/account/check-if-username-unique',{params});
  }
}
