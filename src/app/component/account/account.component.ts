import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../service/common-service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username: string;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService
      .getUserInfo()
      .subscribe((response) => {
        this.username = response.username;
      });
  }

}
