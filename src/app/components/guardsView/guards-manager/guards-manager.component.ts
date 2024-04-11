import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyNotification, data } from '../../../NotificationGrid/shared/datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { GuardsService } from '../../../services/guards.service';
import { Guard } from '../../../interfaces/guard';



@Component({
  selector: 'app-guards-manager',
  templateUrl: './guards-manager.component.html',
  styleUrl: './guards-manager.component.css'
})
export class GuardsManagerComponent implements OnInit {
  
  public data: Guard[]=[];
  public editSettings?: EditSettingsModel;
  public notificationCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;

  @ViewChild('grid')
  public grid!: GridComponent;


  constructor(private dialog: MatDialog,private guardsService: GuardsService) { }

  ngOnInit(): void {
    this.guardsService.data$.subscribe(data => {
      this.data = data;
    });
    this.notificationCount = this.data.length;
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Add new Notification', tooltipText: 'Add', id: 'Add',},
      { text: 'View Notification Details', tooltipText: 'Edit', id: 'Edit',disabled: true}, 
      
      
    ];
  }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    if (args.item.id === 'Add') {
     
    }
    if (args.item.id === 'Edit') { 
      this.openEditNotificationDialog();
    }
    if (args.item.id === 'Assign') {
      this.openAssignToPartnersDialog();
    }
    if (args.item.id === 'Delete') { 
      var selectedRecord = this.grid.getSelectedRecords()[0];
      this.grid.deleteRecord(selectedRecord as string);
    }
  }

  reloadPage() {
    window.location.reload();
  }

  openAddNotificationDialog(): void {
    
  }

  openEditNotificationDialog(): void {
    
  }

  openAssignToPartnersDialog(): void {
   
  }
  onItemClick(){
    var selectedRecord = this.grid.getSelectedRecords()[0];
    (this.grid as GridComponent).toolbarModule.enableItems(['Edit','Delete','Assign' ], true); // Disable toolbar items.


  }


  
}
