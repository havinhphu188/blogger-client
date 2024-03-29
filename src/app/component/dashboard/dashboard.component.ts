import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLogin: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLogin = this.authService.getIsLogin();
  }

}
