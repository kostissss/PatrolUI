import { Component, ViewChild } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-inspect-company',
  templateUrl: './inspect-company.component.html',
  styleUrl: './inspect-company.component.css'
})
export class InspectCompanyComponent {
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent;

  public toolbar?: ToolbarItems[] | object;
  public dialogAnimationSettings: Object = { effect: 'SlideTop', duration: 600 };
  public dialogResizeDirections: ResizeDirections[] = ['All'];
  public dialogPosition: Object = { X: 'center', Y: 'center' };
  public dialogVisibility: Boolean = false;

  constructor() { }

  onOpenDialog(): void {
    this.dialogObject.show();
  }

  hideDialog: EmitType<object> = () => {
    this.dialogObject.hide();
  };

  dialogButton: Object[] = [
    {
      click: this.hideDialog.bind(this),
      buttonModel: {
        content: 'Cancel',
        cssClass: 'cancel-button'
      }
    },
    {
      click: this.hideDialog.bind(this),
      buttonModel: {
        content: 'Confirm',
        cssClass: 'Confirm-button'
      }
    }
  ];


}