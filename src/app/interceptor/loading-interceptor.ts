import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import {catchError, finalize, tap} from 'rxjs/operators';

import {Observable, of, throwError} from 'rxjs';
import {LoadingService} from '../common-service/loading.service';
import {MessageService} from 'primeng/api';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoadingService,
              private messageService: MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loadingService.setLoading(true);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.messageService.add({severity: 'error', summary: 'error', detail: 'error'});
        return throwError('somethingbad');
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
