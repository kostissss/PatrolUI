import { Component, OnInit, ViewChild } from '@angular/core';
import { MyNotification, data } from '../shared/datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {

  public data?: MyNotification[];
  public editSettings?: EditSettingsModel;

  @ViewChild('grid')
  public grid: GridComponent;

  public notificationCount: number = 0;
  public orderIDRules?: MyNotification;
  public customerIDRules?: MyNotification;
  public freightRules?: MyNotification;
  public toolbarOptions?: ToolbarItems[] | any;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;

  ngOnInit(): void {
    this.data = data;
    this.notificationCount = this.data.length;
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbarOptions = [
      { prefixIcon: 'e-refresh'},
      { text: 'Add new Notification'},
      { text: 'View Notification Details'}, 
      { text: 'Delete Notiication'}, 
      { text: 'Assign To Partners'},
      'Search',
      ];
  }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    if (args.item.text === 'Add new Notification') {
      alert("ADD NOTIFICATION TEST");
    }
    if (args.item.text === 'View Notification Details') { 
      alert("VIEW NOTIFICATIONS TEST");
    }
    if (args.item.text === 'Delete Notiication') { 
      var selectedRecord = this.grid.getSelectedRecords()[0];
      this.grid.deleteRecord(selectedRecord as string);
    }
    if (args.item.text === 'Assign To Partners') {
      alert("ASSIGN PARTNERS TEST");
    }
  }

  reloadPage(){
    window.location.reload();
  }

}
