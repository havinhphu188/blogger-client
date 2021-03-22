import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';
import {AccountService} from '../../service/common-service/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLogin: boolean;
  username: string;

  constructor(private authService: AuthService,
              private router: Router,
              private accountService: AccountService) {
    this.isLogin = authService.getIsLogin();
    this.authService.loginAnnounced$.subscribe(isLogin => {
      this.isLogin = isLogin;
      if (isLogin){
        this.getUserInfo();
      }
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo(): void {
    this.accountService
      .getUserInfo()
      .subscribe((response) => {
        this.username = response.username;
      });
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
