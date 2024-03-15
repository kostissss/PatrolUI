import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { environment } from '../../../../../enviroment';
import { ApiServiceService } from '../../../services/api-service.service';

import { Account } from '../../../interfaces/account';
@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrl: './create-new-account.component.css'
})


export class CreateNewAccountComponent implements OnInit {

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
  
    ngOnInit() {
        
        this.account.demoSelected=false;
        this.account.expirationDate = new Date();
    }

  
  
  constructor(private apiService: ApiServiceService) { 
    this.account.demoSelected=false;
   }

  


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
    console.log(this.account);
    if(this.myForm.valid &&  this.account.subscriptionFrequency!=null && this.account.plan!=null && this.account.timeZone!=null && this.account.expirationDate!=null && this.account.selectedOption!=null) {
    this.onSubmit() 
    this.dialogObject.hide();}
    else {
      
    }
  }

  public onSubmit(){

    //put request to the server
    
    this.apiService.createAccount(this.account).subscribe(

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
  
    
  


  
  
  public dropDownDataTimeZone: Object[] = [
    { text: 'GMT (Greenwich Mean Time)', value: 'GMT' },
    { text: 'EST (Eastern Standard Time)', value: 'EST' },
    { text: 'CST (Central Standard Time)', value: 'CST' },
    { text: 'PST (Pacific Standard Time)', value: 'PST' },
    { text: 'IST (Indian Standard Time)', value: 'IST' },
    { text: 'CET (Central European Time)', value: 'CET' },
    { text: 'JST (Japan Standard Time)', value: 'JST' }
  ]

  public dropDownPlan: Object[] = [
    { text: 'Basic (GUARDS : 3)', value: 'BASIC' },
    { text: 'Starter (GUARDS : 9)', value: 'STARTER' },
    { text: 'Professional (GUARDS :24)', value: 'PROFESSIONAL' },
    { text: 'Premium (GUARDS : 49)', value: 'PREMIUM' },
    { text: 'Enterprise: (GUARDS : 100)', value: 'ENTERPRISE' },
    { text: 'Platinum (GUARDS : 0)', value: 'PLATINUM' },
   
  ]
  public dropDownPlanPayment: Object[] = [
    { text: 'Annualy', value: 'A' },
    { text: 'Monthly', value: 'M' },

   
  ]


  //DATEPICKER CONFIGURATION

  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public minDate: Date = new Date();
  public maxDate: Date = new Date(this.fullYear, this.month+99, 25, 17);

  public onDemoClick() {
    const currentDate = new Date();
    
    this.account.expirationDate = new Date(currentDate.setDate(currentDate.getDate() + 30));
}

}
