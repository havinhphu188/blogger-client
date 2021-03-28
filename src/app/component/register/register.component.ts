import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';
import {RegisterService} from '../../service/register-service/register.service';
import {RegisterUser} from '../../model/register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public newUser: RegisterUser;
  public retypePassword: string;
  password: string;

  constructor(private registerService: RegisterService,
              private authService: AuthService,
              private router: Router) {
    this.newUser = new RegisterUser();
  }

  ngOnInit(): void {
    if (this.authService.getIsLogin()){
      this.router.navigate(['wall']);
    }
  }

  register(): void {
    if (this.password !== this.retypePassword) { return; }
    this.newUser.password = this.password;
    this.registerService.registerUser(this.newUser).subscribe(
      () => {
        this.router.navigate(['login']);
      }
    );
  }

}
