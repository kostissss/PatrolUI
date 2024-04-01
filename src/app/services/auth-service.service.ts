import { Injectable, OnInit } from '@angular/core';
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
export class AuthServiceService implements OnInit {

  private apiUrl = environment.apiUrl;
  private authSubject = new BehaviorSubject<AuthResponse | null>(null);
  public authState$: Observable<AuthResponse | null> = this.authSubject.asObservable(); 

  
  constructor(private http: HttpClient,private router:Router) { 
    this.loadFromStorage(); // Try loading existing tokens
  }

  ngOnInit(): void {
    //this.loadFromStorage();
    
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
    console.log(this.authSubject);
    console.log(userName);
    console.log(authToken); 
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
    this.storeAccountDetails(res.account);
    this.router.navigateByUrl('/home');
  }

  private storeTokens(authToken: string) {
    localStorage.setItem('AuthToken', authToken);
        
  }
  private storeAccountDetails(account: Account) {
    localStorage.setItem('userName', account.uname);


  }
  
  
  



}
