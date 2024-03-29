import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request.url.includes('/login') || request.url.includes('/signup')) {
      return next.handle(request); 
    }

    const authToken = this.authService.authToken;
    if (authToken) {
      request = request.clone({
        setHeaders: { 
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    return next.handle(request); 
  }
}