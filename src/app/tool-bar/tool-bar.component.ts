import { Component, OnInit } from '@angular/core';
import { data } from '../shared/datasource';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent implements OnInit {
  public isNotificationSelected: boolean = false;

  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  
  ngOnInit(): void {
    this.data = data;
    this.toolbarOptions = ['Search'];
}

  onSelectItemFromDataSource(selectedItem: any): void {
    if (selectedItem) {
      this.isNotificationSelected = true;
    } else {
      this.isNotificationSelected = false;
    }
  }
}


