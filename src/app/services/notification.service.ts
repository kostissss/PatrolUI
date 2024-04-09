import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = environment.apiUrl;; // Replace this with your backend API base URL

  constructor(private http: HttpClient) { }
  
  createNotification(notificationData: any) {
    const url = `${this.baseUrl}/api/notifications`; // Construct the complete URL
    return this.http.post<any>(url, notificationData); // Send a POST request to create a new notification
  }
  
	saveNotification(notificationTitle: string, notificationMessage: string): Observable<any> {
		return this.http.post<any>('http://localhost:3000/api/notifications', { 
		  notificationTitle: notificationTitle, 
		  notificationMessage: notificationMessage 
		});
	  }
}