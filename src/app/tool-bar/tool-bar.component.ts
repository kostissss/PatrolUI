import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent implements OnInit {
  public isNotificationSelected: boolean = false;
  
  ngOnInit(): void {
  }

  onSelectItemFromDataSource(selectedItem: any): void {
    if (selectedItem) {
      this.isNotificationSelected = true;
    } else {
      this.isNotificationSelected = false;
    }
  }
}


