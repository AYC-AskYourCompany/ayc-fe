import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { AuthService } from './auth.service';
import {ToasterService} from 'angular2-toaster';
import {PopUpConst} from '../const/pop-up-const';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService,
              private toasterService: ToasterService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(req).pipe(
      catchError(error => {
        this.toasterService.pop('error', PopUpConst.HTTP_INTERCEPTOR_ERROR_TITLE, PopUpConst.HTTP_INTERCEPTOR_ERROR_BODY);
        return throwError(error);
      })
    );
  }


}
