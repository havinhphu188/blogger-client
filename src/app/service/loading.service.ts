import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private showLoading: boolean;
  constructor() { }

  setLoading(b: boolean): void {
    this.showLoading = b;
  }

  getLoading(): boolean{
    return this.showLoading;
  }
}
