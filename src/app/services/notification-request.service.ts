import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class NotificationRequestService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.apiUrl
  }

  get(uri: string) {
    return this.http.get(`${this.baseUrl}notification/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.baseUrl}notification/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.baseUrl}notification/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.baseUrl}notification/${uri}`);
  }

}
