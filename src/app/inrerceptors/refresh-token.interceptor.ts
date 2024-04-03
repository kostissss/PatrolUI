import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { environment } from '../../../enviroment';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  apiUrl=environment.apiUrl;
  isRefreshing=false;

  constructor(private authService: AuthServiceService,private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(catchError(err =>{
      

      if (err.status === 401 && request.url !== `${this.apiUrl}/accounts/refreshToken`) {

        
        
      }
      else if (request.url === `${this.apiUrl}/accounts/refreshToken`) {

        this.authService.logOut().subscribe(res => {
          this.router.navigate(['/login']);
        });
      }
      return of(err);
    }));

  }
    



}