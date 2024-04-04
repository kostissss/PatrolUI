  
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  ToolbarItem,
  PageSettingsModel,
  SearchSettingsModel,
  ToolbarItems,
  //GridComponent,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})


export class GridComponent implements OnInit {
  @ViewChild('grid') grid!: GridComponent;
  public toolbarOptions?: ToolbarItems[] | object;

  public pageSettings: PageSettingsModel = {
    pageSize: 20, // Set your desired page size
  };

  public searchSettings: SearchSettingsModel = {
    fields: ['CompanyID', 'CompanyName', 'UserName', 'Email', 'PatrolLicences'], // Add searchable fields
    key: 'contains', // Search type (e.g., 'startsWith', 'endsWith', 'contains')
  };

  checkboxes: boolean[] = [];
  totalCompanies = 0;
  selectedCompanies = 0;
  selectAllCompanies = false;
  showSelectedCompanies = false;
  searchValue: string="" ; // Fix: Change the type to string


  public data!: object[];

  selectAll = false;
  pageSize: number = 20;
  search: any;

  ngOnInit(): void {


    this.data = data.map((company, index) => ({ ...company, isSelected: false }));
    this.totalCompanies = this.data.length;
    this.checkboxes = new Array(this.data.length).fill(false); // Initialize checkboxes array


    this.data = data.map((company, index) => ({ ...company, isSelected: false }));
    this.totalCompanies = this.data.length;
    
    this.onGridSearch(""); // Perform search using grid instance
  }

  onCheckboxChange(event: any, index: number): void {
    (this.data[index] as any)['isSelected'] = event.target.checked;
    this.updateSelectedCompaniesCount();
  }

  onSelectAllChange(event: any): void {
    this.selectAllCompanies = event.target.checked;

    // Update checkboxes array (optional, for visual consistency)
    if (this.checkboxes) { // Check if checkboxes array is initialized
      this.checkboxes.fill(this.selectAllCompanies, 0, this.data.length);
    }

    // Update data and selected companies count
    this.data.forEach((company: any, index) => {
      company['isSelected'] = this.selectAllCompanies;
    });
    this.updateSelectedCompaniesCount();
  }

  updateSelectedCompaniesCount(): void {
    this.selectedCompanies = this.data.filter((company: any) => company.isSelected).length;
  }

  onGridSearch(searchValue: string) {
    this.grid.search(searchValue); // Perform search using grid instance
  }

}
