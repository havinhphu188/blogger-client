import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.login();
    this.router.navigate(['wall']);
  }

}
