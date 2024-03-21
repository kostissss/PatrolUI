import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel, SearchSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {

  
  checkboxes: boolean[] = [];
  totalCompanies = 0;
  selectedCompanies = 0;
  selectAllCompanies = false;
  showSelectedCompanies = false;
  public toolbar?: ToolbarItems[];


  //public toolbarOptions?: ToolbarItems[];
  public searchOptions?: SearchSettingsModel;
  public data?: object[];
  public pageSettings?: PageSettingsModel;


  selectAll = false;
  grid: any;
  pageSize: number = 20;

    ngOnInit(): void {
      this.data = data.map((company, index) => ({ ...company, isSelected: false }));

      this.data = data;
      this.pageSettings = { pageSize: 6 };
      this.searchOptions = { fields: ['CompanyID'], operator: 'contains', key: 'Ha', ignoreCase: true, ignoreAccent:true};   
      this.totalCompanies = this.data.length;
      this.pageSettings = { pageSize: this.pageSize };

    }

    onCheckboxChange(event: any, index: number): void {
      this.data[index]['isSelected'] = event.target.checked; // Update isSelected property in the data array
      this.updateSelectedCompaniesCount(); // Update the count of selected companies
    }
  
    onSelectAllChange(event: any): void {
      this.selectAllCompanies = event.target.checked;
      this.data.forEach((company, index) => {
        this.checkboxes[index] = this.selectAllCompanies; // Update the checkboxes array
        company['isSelected'] = this.selectAllCompanies; // Update isSelected property in the data array
      });
      this.updateSelectedCompaniesCount(); // Update the count of selected companies
    }
  
    updateSelectedCompaniesCount(): void {
      this.selectedCompanies = this.data.filter((company: any) => company.isSelected).length;
    }


    onPageSizeChange(event: any): void {
      this.pageSize = parseInt(event.target.value);
      this.pageSettings.pageSize = this.pageSize;
    }
  
}
