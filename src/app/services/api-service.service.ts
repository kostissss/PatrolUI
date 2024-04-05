import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true  // Include cookies in requests
};

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  
  private apiUrl = environment.apiUrl;
  public id: number = 1;

  constructor(private http: HttpClient) {
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
    return this.http.put<Account>(`${this.apiUrl}accounts/${this.id}`, {
      "uname":username},httpOptions);
  }
}
