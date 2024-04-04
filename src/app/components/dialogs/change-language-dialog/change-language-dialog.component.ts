import { Component, ViewChild } from '@angular/core';
import { AccountsService } from '../../../services/api-service.service';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-change-language-dialog',
  templateUrl: './change-language-dialog.component.html',
  styleUrl: './change-language-dialog.component.css'
})
export class ChangeLanguageDialogComponent {
  constructor(private apiService: AccountsService) { }
  public languageInput='EN';
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
 

  
  public dialogVisibility : Boolean = false;
  public onOpenDialog = (event: any): void => {
    this.dialogObject.show();
  };

  public hideDialog: EmitType<object> = () => {
    
    this.dialogObject.hide();
  }
  public submitDialog: EmitType<object> = () => {
    
    this.onSubmit() 
    
    this.dialogObject.hide();
    
      
    
  }

  public onSubmit(){
    //put request to the server
    // this.apiService.changeUserName(this.languageInput).subscribe(

    //   (response) => {
    //     alert('Language changed successfully');
    //   },
    //   (error) => {
    //     alert('An error occurred');
    //   }
    // )

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

  public onOpen(args: any): void {
    //Preventing the default dialog focus
    args.preventFocus = true;
  }

  //DROPDOWN CONFIGURATION

  public dataFields: Object = { text: 'text', value: 'value' };
  public dropDownDataLanguage: Object = [
    { text: 'English(for Security Use)', value: 'EN' },
    { text: 'Greek', value: 'GR' },
    { text: 'Netherlands', value: 'NL' }

    

    
  


  ]



}
