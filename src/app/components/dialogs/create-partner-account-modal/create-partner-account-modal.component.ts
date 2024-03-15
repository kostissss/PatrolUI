import { Component, ViewChild } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType} from '@syncfusion/ej2-base';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Account } from '../../../interfaces/account';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-create-partner-account-modal',
  templateUrl: './create-partner-account-modal.component.html',
  styleUrl: './create-partner-account-modal.component.css'
})
export class CreatePartnerAccountModalComponent {
  constructor(private apiService :ApiServiceService) { }
  

  public account: Account = {
    name: "",
    email: "",
    password: "",
    uname: "",
    subscriptionFrequency: "",
    plan: "",
    timeZone: "",
    selectedOption: "",
    demoSelected: false,
    expirationDate: new Date(),
    language: ""
};
  
  
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
     this.dialogObject.hide();
  }
  public submitDialog: EmitType<object> = () => {
    if(this.myForm.valid  && this.account.timeZone != null) {
    this.onSubmit() 
    this.dialogObject.hide();}
    else {
      
    }
  }

  public onSubmit(){
    
    
    this.apiService.createPartnerAccount(this.account).subscribe(

      (response) => {
        alert('Account created successfully');
      },
      (error) => {
        alert('An error occurred');
      }
    )

  }

  




  

  public dialogButtons: Object = [
    {
      'click': this.hideDialog.bind(this),
      buttonModel : {
        content: 'Cancel',
        cssClass: 'border border-secondary col-sm-2 m-auto p-2 float-left text-lowercase font-weight-normal '
      }
    },{
      'click': this.submitDialog.bind(this),
      buttonModel : {
        
        content: 'Add',
        cssClass: 'border border-secondary m-auto col-sm-2 p-2 float-right text-lowercase font-weight-normal submit ',
        
        
      }
    }
  ];
  //DROPDOWN CONFIGURATION
  public dataFields: Object = { text: 'text', value: 'value' };
  public dropDownDataLocation: Object = [
    { text: 'English', value: 'EN' },
    { text: 'Greek', value: 'GR' },
    { text: 'Netherlands', value: 'NL' }

    

    
  


  ]
  
  public dropDownDataTimeZone: Object[] = [
    { text: 'GMT (Greenwich Mean Time)', value: 'GMT' },
    { text: 'EST (Eastern Standard Time)', value: 'EST' },
    { text: 'CST (Central Standard Time)', value: 'CST' },
    { text: 'PST (Pacific Standard Time)', value: 'PST' },
    { text: 'IST (Indian Standard Time)', value: 'IST' },
    { text: 'CET (Central European Time)', value: 'CET' },
    { text: 'JST (Japan Standard Time)', value: 'JST' }
];
 

  
}
