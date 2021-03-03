import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('jwtToken', resp.token);
    });

  }

  logout(): void{
    localStorage.setItem('isLogin', 'false');
  }

  getIsLogin(): boolean{
    return localStorage.getItem('isLogin') === 'true';
  }
}

interface IToken {
  token: string;
}
