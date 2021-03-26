import {Component, Input} from '@angular/core';
import {IArticle} from '../../model/article';
import {GlobalFeedService} from '../../service/global-feed/global-feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent{
  @Input() articles: IArticle[];

  constructor(private globalFeedService: GlobalFeedService) { }

  onReact(i: number): void {
    const articleId = this.articles[i].id;
    this.articles[i].reacted = !this.articles[i].reacted;
    this.globalFeedService.react(articleId)
      .subscribe((response) => this.articles[i].reacted = response.isReacted);
  }

}
