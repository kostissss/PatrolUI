import { Component, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-chang-language-dialog',
  templateUrl: './chang-language-dialog.component.html',
  styleUrl: './chang-language-dialog.component.css'
})
export class ChangLanguageDialogComponent {
  constructor(private apiService: ApiServiceService) { }
  public languageInput='';
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
    this.apiService.changeUserName(this.languageInput).subscribe(

      (response) => {
        alert('UserName changed successfully');
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

  //DROPDOWN CONFIGURATION

  public dataFields: Object = { text: 'text', value: 'value' };
  public dropDownDataLocation: Object = [
    { text: 'English', value: 'EN' },
    { text: 'Greek', value: 'GR' },
    { text: 'Netherlands', value: 'NL' }

    

    
  


  ]



}
