import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
   authToken: string = '';
  constructor(private authService: AuthServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request.url.includes('/login') || request.url.includes('/signup')) {
      return next.handle(request); 
    }
         
     this.authService.authState$.subscribe(authResponse => {
      if (authResponse && authResponse.authToken) {
        this.authToken = authResponse.authToken;
      } else {
        console.log('No auth token found');
       
      }
    });
    if (this.authToken ) {
      request = request.clone({
        setHeaders: { 
          Authorization: `Bearer ${this.authToken}`
        }
      });
    }

    return next.handle(request); 
  }
}