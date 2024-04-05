import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, filter, of, switchMap, take, throwError } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { environment } from '../../../enviroment';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  apiUrl=environment.apiUrl;
  isRefreshing=false;

  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthServiceService,private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).pipe(catchError(err =>{
      

      if (err.status === 401 && request.url !== `${this.apiUrl}/accounts/refreshToken`) {
        //debugger
        if (!this.isRefreshingToken) {

          this.isRefreshingToken = true;
          
          // Reset subject here so that the following requests wait until the token
          // comes back from the refreshToken call.
          this.refreshTokenSubject.next(null);

          // Post request on Refresh Token endpoint -> to get new tokens (access and refresh)
          return this.authService.refreshToken().pipe(
            switchMap((res: any) => {
              //debugger
              // if we get a new token retry previous request, store the new tokens and send them to subject
              if (res) {
                // store new tokens
                this.authService.storeTokens(res.authToken);
                // send new tokens to Subject - to unblock all other pending requests on the else block and let them execute
                this.refreshTokenSubject.next(res.authToken);
                // retry again the first request with the new access token
                this.isRefreshingToken = false;
                //console.log("Refresh Token found -> Retry Request",res.authToken);
                return next.handle(request.clone({
                 
                  setHeaders: {
                    Authorization: `Bearer ${res.authToken}`
                  }
                }));
              }

              this.isRefreshingToken = false;
              // if we don't get a new token, we are in trouble so logout.
              //console.log("Refresh Token not found -> Logout");
              this.authService.logOut();
              return throwError(() => err);

            })
          ) as Observable<HttpEvent<any>>;

      } else {
         // all parallel request except the 1st comes here and will be pending until the subject has a new value
          return this.refreshTokenSubject.pipe(
              filter(token => (token != null && token != undefined)),
              take(1),
              switchMap((token) => {
                // execute all pending request with the new access token
                //console.log("Refresh Token found???? -> Retry Request",token.authToken);
                return next.handle(request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${token.authToken}`
                  }
                }));
              }));
      }

        
        
      }
      else if (request.url === `${this.apiUrl}/accounts/refreshToken`) {

        this.authService.logOut()
        return of(err);
      }
      return next.handle(request);  
    }));
    
  }
    
  


}