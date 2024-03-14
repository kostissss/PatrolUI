import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {
  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  

  ngOnInit(): void {
      this.data = data;;
  }
}