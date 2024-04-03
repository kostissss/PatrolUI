import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType} from '@syncfusion/ej2-base';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  notificationTitle = '';
  notificationMessage = '';
  


  ngOnInit(): void {
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Add new Notification', tooltipText: 'Add', id: 'Add',},
      { text: 'View Notification Details', tooltipText: 'Edit', id: 'Edit',disabled: true}, 
      { text: 'Delete Notification', tooltipText: 'Delete', id: 'Delete',disabled: true}, 
      { text: 'Assign To Partners', tooltipText: 'Assign', id: 'Assign',disabled: true},
      'Search',
    ];
  }


  
  public toolbar?: ToolbarItems[] | object;

  
    

  // DIALOG CONFIG
    public dialogAnimationSettings: Object = { effect: 'SlideTop', duration: 600};
    public dialogResizeDirections: ResizeDirections[] = [
      'All'
    ];
    public dialogPosition: Object = {
      X: 'center', Y: 'center'
    };
  
    
    @ViewChild('dialogcomponent') dialogObject! : DialogComponent
    public dialogVisibility : Boolean = false;
    public onOpenDialog = (): void => {
      this.dialogObject.show();
    };
  
    public hideDialog: EmitType<object> = () => {
       this.dialogObject.hide();
    }
  

    // DIALOG BUTTONS
    public dialogButton: Object = [
      {
        'click': this.hideDialog.bind(this),
        buttonModel : {
          content: 'Cancel',
          //position: 'BottomLeft',
          // target: '.e-footer-content', // Ορίστε το target ως '.e-footer-content'
          //align: 'Left' // Τοποθετήστε το κουμπί στην αριστερή πλευρά
          cssClass: 'cancel-button'
        }
      },
      // {buttonModel : {
      //   content: 'Save template',
      //   //align : 'left'
      // }
      // },
      {
        'click': this.onSaveTemplate.bind(this), // Call onSaveTemplate when clicked
        buttonModel : {
          content: 'Save template',
          cssClass: 'previewBtn'
        }
      },
      {buttonModel : {
        content: 'send',
        cssClass: 'BtnBlue pt-2 '
      }
      }
  
    ];
  
    
    
  
    
  
    onSaveTemplate() {
      this.notificationMessage = "the users notificarion"
    }

}
