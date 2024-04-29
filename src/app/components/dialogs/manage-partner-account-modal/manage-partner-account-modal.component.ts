import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { AccountsService } from '../../../services/accounts.service';
import { Message } from '../../../interfaces/message';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-manage-partner-account-modal',
  templateUrl: './manage-partner-account-modal.component.html',
  styleUrl: './manage-partner-account-modal.component.css'
})
export class ManagePartnerAccountModalComponent {

  constructor(private apiService : AccountsService,private toastService: ToastService) { }

  public passwordInput='';
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
    this.apiService.resetPassword(this.passwordInput).subscribe(

      (response) => {
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Succesfully updated password",style:"sucess",id:id};
        this.toastService.sendMessage(toast);
      },
      (error) => {
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Error chaning Password",style:"danger",id:id};
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
