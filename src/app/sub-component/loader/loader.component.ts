import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {LoadingService} from '../../service/common-service/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading: Subject<boolean> = this.loadingService.isLoading;
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
