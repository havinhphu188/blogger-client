import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTANT} from '../../constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): void{
    this.http.post<IToken>('api/authenticate', {
      username,
      password
    }).subscribe((resp) => {
      localStorage.setItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN, 'true');
      localStorage.setItem(CONSTANT.LOCAL_STORAGE.JWT_TOKEN, resp.token);
    });

  }

  logout(): void{
    localStorage.setItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN, 'false');
  }

  getIsLogin(): boolean{
    return localStorage.getItem(CONSTANT.LOCAL_STORAGE.IS_LOGIN) === 'true';
  }
}

interface IToken {
  token: string;
}
