import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthorService} from '../../service/author-service/author.service';
import {IAuthor} from '../../model/author';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit, OnDestroy {
  private sub: any;
  authorName: string;
  authorId: number;
  isFollowing: boolean;

  constructor(private route: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.authorId = +params['author-id'];
      this.authorService.getAuthorInfo(this.authorId).subscribe((author: IAuthor) => {
        this.authorName = author.name;
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onFollow(): void {
    this.isFollowing = !this.isFollowing;
    this.authorService.follow(this.authorId)
      .subscribe((response) => this.isFollowing = response.isSubscribed);
  }

}
