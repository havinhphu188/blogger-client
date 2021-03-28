import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
