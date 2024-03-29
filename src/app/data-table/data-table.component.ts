import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyNotification, data } from '../shared/datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { AddNotificationDialogComponent } from './add-notification-dialog/add-notification-dialog.component';
import { EditNotificationDialogComponent } from './edit-notification-dialog/edit-notification-dialog.component';
import { AssignToPartnersDialogComponent } from './assign-to-partners-dialog/assign-to-partners-dialog.component';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public data?: MyNotification[];
  public editSettings?: EditSettingsModel;
  @ViewChild('grid')
  public grid: GridComponent;
  public notificationCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = data;
    this.notificationCount = this.data.length;
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' };
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Add new Notification', tooltipText: 'Add', id: 'Add'},
      { text: 'View Notification Details', tooltipText: 'Edit', id: 'Edit' },
      { text: 'Delete Notification', tooltipText: 'Delete', id: 'Delete'}, 
      { text: 'Assign To Partners', tooltipText: 'Assign', id: 'Assign'},
      'Search',
    ];
  }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    if (args.item.id === 'Add') {
      this.openAddNotificationDialog();
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
    const dialogRef = this.dialog.open(AddNotificationDialogComponent, {
      data: {} 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditNotificationDialog(): void {
    const dialogRef = this.dialog.open(EditNotificationDialogComponent, {
      data: {} 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openAssignToPartnersDialog(): void {
    const dialogRef = this.dialog.open(AssignToPartnersDialogComponent, {
      data: {} 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
