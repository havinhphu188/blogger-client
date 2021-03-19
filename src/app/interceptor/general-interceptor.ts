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
import {Router} from '@angular/router';
import {AuthService} from '../service/common-service/auth.service';

// Show spinner loading, toast error on requestFail.
@Injectable()
export class GeneralInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoadingService,
              private messageService: MessageService,
              private router: Router,
              private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loadingService.show();

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMsg = (error.error != null ? error.error.message : error.statusText);
        this.messageService.add({severity: 'error', summary: 'Error Status: ' + error.status, detail: errorMsg});
        if (error.status === 401){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        return throwError(error);
      }),
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
