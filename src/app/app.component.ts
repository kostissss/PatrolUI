import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType} from '@syncfusion/ej2-base';
import { ApiService } from './api.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent{


  //title = 'angular-dialog';
  public dialogAnimationSettings: Object = { effect: 'FlipXUp', duration: 600};
  public dialogResizeDirections: ResizeDirections[] = [
    'All'
  ];
  public dialogPosition: Object = {
    X: 'center', Y: 'center'
  };

  //public closeIcon: Boolean = true;
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent
  public dialogVisibility : Boolean = false;
  public onOpenDialog = (event: any): void => {
    this.dialogObject.show();
  };

  public hideDialog: EmitType<object> = () => {
     this.dialogObject.hide();
  }

  public dialogButton: Object = [
    {
      'click': this.hideDialog.bind(this),
      buttonModel : {
        content: 'Cancel',
        //position: 'BottomLeft',
        // target: '.e-footer-content', // Ορίστε το target ως '.e-footer-content'
        //align: 'Left' // Τοποθετήστε το κουμπί στην αριστερή πλευρά
        cssClass: 'cancel-button'
      }
    },
    // {buttonModel : {
    //   content: 'Save template',
    //   //align : 'left'
    // }
    // },
    {
      'click': this.onSaveTemplate.bind(this), // Call onSaveTemplate when clicked
      buttonModel : {
        content: 'Save template',
        cssClass: 'Save-template-button'
      }
    },
    {buttonModel : {
      content: 'send',
      cssClass: 'send-button'
    }
    }

  ];

  
  notificationTitle = '';
  notificationMessage = '';
  apiService: any;

  onUpdateServerName(event : any){
    //this.notificationTitle = (<HTMLInputElement>event.target).value;
  }


  onSaveTemplate() {
    // Call the service method to save the notification
    this.apiService.saveNotification(this.notificationTitle, this.notificationMessage).subscribe(response => {
      // Handle success response if necessary
      console.log('Notification saved successfully:', response);
      // Close the dialog or perform any other action upon successful save
      this.dialogObject.hide(); // Assuming this is the dialog reference
    }, error => {
      // Handle error
      console.error('Error saving notification:', error);
      // Display error message or perform other error handling
    });
  }


}
