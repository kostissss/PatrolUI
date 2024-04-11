import { Injectable } from '@angular/core';
import { NotificationRequestService } from './notification-request.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifReqService: NotificationRequestService) { }

  getNotification( ) {
    return this.notifReqService.get('notification');
  }

  createNotification(notificationTitle: string, notificationMessage: string) {
    // Construct the payload object
    const payload = {
      notificationTitle: notificationTitle,
      notificationMessage: notificationMessage
    };
  
    // Send a POST request to create a notification
    return this.notifReqService.post('notification', payload);
  }

  editNotification(notificationTitle: string, notificationMessage: string) {
    // We want to send a web request to update a list
    return this.notifReqService.patch('notification', `${ notificationTitle }, ${notificationMessage}`);
  }

  deleteNotification( ) {
    return this.notifReqService.delete('notification');
  }

}
