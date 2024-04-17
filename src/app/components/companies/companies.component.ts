import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';
import {PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import {  data } from './datasource';
import { DetailsComponent } from './details/details.component';
import { InspectCompanyComponent } from './inspect-company/inspect-company.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePlanComponent } from './change-plan/change-plan.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  @ViewChild('grid') grid!: GridComponent
  public data!: Object[];
  @ViewChild('onDetails')
  public onDetails!: DetailsComponent;
  @ViewChild('onViewCompanies')
  public onViewCompanies!: InspectCompanyComponent;
  @ViewChild('onResetPass')
  public onResetPass!: ResetPasswordComponent;
  @ViewChild('onChangePlan')
  public onChangePlan!: ChangePlanComponent;
  public buttonStatus : boolean = true;
  public editSettings?: EditSettingsModel;
  public companiesCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;
  public pageSettings?: PageSettingsModel;
  wrapOption = { wrapMode: 'Header' };

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = data;
    this.companiesCount = this.data.length;
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Details', id: 'Info', disabled: true},
      { text: 'Inspect Companies', id: 'View', disabled: true},
      { text: 'Export To Excel', id: 'Export',disabled: false}, 
      { text: 'Reset Password', id: 'Reset',disabled: false},
      { text: 'Change Plan', id: 'Edit', disabled: true},
      'Search'];
  }

  rowSelected() {
   
 }

 clickHandler(args: ClickEventArgs): void {
  if (args.item.prefixIcon === 'e-refresh') {
    this.reloadPage();
  }
  if (args.item.id === 'Info') {
    this.onDetails.onOpenDialog();
  }
  if (args.item.id === 'View') { 
    this.onViewCompanies.onOpenDialog();
  }
  if (args.item.id === 'Export') {
  }
  if (args.item.id === 'Reset') { 
    this.onResetPass.onOpenDialog();
  }
  if (args.item.id === 'Edit') {
    this.onChangePlan.onOpenDialog();
  }
}

  reloadPage() {
    window.location.reload();
  }

  onCancelClick(){

  }
    
  }


