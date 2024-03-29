import {Component, OnInit} from '@angular/core';
import {IArticle} from '../../model/article';
import {GlobalFeedService} from '../../service/global-feed/global-feed.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {
  articles: IArticle[];
  constructor(private globalFeedService: GlobalFeedService) { }

  ngOnInit(): void {
    this.globalFeedService.getArticles().subscribe((data: IArticle[]) => this.articles = data);
  }
}
