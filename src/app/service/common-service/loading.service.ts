import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading = new Subject<boolean>();
  show(): void {
    this.isLoading.next(true);
  }
  hide(): void {
    this.isLoading.next(false);
  }
}
