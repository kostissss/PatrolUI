import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  private apiUrl = environment.apiUrl;

  
  constructor(private http: HttpClient) { }

  createAccount(accountData :Account): Observable<any> {
    console.log(accountData);
    return this.http.post<Account>(`${this.apiUrl}accounts/`, accountData,httpOptions);
  }

  createPartnerAccount(accountData :Account): Observable<any> {
    console.log(accountData);
    return this.http.post<Account>(`${this.apiUrl}partner/accounts/`, accountData,httpOptions);
  }

  resetPartnerPassword(password :String): Observable<any> {
    console.log(password);
    return this.http.put<Account>(`${this.apiUrl}partner/accounts/passwordReset/1`, {"password":password},httpOptions);
  }
  

  changeUserName(username :String): Observable<any> {
    return this.http.put<Account>(`${this.apiUrl}accounts//1`, {"id":1,"uname":username},httpOptions);
  }
}
