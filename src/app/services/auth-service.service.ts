import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { BehaviorSubject, Observable, delay, tap } from 'rxjs';
import { Account } from '../interfaces/account';
import { Router } from '@angular/router';



interface AuthResponse { 
  account: Account;
  authToken: string;
  
}


@Injectable()
export class AuthServiceService  {


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true  // Include cookies in requests
  };
  private apiUrl = environment.apiUrl;
  private authSubject = new BehaviorSubject<AuthResponse | null>(null);
  public authState$: Observable<AuthResponse | null> = this.authSubject.asObservable(); 

  
  constructor(private http: HttpClient,private router:Router) { 
   
    
  }

  

  logIn(accountData :Account): Observable<any> {
    
    return this.http.post<AuthResponse>(`${this.apiUrl}accounts/login`, accountData,this.httpOptions).pipe(tap(res => this.handleLoginSuccess(res)));;
  }

  logOut(): Observable<any> {
    //debugger
    //this.clearTokensFromStorage();
    return this.http.delete<AuthResponse>(`${this.apiUrl}accounts/logout`,this.httpOptions).pipe(tap(res => this.handleLogoutSuccess()));;
    
  }

  private loadFromStorage() {
    const authToken = localStorage.getItem('AuthToken'); 
    
    const userName = localStorage.getItem('userName');
    const loadedAccount = {uname: userName} as Account;
  
    if (authToken ) {
      this.authSubject.next({
        account: loadedAccount,
        authToken
        
      });
    }
   
   
  }
  

  refreshToken(): Observable<any> {
    //debugger
    
    return this.http.get<AuthResponse>(`${this.apiUrl}accounts/refreshToken`,this.httpOptions).pipe(tap(res => this.handleRefreshSuccess(res)));
  }

  get authToken(): string {
    return this.authSubject.value?.authToken || '';
  }



  private clearTokensFromStorage() {
    localStorage.removeItem('AuthToken');
    //localStorage.removeItem('refreshToken');
  }



  private handleLoginSuccess(res: AuthResponse) {
    this.authSubject.next(res);
    
    
    this.storeTokens(res.authToken); 
    
    this.storeAccountDetails(res.account);
    
    this.router.navigate(['/home']);
  }
  private handleLogoutSuccess() {
    //debugger
    
    
    this.router.navigateByUrl('/login');
    this.clearTokensFromStorage();
    //debugger
    this.authSubject.next(null);
    
    //debugger
  }

   storeTokens(authToken: string) {
    localStorage.setItem('AuthToken', authToken);
        
  }
  private storeAccountDetails(account: Account) {
    
    localStorage.setItem('userName', account.uname);
    
    localStorage.setItem('userId', String(account.id));
  }

  isLoggedIn(): boolean {
    return !!this.authSubject.value;
  }
  handleRefreshSuccess(res: AuthResponse) {
    //debugger
    
    this.authSubject.next(res);
    
    this.storeTokens(res.authToken);
  
  }
  handleUpdateSuccess(res: AuthResponse) {
    
    this.authSubject.next({
      account: res.account,
      authToken: this.authToken
      
    });
    
    this.storeAccountDetails(res.account);
    this.storeTokens(res.authToken);
  
  }
  
  
  



}
