import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

class User {
  public datetime?: Date;
  constructor() {
  }
}

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrl: './create-new-account.component.css'
})


export class CreateNewAccountComponent implements OnInit {


  user?: User | any;
    ngOnInit() {
        this.user = new User();
        this.demoSelected=false;
    }

  public nameInput='';
  public emailInput='';
  public passwordInput='';
  public unameInput='';
  public paymentFrequencyInput=" ";
  public planInput="";
  public timezoneInput="";
  selectedOption: string="option1" ;
  public demoSelected: boolean = false;
  
  constructor() {
    this.demoSelected=false;
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
    if(this.myForm.valid &&  this.paymentFrequencyInput!=null && this.planInput!=null && this.timezoneInput!=null && this.user.datetime!=null && this.selectedOption!=null) {
    this.onSubmit() 
    this.dialogObject.hide();}
    else {
      
    }
  }

  public onSubmit(){

    //put request to the server

  }

  




  

  public dialogButtons: Object = [
    {
      'click': this.hideDialog.bind(this),
      buttonModel : {
        content: 'Cancel',
        cssClass: 'border border-secondary col-sm-2 m-2 p-2 float-left text-lowercase font-weight-normal '
      }
    },{
      'click': this.submitDialog.bind(this),
      buttonModel : {
        
        content: 'Add',
        cssClass: 'border border-secondary m-2 col-sm-2 p-2 float-right text-lowercase font-weight-normal submit ',
        
        
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
    
    this.user.datetime = new Date(currentDate.setDate(currentDate.getDate() + 30));
}

}
