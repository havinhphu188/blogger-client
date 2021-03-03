import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(): void{
    localStorage.setItem('isLogin', 'true');
  }

  logout(): void{
    localStorage.setItem('isLogin', 'false');
  }

  getIsLogin(): boolean{
    return localStorage.getItem('isLogin') === 'true';
  }
}
