import { Component, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

import { AccountsService } from '../../../services/accounts.service';
import { Account } from '../../../interfaces/account';

@Component({
  selector: 'app-companies-selector',
  templateUrl: './companies-selector.component.html',
  styleUrl: './companies-selector.component.css'
})
export class CompaniesSelectorComponent {

  public data?: Account[];
  public editSettings?: EditSettingsModel;
  

  

  @ViewChild('grid')
  public grid!: GridComponent;


  constructor(private accountsService:AccountsService) { }

  ngOnInit(): void {
    this.fetchCompanyAccounts();
    
   
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    
  }

 

  

  

  

  
  onItemClick(){
    var selectedRecord = this.grid.getSelectedRecords()[0];
    
  }

  fetchCompanyAccounts(){
    this.accountsService.getFilteredAccounts("role","admin").subscribe((response) => {
      this.data = response;
      
    },
    (error) =>{
      console.log(error);
      let accounts : Account []=[]
      return accounts;
    });
  }

}
