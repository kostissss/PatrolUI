import { Component, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { Account } from '../../../interfaces/account';
import { AccountsService } from '../../../services/api-service.service';
import { ResizeDirections } from '@syncfusion/ej2-popups';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-html-previewer-dialog',
  templateUrl: './html-previewer-dialog.component.html',
  styleUrl: './html-previewer-dialog.component.css'
})
export class HtmlPreviewerDialogComponent  implements OnInit {

  dialogWidth: string="";
  dialogHeight: string="";
  sanitizedMessage: any;

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
    language: "",
    role: "admin"

};

setDialogSize(): void {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) { // Adjust this breakpoint according to your requirements
    this.dialogWidth = '62%'; // Or any percentage you prefer for small screens
    this.dialogHeight = '60%';
  } else {
    this.dialogWidth = '752px'; // Fixed width for large screens
    this.dialogHeight = '534px'; // You can also use a fixed height for large screens
  }
}
  
    ngOnInit() {
        
        this.account.demoSelected=false;
        this.account.expirationDate = new Date();
        this.setDialogSize();
    }

  
  
  constructor(private apiService: AccountsService,private sanitizer:DomSanitizer) { 
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
 

 



  public onOpenDialog = (message:String): void => {
    if(message != ''){
    this.sanitizedMessage= this.sanitizer.sanitize(SecurityContext.HTML, message);
    this.dialogObject.show();
    }
    
  };

  

    
  


  
  
 
 

}