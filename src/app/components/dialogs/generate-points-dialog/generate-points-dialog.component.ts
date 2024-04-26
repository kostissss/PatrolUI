import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-generate-points-dialog',
  templateUrl: './generate-points-dialog.component.html',
  styleUrl: './generate-points-dialog.component.css'
})
export class GeneratePointsDialogComponent implements OnInit{

  // DIALOG CONFIGURATION
  public dialogAnimationSettings: Object = { effect: 'Zoom', duration: 200};
  public dialogResizeDirections: ResizeDirections[] = [
    'All'
  ];
  public dialogPosition: Object = {
    X: 'center', Y: 'center'
  };
  public closeIcon: Boolean = true;
  @ViewChild('generateCheckPointsDialog') dialogObject! : DialogComponent


  @Output() requestedQuantity = new EventEmitter<number>();
 
  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.quantityValues.push({text:i.toString(), value: i});
    }
  }
 
  public dialogVisibility : Boolean = false;

  public quantity: number = 1;

  public branch: number = 1;
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
    this.requestedQuantity.emit(this.quantity);
   

  }
  


  public dialogButtons: Object = [
    {
      'click': this.hideDialog.bind(this),
      buttonModel : {
        content: 'Cancel',
        cssClass: 'border border-lightgray col-sm-2 m-auto p-2 float-left text-lowercase font-weight-normal '
      }
    },{
      'click': this.submitDialog.bind(this),
      buttonModel : {
        
        content: 'Generate Points',
        cssClass: 'GenerateBtn  m-auto p-2   float-right text-lowercase font-weight-normal submit  ',
        
        
      }
    }
  ];



  //DROPDOWN CONFIGURATION
  public dataFields: Object = { text: 'text', value: 'value' };
  
    
  


  
  
  

  public quantityValues: Object[] = [
   
   
  ]
  public branchValues: Object[] = [
    {text: 'Company`s Main Branch', value: 1},
    {text: 'Branch 2', value: 2},
    {text: 'Branch 3', value: 3},
    {text: 'Branch 4', value: 4},
    {text: 'Branch 5', value: 5},
  ]
  


}