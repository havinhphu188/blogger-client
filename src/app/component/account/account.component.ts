import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../service/common-service/account.service';
import {IAuthorPreview} from '../../model/author-preview';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username: string;
  subscribedAuthors: IAuthorPreview[];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService
      .getSubscribedAuthor()
      .subscribe((response) => {
        this.username = response.username;
        this.subscribedAuthors = response.subscribedAuthors;
      });
  }

}
