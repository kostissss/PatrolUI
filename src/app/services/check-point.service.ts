import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheckPoint } from '../interfaces/checkPoint';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true  // Include cookies in requests
};

@Injectable({
  providedIn: 'root',
})
export class CheckPointService {
  apiUrl = environment.apiUrl;
  private dataSubject = new BehaviorSubject<any>(null);
  data$: Observable<any> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  

  getFilteredCheckPoints(field: string, value: number): Observable<CheckPoint[]> {
    //debugger
    return this.http
      .post<
        CheckPoint[]
      >(`${this.apiUrl}checkPoints/${field}`, { value: value }, httpOptions)
      .pipe(
        tap((response) => {
          // debugger
          this.dataSubject.next(response);
          console.log(response);
        }),
      );
  }



  updateMultipleCheckPoints(checkPoints: CheckPoint[]): Observable<CheckPoint[]> {
    //debugger
    return this.http
      .put<CheckPoint[]>(
        `${this.apiUrl}checkPoints/updateMultipleCheckPoints`,
        checkPoints,
        httpOptions,
      )
      .pipe(
        tap((response) => {
          //debugger
          this.dataSubject.next(response);
        }),
      );
  }


  bulkCreateCheckPoints(checkPoints: CheckPoint[]): Observable<CheckPoint[]> {
    //debugger
    return this.http
      .post<CheckPoint[]>(
        `${this.apiUrl}checkPoints/bulkCreateCheckPoints`,
        checkPoints,
        httpOptions,
      )
      .pipe(
        tap((response) => {
          //debugger
          this.dataSubject.next(
            this.dataSubject.getValue().concat(response)
          ); 
        }),
      );
  }
}
