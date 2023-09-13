import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          const errorMessage = 'Sorry for the inconvenience.. Please do retry Again after some time';
          return throwError(alert(errorMessage));
        } else {
          return throwError(error);
        }
      })
    );
  }
}