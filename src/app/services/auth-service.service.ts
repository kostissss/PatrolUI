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
  account: Account;
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
        account: {} as Account,
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



  get accountName(): string {
    return this.authSubject.value?.account.name || '';
  }

  // Getter for the 'email' field
  get accountEmail(): string {
    return this.authSubject.value?.account.email || '';
  }

  

  // Getter for the 'uname' field
  get accountUname(): string {
    return this.authSubject.value?.account.uname || '';
  }

  // Getter for the 'subscriptionFrequency' field
  get accountSubscriptionFrequency(): string {
    return this.authSubject.value?.account.subscriptionFrequency || '';
  }

  // Getter for the 'plan' field
  get accountPlan(): string {
    return this.authSubject.value?.account.plan || '';
  }

  // Getter for the 'timeZone' field
  get accountTimeZone(): string {
    return this.authSubject.value?.account.timeZone || '';
  }

  // Getter for the 'selectedOption' field
  get accountSelectedOption(): string {
    return this.authSubject.value?.account.selectedOption || '';
  }

  // Getter for the 'demoSelected' field
  get accountDemoSelected(): boolean {
    return this.authSubject.value?.account.demoSelected || false;
  }

  // Getter for the 'expirationDate' field
  get accountExpirationDate(): Date | undefined {
    return this.authSubject.value?.account.expirationDate;
  }

  // Getter for the 'language' field
  get accountLanguage(): string {
    return this.authSubject.value?.account.language || '';
  }

  // Getter for the 'role' field
  get accountRole(): string {
    return this.authSubject.value?.account.role || '';
  }
  

  
  



}
