import {Component, OnInit} from '@angular/core';
import {IArticle} from '../../model/article';
import {WallService} from '../../service/wall/wall.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AddArticleDialogComponent} from '../../sub-component/add-article-dialog/add-article-dialog.component';
import {EditArticleDialogComponent} from '../../sub-component/edit-article-dialog/edit-article-dialog.component';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  providers: [DialogService]
})
export class WallComponent implements OnInit {
  articles: IArticle[];
  ref: DynamicDialogRef;

  constructor(private wallService: WallService, public dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.wallService.getArticles().subscribe((data: IArticle[]) => this.articles = data);
  }

  onDelete(viewIndex: number): void {
    const selectedArticle = this.articles[viewIndex];
    this.wallService.deleteArticle(selectedArticle.id).subscribe(() => {
      this.articles.splice(viewIndex, 1);
    });
  }

  showAddArticleDialog(): void {
    this.ref = this.dialogService.open(AddArticleDialogComponent, {
      header: 'Add New Article'
    });

    this.ref.onClose.subscribe((newArticle: IArticle) => {
      if (newArticle !== undefined) {
        this.articles.unshift(newArticle);
      }
    });
  }


  onEdit(viewIndex: number): void {
    const selectedArticle = this.articles[viewIndex];
    this.ref = this.dialogService
      .open(EditArticleDialogComponent, {
        header: 'Edit Article',
        data: selectedArticle
      });

    this.ref.onClose.subscribe((newArticle: IArticle) => {
      if (newArticle !== undefined){
        this.articles.splice(viewIndex, 1, newArticle);
      }
    });
  }
}

