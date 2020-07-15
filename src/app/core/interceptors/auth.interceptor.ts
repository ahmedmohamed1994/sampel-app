import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    protected authService: AuthService
  ) {
  }

  intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    if (this.authService.getIsAuth()) {
      return next.handle(request.clone({
    
        headers: request.headers
          // .set('Authorization', `Basic ${ btoa(`${username}:${password}`)}`)
          .set('Authorization', `Bearer ${this.authService.getToken()}`)
      }));
    }
    return next.handle(request);
    
  }

}
