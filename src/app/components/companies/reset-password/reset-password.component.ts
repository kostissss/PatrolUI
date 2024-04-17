import { Component, ViewChild } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  @ViewChild('dialogcomponent') dialogObject! : DialogComponent;

  public toolbar?: ToolbarItems[] | object;
  public dialogAnimationSettings: Object = { effect: 'SlideTop', duration: 600 };
  public dialogResizeDirections: ResizeDirections[] = ['All'];
  public dialogPosition: Object = { X: 'center', Y: 'center' };
  public dialogVisibility: Boolean = false;

  onOpenDialog(): void {
    this.dialogObject.show();
  }


}
