import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogin = false;
  constructor() { }

  login(): void{
    this.isLogin = true;
  }

  logout(): void{
    this.isLogin = false;
  }

  getIsLogin(): boolean{
    return this.isLogin;
  }
}
