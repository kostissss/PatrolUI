import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { Observable, tap } from 'rxjs';
import { Account } from '../interfaces/account';
import { AuthServiceService } from './auth-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true  // Include cookies in requests
};

interface AuthResponse { 
  account: Account;
  authToken: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  
  private apiUrl = environment.apiUrl;
  public id: number = 1;

  constructor(private http: HttpClient,private authService: AuthServiceService) {
    const storedId = localStorage.getItem('userId');
    console.log("storedId="+storedId);
    this.id =   Number(storedId) ;
  }

  createAccount(accountData: Account): Observable<any> {
    console.log(accountData);
    return this.http.post<Account>(`${this.apiUrl}accounts/`, accountData, httpOptions);
  }

  

  resetPassword(password :String): Observable<any> {
    console.log(password);
    return this.http.put<Account>(`${this.apiUrl}accounts/1`, {"password":password},httpOptions);
  }
  

  changeUserName(username :String): Observable<any> {
    //debugger
    return this.http.put<AuthResponse>(`${this.apiUrl}accounts/${this.id}`, {
      
      "uname":username},httpOptions).pipe(tap((res) => {
       /// debugger
        this.authService.handleUpdateSuccess(res);
        ///debugger
      }));
  }

  getFilteredAccounts(field: string,value:string): Observable<Account[]> {
    return this.http.post<Account[]>(`${this.apiUrl}accounts/${field}`,{value: value},httpOptions);

  }
  getUserInfo(): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}accounts/${this.id}`,httpOptions);
  }
}
