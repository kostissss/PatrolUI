import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { CheckPoint } from '../../../interfaces/checkPoint';
import { SafeUrl } from '@angular/platform-browser';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-qrcode-dialog',
  templateUrl: './qrcode-dialog.component.html',
  styleUrl: './qrcode-dialog.component.css'
})
export class QRCodeDialogComponent implements OnInit {

  dialogWidth: string="";
  dialogHeight: string="";
  qrData: string = "";
  qrCodeDownloadLink: SafeUrl = "";


@Input() public checkPoint: CheckPoint = {} as CheckPoint;
  

  

setDialogSize(): void {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) { // Adjust this breakpoint according to your requirements
    this.dialogWidth = '62%'; // Or any percentage you prefer for small screens
    this.dialogHeight = '60%';
  } else {
    this.dialogWidth = '455px'; // Fixed width for large screens
    this.dialogHeight = '455px'; // You can also use a fixed height for large screens
  }
}
  
    ngOnInit() {
        
        
        this.setDialogSize();
    }

  
  
  constructor() { 
    
   }

  


  // DIALOG CONFIGURATION
  public dialogAnimationSettings: Object = { effect: 'Zoom', duration: 200};
  public dialogResizeDirections: ResizeDirections[] = [
    'All'
  ];
  public dialogPosition: Object = {
    X: 'center', Y: 'center'
  };
  public closeIcon: Boolean = true;
  @ViewChild('QRCodeDialogComponent') dialogObject! : DialogComponent




  

  public hideDialog: EmitType<object> = () => {
    
    
    this.dialogObject.hide();
  }
 

 



  public onOpenDialog = (message:String): void => {
    this.qrData=JSON.stringify(this.checkPoint);
    this.dialogObject.show();
   
    
  };

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }


  public dialogButtons: Object = [
    {
      'click': this.hideDialog.bind(this),
      buttonModel : {
        content: 'Save',
        cssClass: 'border-kinda-gray col-sm-2 m-auto p-1 float-left text-lowercase font-weight-normal '
      }
    },{
      'click': this.onPrintClick.bind(this),
      buttonModel : {
        
        content: 'Print',
        cssClass: 'border-kinda-gray    p-1 col-sm-2 mr-auto ml-4 text-lowercase font-weight-normal  ',
        
        
      }
    },{
      'click': this.hideDialog.bind(this),
      buttonModel : {
        content: 'Close',
        cssClass: ' border-kinda-gray col-sm-2 m-auto float-right p-1 float-left text-lowercase font-weight-normal '
      }
    }
  ];

  onPrintClick() {
    window.print();
  }
  

    
  


}
  
 
 
