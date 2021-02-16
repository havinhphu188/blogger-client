import { Component } from '@angular/core';
import {LoadingService} from './common-service/loading.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public loadingService: LoadingService, private messageService: MessageService) { }

  showSuccess(): void {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Message Content'});
  }

}
