import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stateful-authen-client';

  constructor(private http: HttpClient) { }

  onSave(): void{
    this.title = 'clicked';
  }

  getData(): Observable<string>{
    return this.http.get('api/entry-point', {responseType: 'text'});
  }

  fetch(): void{
    this.getData()
      .subscribe((data: string) => {
      this.title = data;
    });
  }



}
