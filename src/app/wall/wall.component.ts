import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  articles: IArticle[];
  txtTitle: string;
  txtContent: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getArticles().subscribe((data: IArticle[]) => this.articles = data);
  }

  getArticles(): Observable<IArticle[]>{
    return this.http.get<IArticle[]>('api/article/all');
  }

}

interface IArticle{
  id: number;
  title: string;
  content: string;
}
