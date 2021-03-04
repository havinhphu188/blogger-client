import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {catchError, finalize} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {LoadingService} from '../service/common-service/loading.service';
import {MessageService} from 'primeng/api';

// Show spinner loading, toast error on requestFail.
@Injectable()
export class GeneralInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoadingService,
              private messageService: MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loadingService.setLoading(true);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.messageService.add({severity: 'error', summary: 'Error Status: ' + error.status, detail: error.error.message});
        return throwError(error);
      }),
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
