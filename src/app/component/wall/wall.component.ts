import { Component, OnInit } from '@angular/core';
import {IArticle} from '../../model/article';
import {WallService} from '../../service/wall/wall.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AddArticleDialogComponent} from '../add-article-dialog/add-article-dialog.component';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  providers: [DialogService]
})
export class WallComponent implements OnInit {
  articles: IArticle[];
  txtTitle: string;
  txtContent: string;

  ref: DynamicDialogRef;

  constructor(private wallService: WallService, public dialogService: DialogService) {}

  ngOnInit(): void {
    this.wallService.getArticles().subscribe((data: IArticle[]) => this.articles = data);
  }

  onSubmit(): void {
    this.wallService.postArticle(this.txtTitle, this.txtContent)
              .subscribe((data) => this.articles.push(data));
  }

  onDelete(id: number): void {
    this.wallService.deleteArticle(id).subscribe(() => {
      const deletedItemIndex = this.articles.findIndex((element) => element.id === id);
      this.articles.splice(deletedItemIndex, 1);
    });
  }

  showAddArticleDialog(): void {
    this.ref = this.dialogService.open(AddArticleDialogComponent, {header: 'Add New Article'
    });

    this.ref.onClose.subscribe((newArticle: IArticle) => {
      if (newArticle !== undefined){
        this.articles.push(newArticle);
      }
    });
  }


}

