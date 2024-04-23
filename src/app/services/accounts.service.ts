import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { Observable, Subject, map, tap } from 'rxjs';
import { Account } from '../interfaces/account';
import { AuthServiceService } from './auth-service.service';
import { DataResult, DataStateChangeEventArgs, Sorts } from '@syncfusion/ej2-angular-grids';

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
export class AccountsService extends Subject<DataStateChangeEventArgs>  {
  
  private apiUrl = environment.apiUrl;
  public id: number = 1;

  constructor(private http: HttpClient,private authService: AuthServiceService)  {
    super();
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

  getFilteredAccounts(field: string,value:string,recordsLimit:number,recordsOffset:number): Observable<Account[]> {
    return this.http.post<Account[]>(`${this.apiUrl}accounts/${field}`,{value: value,limit:recordsLimit,offset: recordsOffset},httpOptions);

  }
  getUserInfo(): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}accounts/${this.id}`,httpOptions);
  }



  public execute(state: any,grid: any): void {
    this.getData(state,grid).subscribe((x) => super.next(x));
  }

  protected getData(
    state: DataStateChangeEventArgs,grid :any
): Observable<DataStateChangeEventArgs> {
    


    //const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
      

    

  return this.http.post(`${this.apiUrl}accounts/role`,{value: "admin",limit:state.take,offset: state.skip},httpOptions).pipe(
    map((response: any) => {

      console.log(response);
      return state.dataSource === undefined ? (<DataResult>{
        
        result: response['rows'],
        // result: response['value'],
        count: parseInt(response['count'],10),
      }) : response['rows'];
      // }) : response['value'];
    }))
    .pipe(map((data: any) => data));
}

private fetchData(recordsLimit: number,recordsOffset :number): Observable<any> {
    
      return this.http.post(`${this.apiUrl}accounts/role`,{value: "admin",limit:recordsLimit,offset: recordsOffset},httpOptions).pipe(
        tap(response => {
            console.log(response);
            super.next( response); // Emit the response on the Subject
            //super.complete() // End the operation
        })
    ); 
      
            
    
}
}
