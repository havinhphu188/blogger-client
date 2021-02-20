import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-article-dialog',
  templateUrl: './add-article-dialog.component.html',
  styleUrls: ['./add-article-dialog.component.css']
})
export class AddArticleDialogComponent implements OnInit {
  title: string;
  content: string;

  constructor(public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.ref.close();
  }
}
