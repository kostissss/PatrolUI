import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Account } from '../interfaces/account';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
interface AuthResponse { 
  
  authToken: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = environment.apiUrl;
  private authSubject = new BehaviorSubject<AuthResponse | null>(null);

  
  constructor(private http: HttpClient,private router:Router) { 
    this.loadTokenFromStorage(); // Try loading existing tokens
  }


  logIn(accountData :Account): Observable<any> {
    // this.loadTokenFromStorage();
    // debugger
    // console.log(this.authSubject);
    // debugger
    return this.http.post<AuthResponse>(`${this.apiUrl}accounts/login/`, accountData,httpOptions).pipe(tap(res => this.handleLoginSuccess(res)));;
  }

  logOut(): Observable<any> {
    
    this.clearTokensFromStorage();
    return this.http.delete(`${this.apiUrl}accounts/logout/`,httpOptions);
    
  }

  private loadTokenFromStorage() {
    const authToken = localStorage.getItem('authToken'); 
    const refreshToken = localStorage.getItem('refreshToken');
  
    if (authToken && refreshToken) {
      this.authSubject.next({
        
        authToken
        
      });
    }
  }


  refreshToken(): Observable<any> {
    const header= new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}accounts/refresh/`, { headers: header ,withCredentials: true})
  }

  get authToken(): string {
    return this.authSubject.value?.authToken || '';
  }



  private clearTokensFromStorage() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  }



  private handleLoginSuccess(res: AuthResponse) {
    this.authSubject.next(res);
    this.storeTokens(res.authToken); 
    this.router.navigateByUrl('/home');
  }

  private storeTokens(authToken: string) {
    localStorage.setItem('AuthToken', authToken);
        
  }
  



}
