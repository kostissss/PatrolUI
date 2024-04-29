import { Component, ViewChild } from '@angular/core';
import { AccountsService } from '../../../services/accounts.service';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-change-username-dialog',
  templateUrl: './change-username-dialog.component.html',
  styleUrl: './change-username-dialog.component.css'
})
export class ChangeUsernameDialogComponent {

  constructor(private apiService: AccountsService,private toastService: ToastService) { }
  public unameInput='';
  public enabledSelected :boolean = false;

  // DIALOG CONFIGURATION
  public dialogAnimationSettings: Object = { effect: 'SlideTop', duration: 200};
  public dialogResizeDirections: ResizeDirections[] = [
    'All'
  ];
  public dialogPosition: Object = {
    X: 'center', Y: 'top'
  };
  public closeIcon: Boolean = true;
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent
 

  @ViewChild('myForm',{static:true}) myForm!: NgForm;
  public dialogVisibility : Boolean = false;
  public onOpenDialog = (event: any): void => {
    this.dialogObject.show();
  };

  public hideDialog: EmitType<object> = () => {
    this.myForm.resetForm();
    this.dialogObject.hide();
  }
  public submitDialog: EmitType<object> = () => {
    if(this.myForm.valid ) {
    this.onSubmit() 
    this.myForm.resetForm();
    this.dialogObject.hide();}
    else {
      
    }
  }

  public onSubmit(){
    //put request to the server
    this.apiService.changeUserName(this.unameInput).subscribe(

      (response) => {
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Username changed succesfully!",style:"success",id:id};
        this.toastService.sendMessage(toast);
      },
      (error) => {
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:error.message,style:"danger",id:id};
        this.toastService.sendMessage(toast);
        
      }
    )

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
        
        content: 'Apply',
        cssClass: 'border border-lightgray m-auto   p-0 col-sm-2 float-right text-lowercase font-weight-normal submit ',
        
        
      }
    }
  ];

}
