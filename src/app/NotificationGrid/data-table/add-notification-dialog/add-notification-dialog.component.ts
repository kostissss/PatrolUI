import { Component, ViewChild } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { HtmlPreviewerDialogComponent } from '../../../components/dialogs/html-previewer-dialog/html-previewer-dialog.component';
import { NotificationService } from '../../../services/notification.service'; 

@Component({
  selector: 'app-add-notification-dialog',
  templateUrl: './add-notification-dialog.component.html',
  styleUrls: ['./add-notification-dialog.component.css']
})
export class AddNotificationDialogComponent {

  notificationTitle = '';
  notificationMessage = '';

  @ViewChild(HtmlPreviewerDialogComponent) 
  previewDialog!: HtmlPreviewerDialogComponent;
  
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent;

  public toolbar?: ToolbarItems[] | object;
  public dialogAnimationSettings: Object = { effect: 'SlideTop', duration: 600 };
  public dialogResizeDirections: ResizeDirections[] = ['All'];
  public dialogPosition: Object = { X: 'center', Y: 'center' };
  public dialogVisibility: Boolean = false;

  constructor(private notificationService: NotificationService) { }

  onOpenDialog(): void {
    this.dialogObject.show();
  }

  hideDialog: EmitType<object> = () => {
    this.dialogObject.hide();
  };

  dialogButton: Object[] = [
    {
      click: this.hideDialog.bind(this),
      buttonModel: {
        content: 'Cancel',
        cssClass: 'cancel-button'
      }
    },
    {
      click: this.onSaveTemplate.bind(this),
      buttonModel: {
        content: 'Save template',
        cssClass: 'save-button'
      }
    },
    {
      buttonModel: {
        content: 'Send',
        cssClass: 'send-button'
      }
    }
  ];

  onSaveTemplate(): void {
    // You can perform additional operations here if needed
    this.addNewNotification();
  }

  onPreviewClick(): void {
    this.previewDialog.onOpenDialog(this.notificationMessage);
  }

  addNewNotification(): void {
    this.notificationService.createNotification({
      notificationTitle: this.notificationTitle,
      notificationMessage: this.notificationMessage
    }).subscribe(
      response => {
        console.log('Notification saved successfully:', response);
        // Handle success
      },
      error => {
        console.error('Error saving notification:', error);
        // Handle error
      }
    );
  }
}
