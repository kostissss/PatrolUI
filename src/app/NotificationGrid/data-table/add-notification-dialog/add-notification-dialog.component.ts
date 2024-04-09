import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType} from '@syncfusion/ej2-base';
import { HtmlPreviewerDialogComponent } from '../../../components/dialogs/html-previewer-dialog/html-previewer-dialog.component';


@Component({
  selector: 'app-add-notification-dialog',
  templateUrl: './add-notification-dialog.component.html',
  styleUrl: './add-notification-dialog.component.css'
})

export class AddNotificationDialogComponent {

  notificationTitle = '';
  notificationMessage = '';

  @ViewChild(HtmlPreviewerDialogComponent) 
  previewDialog!: HtmlPreviewerDialogComponent;
  
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent

  public toolbar?: ToolbarItems[] | object;
  public dialogAnimationSettings: Object = { effect: 'SlideTop', duration: 600};
  public dialogResizeDirections: ResizeDirections[] = ['All'];
  public dialogPosition: Object = {X: 'center', Y: 'center'};
  public dialogVisibility : Boolean = false;
  public onOpenDialog = (): void => {
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
      cssClass: 'cancel-button'
    }
  },
  {
    'click': this.onSaveTemplate.bind(this), // Call onSaveTemplate when clicked
    buttonModel : {
      content: 'Save template',
      cssClass: 'save-button'
    }
  },
  {buttonModel : {
    content: 'send',
    cssClass: 'send-button '
  }
  }];

  ngOnInit(): void {
    
  }
  
  onSaveTemplate() {
    this.notificationMessage = "the users notificarion"
  }
  onPreviewClick() {
    this.previewDialog.onOpenDialog(this.notificationMessage);
  }


}
