import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, ToolbarItems, } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-notifgrid',
  templateUrl: './notifgrid.component.html',
  styleUrls: ['./notifgrid.component.css'],
})


export class NotifGridComponent implements OnInit {

  @ViewChild('grid')
  public grid!: GridComponent;
  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;
  totalCompanies = 0;
  selectedCompanies = 0;


  ngOnInit(): void {
    this.toolbar = [ 'Search' ];
    this.data = data.map((company, index) => ({ ...company, isSelected: false }));
    this.totalCompanies = this.data.length;
    this.data = data.map((company, index) => ({ ...company, isSelected: false }));
    this.totalCompanies = this.data.length;
  }
    

  }