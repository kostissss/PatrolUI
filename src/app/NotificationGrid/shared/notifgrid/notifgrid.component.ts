import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  PageSettingsModel,
  SearchSettingsModel,
  ToolbarItems,
  EditSettingsModel,
} from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-notifgrid',
  templateUrl: './notifgrid.component.html',
  styleUrls: ['./notifgrid.component.css'],
})


export class NotifGridComponent implements OnInit {
  // ViewChild for the grid component
  @ViewChild('grid') grid!: NotifGridComponent;

  // Define properties for grid configuration
  public toolbarOptions?: ToolbarItems[] | object;
  public toolbar?: ToolbarItems[] | object;
  public editSettings?: EditSettingsModel;
  public pageSettings: PageSettingsModel = {
    pageSize: 20, 
  };
  public searchSettings: SearchSettingsModel = {
    fields: ['CompanyID', 'CompanyName', 'UserName', 'Email', 'PatrolLicences'], 
    key: 'contains', 
  };
  checkboxes: boolean[] = [];
  totalCompanies = 0;
  selectedCompanies = 0;
  selectAllCompanies = false;
  showSelectedCompanies = false;
  searchValue: string="" ; 
  public data!: object[];
  selectAll = false;
  pageSize: number = 20;
  search: any;

  ngOnInit(): void {
    this.data = data.map((company, index) => ({ ...company, isSelected: false }));
    this.totalCompanies = this.data.length;
    this.checkboxes = new Array(this.data.length).fill(false);
    this.data = data.map((company, index) => ({ ...company, isSelected: false }));
    this.totalCompanies = this.data.length;
    this.onGridSearch("");
  }

  onCheckboxChange(event: any, index: number): void {
    (this.data[index] as any)['isSelected'] = event.target.checked;
    this.updateSelectedCompaniesCount();
  }

  onSelectAllChange(event: any): void {
    this.selectAllCompanies = event.target.checked;
    
    if (this.checkboxes) { 
      this.checkboxes.fill(this.selectAllCompanies, 0, this.data.length);
    }

    this.data.forEach((company: any, index) => {
      company['isSelected'] = this.selectAllCompanies;
    });
    this.updateSelectedCompaniesCount();
  }

  updateSelectedCompaniesCount(): void {
    this.selectedCompanies = this.data.filter((company: any) => company.isSelected).length;
  }

  onGridSearch(searchValue: string) {
    this.grid.search(searchValue);
  }
}
