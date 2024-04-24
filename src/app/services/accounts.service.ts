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
  public id: number = 0;

  constructor(private http: HttpClient,private authService: AuthServiceService)  {
    super();
    
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

    this.authService.authState$.subscribe((state) => {
      if (state?.account.id != null) {
        this.id = state.account.id;
      }
      else {
        throw new Error("Account ID not found");
      }
      
    });
    return this.http.put<AuthResponse>(`${this.apiUrl}accounts/${this.id}`, {
      
      "uname":username},httpOptions).pipe(tap((res) => {
       /// debugger
        this.authService.handleUpdateSuccess(res);
        ///debugger
      }));
  }

  getUserInfo(): Observable<Account> {
    this.authService.authState$.subscribe((state) => {
      if (state?.account.id != null) {
        this.id = state.account.id;
      }
      else {
        throw new Error("Account ID not found");
      }
      
    });
    return this.http.get<Account>(`${this.apiUrl}accounts/${this.id}`,httpOptions);
  }



  public execute(state: any,grid: any): void {
    this.getData(state,grid).subscribe((x) => super.next(x));
  }

  protected getData(
    state: DataStateChangeEventArgs,grid :any
): Observable<DataStateChangeEventArgs> {
    


    //const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    let sortArray: string = '';

    if ((state.sorted || []).length) {
      sortArray =
       
        (state.sorted ?? [])
          .map((obj: Sorts) => {
            return obj.direction === 'descending'
              ? `${obj.name} DESC`
              : `${obj.name} ASC`;
          })
          .reverse()
          .join(',');
    }
    else{
      sortArray = "id ASC";
    }
    let  Searchfields = ['id', 'uname', 'email'],Searchkey="";
    if (state.search) {
      if (state.search && state.search.length > 0) {
        // Extract the search key and fields from the search array
        const { fields, key } = state.search[0];
        //Searchfields = fields || ['id', 'uname', 'email'];
        Searchkey = key || ""; // Assign a default value if key is undefined
        // perform search operation using the field and key on the query
        console.log("search",fields,key)
      }
      
    };
    console.log("search",Searchfields,Searchkey);
    
    

  return this.http.post(`${this.apiUrl}accounts/role`,{value: "admin",limit:state.take,offset: state.skip,order: sortArray,searchFields:Searchfields,searchKey:Searchkey},httpOptions).pipe(
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
