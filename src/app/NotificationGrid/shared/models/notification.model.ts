import { Account } from '../../../interfaces/account';

export class Notification {
    NotificationTitle: string;
    NotificatioMessage: string;
    account: Account;
    
  
    constructor(NotificationTitle: string, NotificatioMessage: string, account: Account) {
      this.NotificationTitle = NotificatioMessage;
      this.NotificatioMessage = NotificatioMessage;
      this.account = account;
    }
  }