import { Component, OnInit, } from '@angular/core';
import { MyNotification, data } from '../shared/datasource';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {

  public data?: MyNotification[];
  public editSettings?: EditSettingsModel;

  public orderIDRules?: MyNotification;
  public customerIDRules?: MyNotification;
  public freightRules?: MyNotification;
  public toolbarOptions?: ToolbarItems[] | any;
  public selectionOptions?: SelectionSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbarOptions = [{ text: 'reload'},'Search',{ text: 'Add new Notification'}, { text: 'View Notification Details'}, 'Delete', { text: 'Assign To Partners'},];
  }

  toolbarClick(args: Object | any): void {
    if (args.item.text === 'Add new Notification') {
      alert("ADD TEST");
    }
    if (args.item.text === 'View Notification Details') {
      alert("NOTIFICATIONS TEST");
    }
    if (args.item.text === 'Assign To Partners') {
      alert("ASSIGN PARTNERS TEST");
    }
    if (args.item.text === 'reload') {
      this.reloadPage();
    }
  }

  reloadPage(){
    window.location.reload();
  }

}
