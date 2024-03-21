import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({ 
	providedIn: 'root'
}) 
// export class ApiService {
//   saveNotification(notificationTitle: string, notificationMessage: string) {
//     throw new Error('Method not implemented.');
//   } 
// 	constructor(private http: HttpClient) { } 
// 	getMessage() { 
// 		return this.http.get( 
// 			'http://localhost:3000/api/message'); 
// 	} 
// }


export class ApiService {

	constructor(private http: HttpClient) { }
  
	saveNotification(notificationTitle: string, notificationMessage: string): Observable<any> {
		return this.http.post<any>('http://localhost:3000/api/notifications', { 
		  notificationTitle: notificationTitle, 
		  notificationMessage: notificationMessage 
		});
	  }
	
  }
  