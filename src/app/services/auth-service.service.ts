import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../interfaces/account';

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

  
  constructor(private http: HttpClient) { 
    this.loadTokenFromStorage(); // Try loading existing tokens
  }


  logIn(accountData :Account): Observable<any> {
    // this.loadTokenFromStorage();
    // debugger
    // console.log(this.authSubject);
    // debugger
    return this.http.post<Account>(`${this.apiUrl}accounts/login/`, accountData,httpOptions);
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

  get authToken(): string {
    return this.authSubject.value?.authToken || '';
  }

  private clearTokensFromStorage() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  }

  



}
