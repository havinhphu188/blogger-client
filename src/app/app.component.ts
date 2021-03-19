import {Component, OnInit} from '@angular/core';
import {LoadingService} from './service/common-service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public isLoading = true;
  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.isLoading = this.loadingService.getLoading();
  }
}
