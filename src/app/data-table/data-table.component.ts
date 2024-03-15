import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchSettingsModel } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {
  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  public searchOptions?: SearchSettingsModel;
  

  ngOnInit(): void {
      this.data = data;
      this.searchOptions = { fields: ['Username','Notification Title','Notification Message'], 
      operator: 'contains', key: '', ignoreCase: true, ignoreAccent:true };
        this.toolbarOptions = ['Search'];
    }

  }
