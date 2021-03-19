import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isLogin = authService.getIsLogin();
    this.authService.loginAnnounced$.subscribe(isLogin => {
      this.isLogin = isLogin;
    });
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
