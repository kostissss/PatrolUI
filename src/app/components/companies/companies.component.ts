import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import {PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  public data!: object[];
  public buttonStatus : boolean = true;
  public editSettings?: EditSettingsModel;
  public companiesCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;
  public pageSettings?: PageSettingsModel;
  wrapOption = { wrapMode: 'Header' };


  @ViewChild('grid')
  public grid!: GridComponent;
  


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = data;
    this.companiesCount = this.data.length;
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Details', tooltipText: 'Edit', id: 'Info', disabled: true},
      { text: 'Inspect Companies', tooltipText: 'View', id: 'View', disabled: true},
      { text: 'Export To Excel', tooltipText: 'Edit', id: 'Export',disabled: false}, 
      { text: 'Reset Password', tooltipText: 'Edit', id: 'Reset',disabled: false},
      { text: 'Change Plan', tooltipText: 'Edit', id: 'Edit', disabled: true},
      'Search'

    ];
  }

  rowSelected() {
   
 }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    
  }

  reloadPage() {
    window.location.reload();
  }

  onCancelClick(){

    }
    
  }


