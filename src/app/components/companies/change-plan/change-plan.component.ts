import { Component, ViewChild } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-change-plan',
  templateUrl: './change-plan.component.html',
  styleUrl: './change-plan.component.css'
})
export class ChangePlanComponent {
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent;

  public toolbar?: ToolbarItems[] | object;
  public dialogAnimationSettings: Object = { effect: 'SlideTop', duration: 600 };
  public dialogResizeDirections: ResizeDirections[] = ['All'];
  public dialogPosition: Object = { X: 'center', Y: 'center' };
  public dialogVisibility: Boolean = false;

  constructor() {
  }
  public data1: string[] = ['Basic (1-3 IDs)', 'Starter (4-9 IDs)', 'Professional (10-24 IDs)'];
  public data2: string[] = ['BASE', 'PRO', 'GOLD'];

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
      buttonModel: {
        content: 'Apply',
        cssClass: 'apply-button'
      }
    }
  ];
}