import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { Guard } from '../interfaces/guard';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true  // Include cookies in requests
};


@Injectable({
  providedIn: 'root'
})
export class GuardsService {
  apiUrl = environment.apiUrl;
  private dataSubject = new BehaviorSubject<any>(null);
  data$: Observable<any> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    
  }




  getFilteredGuards(field: string,value:number) {
    //debugger
   let guards= this.http.post<Guard[]>(`${this.apiUrl}guards/${field}`,{value: value},httpOptions).subscribe((response) => { 
   
   // debugger
      this.dataSubject.next(response);


  });
  

  }





}
