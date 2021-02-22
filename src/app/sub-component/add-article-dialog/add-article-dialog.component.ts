import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {WallService} from '../../service/wall/wall.service';
import {IArticle} from '../../model/article';

@Component({
  selector: 'app-add-article-dialog',
  templateUrl: './add-article-dialog.component.html',
  styleUrls: ['./add-article-dialog.component.css']
})
export class AddArticleDialogComponent implements OnInit {
  title: string;
  content: string;

  constructor(public ref: DynamicDialogRef, private wallService: WallService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.wallService.postArticle(this.title, this.content).subscribe(
      (newArticle: IArticle) => {
        this.ref.close(newArticle);
      }
    );

  }
}
