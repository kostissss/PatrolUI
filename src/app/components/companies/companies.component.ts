import { Component, OnInit, ViewChild } from '@angular/core';
import { data, MyCompanies } from './datasource';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
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
  @ViewChild('grid') public grid!: GridComponent;
  public data!: MyCompanies[];
  @ViewChild('onDetailsDialog') public onDetailsDialog!: DetailsComponent;
  @ViewChild('onInspectCompaniesDialog') public onInspectCompaniesDialog!: InspectCompanyComponent;
  @ViewChild('onResetPassDialog') public onResetPassDialog!: ResetPasswordComponent;
  @ViewChild('onChangePlanDialog') public onChangePlanDialog!: ChangePlanComponent;
  public editSettings?: EditSettingsModel;
  public companiesCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;
  public pageSettings?: PageSettingsModel;
  public wrapOption = { wrapMode: 'Header' };

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = data;
    this.companiesCount = this.data.length;
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {mode: 'Dialog',};
    this.toolbar = [
      { prefixIcon: 'e-refresh' },
      { text: 'Details',tooltipText: 'Info', id: 'Info', disabled: true },
      { text: 'Inspect Companies',tooltipText: 'View', id: 'View', disabled: true },
      { text: 'Export To Excel',tooltipText: 'ExcelExport', id: 'ExcelExport', disabled: false }, 
      { text: 'Reset Password',tooltipText: 'Reset', id: 'Reset', disabled: true },
      { text: 'Change Plan',tooltipText: 'Edit', id: 'Edit', disabled: true },
      'Search'
    ];
  }
  
  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    if (args.item.id === 'Info') {
      this.onDetailsDialog.onOpenDialog();
    }
    if (args.item.id === 'View') { 
      this.onInspectCompaniesDialog.onOpenDialog();
    }
    if (args.item.id === 'ExcelExport') {
      (this.grid as GridComponent).excelExport();
    }
    if (args.item.id === 'Reset') { 
      this.onResetPassDialog.onOpenDialog();
    }
    if (args.item.id === 'Edit') {
      this.onChangePlanDialog.onOpenDialog();
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  openDetailsDialog(companyData: MyCompanies): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: { company: companyData }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openInspectCompanyDialog(): void {
    const dialogRef = this.dialog.open(InspectCompanyComponent, {
      data: {} 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openResetPasswordDialog(): void {
    const dialogRef = this.dialog.open(ResetPasswordComponent, {
      data: {} 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openChangePlanDialog(): void {
    const dialogRef = this.dialog.open(ChangePlanComponent, {
      data: {} 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onItemClick(){
    var selectedRecord = this.grid.getSelectedRecords()[0];
    (this.grid as GridComponent).toolbarModule.enableItems(['Info','View','Edit','Reset'], true);
  }
}
