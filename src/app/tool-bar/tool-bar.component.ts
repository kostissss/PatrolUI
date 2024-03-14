import { Component, OnInit } from '@angular/core';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent implements OnInit {
  public isNotificationSelected: boolean = false;
  
  ngOnInit(): void {
  }

  enableButtons(): void {
    this.isNotificationSelected = true;
  }

  disableButtons(): void {
    this.isNotificationSelected = false;
  }

  onNotificationSelect(): void {
    const notificationSelected: boolean = true; 
    if (notificationSelected) {
      this.enableButtons();
    } else {
      this.disableButtons();
    }
  }
}


