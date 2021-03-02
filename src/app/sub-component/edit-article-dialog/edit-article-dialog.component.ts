import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {IArticle} from '../../model/article';
import {WallService} from '../../service/wall/wall.service';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-edit-article-dialog',
  templateUrl: './edit-article-dialog.component.html',
  styleUrls: ['./edit-article-dialog.component.css']
})
export class EditArticleDialogComponent implements OnInit {
  article: IArticle;

  constructor(private config: DynamicDialogConfig, private wallService: WallService, private ref: DynamicDialogRef) {
  }

  ngOnInit(): void {
    this.article = cloneDeep(this.config.data);
  }

  save(): void {
    this.wallService.updateArticle(this.article)
      .subscribe(
        (updatedArticle: IArticle) => {
          this.ref.close(updatedArticle);
        });
  }
}
