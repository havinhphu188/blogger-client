import { Component, OnInit } from '@angular/core';
import {IArticle} from '../model/article';
import {WallService} from './wall.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  articles: IArticle[];
  txtTitle: string;
  txtContent: string;

  constructor(private wallService: WallService) {}

  ngOnInit(): void {
    this.wallService.getArticles().subscribe((data: IArticle[]) => this.articles = data);
  }

  onSubmit(): void {
    this.wallService.postArticle(this.txtTitle, this.txtContent)
              .subscribe((data) => this.articles.push(data));
  }

  onDelete(id: number): void {
    this.wallService.deleteArticle(id).subscribe();
  }
}

