import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel, SearchSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {

  totalCompanies = 0;
  selectedCompanies = 0;

  public toolbarOptions?: ToolbarItems[];
  public searchOptions?: SearchSettingsModel;
  public data?: object[];
  public pageSettings?: PageSettingsModel;

  



    

    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSize: 6 };
        this.searchOptions = { fields: ['CompanyID'], operator: 'contains', key: 'Ha', ignoreCase: true, ignoreAccent:true };
        this.toolbarOptions = ['Search'];    
        this.totalCompanies = this.data.length;
    }

    

}
