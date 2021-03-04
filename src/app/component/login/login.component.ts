import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.getIsLogin()){
      this.router.navigate(['wall']);
    }
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['wall']);
      }
    );
  }

}
