import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrl: './warning-dialog.component.css'
})
export class WarningDialogComponent {

  // DIALOG CONFIGURATION
  public dialogAnimationSettings: Object = { effect: 'Zoom', duration: 200};
  public dialogResizeDirections: ResizeDirections[] = [
    'All'
  ];
  public dialogPosition: Object = {
    X: 'center', Y: 'center'
  };
  public closeIcon: Boolean = true;
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent


  @Output() confirmation = new EventEmitter<boolean>();
 

 
  public dialogVisibility : Boolean = false;
  public onOpenDialog = (event: any): void => {
    this.dialogObject.show();
  };

  public hideDialog: EmitType<object> = () => {
    this.confirmation.emit(false);
    
    this.dialogObject.hide();
  }
  public submitDialog: EmitType<object> = () => {
    
    this.onSubmit() 
    
    this.dialogObject.hide();
    
  }

  public onSubmit(){
    this.confirmation.emit(true);
   

  }


  public dialogButtons: Object = [
    {
      'click': this.hideDialog.bind(this),
      buttonModel : {
        content: 'Cancel',
        cssClass: 'border border-lightgray col-sm-2 m-auto p-0 float-left text-lowercase font-weight-normal '
      }
    },{
      'click': this.submitDialog.bind(this),
      buttonModel : {
        
        content: 'Confirm',
        cssClass: 'border border-lightgray m-auto   p-0 col-sm-2 float-right text-lowercase font-weight-normal submit ',
        
        
      }
    }
  ];

}
