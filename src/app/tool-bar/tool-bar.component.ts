import { Component, OnInit } from '@angular/core';
import { data, MyNotification } from '../shared/datasource';
import { ToolbarItems,  } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent implements OnInit {
  public isNotificationSelected: boolean = false;
  public selectedNotification: MyNotification | null = null;
  public data?: MyNotification[];
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

  onViewNotificationDetails(): void {
    
  }

  onAddNotification(): void {
    
  }

  onDeleteNotification(): void {
    
  }

  onAssignToPartner(): void {
    
  }
}
