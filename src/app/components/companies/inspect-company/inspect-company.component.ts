import { Component, ViewChild } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';

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

  onOpenDialog(): void {
    this.dialogObject.show();
  }

}
