import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/common-service/auth.service';
import {Router} from '@angular/router';
import {AccountService} from '../../service/common-service/account.service';
import {SearchService} from '../../service/search-service/search.service';
import {IAuthorSearchResult} from '../../model/author-search-result';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLogin: boolean;
  username: string;
  searchResult: IAuthorSearchResult[];
  selectedOption: any;

  constructor(private authService: AuthService,
              private router: Router,
              private accountService: AccountService,
              private searchService: SearchService) {
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
        this.username = response?.username;
      });
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['login']);
  }

  search(event: any): void {
    this.searchService.searchAuthor(event.query).subscribe((searchResult) => {
      this.searchResult = searchResult;
    });
  }

  selectResult($event: any): void {
    this.router.navigate(['/author', $event.url]);
    this.selectedOption = '';
  }
}
