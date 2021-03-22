import { Component, OnInit } from '@angular/core';
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

  onReact(i: number): void {
    const articleId = this.articles[i].id;
    this.articles[i].reacted = !this.articles[i].reacted;
    this.globalFeedService.react(articleId)
      .subscribe((response) => this.articles[i].reacted = response.isReacted);
  }
}
