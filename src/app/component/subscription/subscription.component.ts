import {Component, OnInit} from '@angular/core';
import {IArticle} from '../../model/article';
import {SubscriptionsFeedService} from '../../service/subscription-feed/global-feed.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  articles: IArticle[];
  constructor(private subscriptionsFeedService: SubscriptionsFeedService) { }

  ngOnInit(): void {
    this.subscriptionsFeedService.getArticles().subscribe((data: IArticle[]) => this.articles = data);
  }

  onReact(i: number): void {
    const articleId = this.articles[i].id;
    this.articles[i].reacted = !this.articles[i].reacted;
    this.subscriptionsFeedService.react(articleId)
      .subscribe((response) => this.articles[i].reacted = response.isReacted);
  }

}
