import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.apiUrl
  }
  
	saveNotification(notificationTitle: string, notificationMessage: string, payload: Object){
		return this.http.post(`${this.baseUrl}notification/${notificationTitle}, ${notificationMessage}`, payload) 
		
	}
}