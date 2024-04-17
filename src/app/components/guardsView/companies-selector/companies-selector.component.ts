import { Component, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

import { AccountsService } from '../../../services/accounts.service';
import { Account } from '../../../interfaces/account';
import { GuardsService } from '../../../services/guards.service';
import { NotifHeaderComponent } from '../../../NotificationGrid/header/header.component';

interface gridRecord{
  id: number,
  uname: string,
  email: string
}

@Component({
  selector: 'app-companies-selector',
  templateUrl: './companies-selector.component.html',
  styleUrl: './companies-selector.component.css'
})
export class CompaniesSelectorComponent {

  public data?: Account[];
  public editSettings?: EditSettingsModel;
  public selectedCompanyId: number = 0;
  public selectedRecords: gridRecord = {} as gridRecord;

  @ViewChild('grid')
  public grid!: GridComponent;

  @ViewChild(NotifHeaderComponent)
  public notifHeader!: NotifHeaderComponent;


  constructor(private accountsService: AccountsService, private guardsService: GuardsService) { }

  ngOnInit(): void {
    this.fetchCompanyAccounts();
    
   
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    
  }

 

  

  
  rowSelected() {
     this.selectedRecords = this.grid.getSelectedRecords()[0] as gridRecord;
    console.log(this.selectedRecords);
    this.selectedCompanyId = this.selectedRecords.id ;
    console.log(this.selectedCompanyId);
    this.fetchGuards();
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

  fetchGuards(){
    this.guardsService.getFilteredGuards("userId",this.selectedCompanyId).subscribe((response) => {
      console.log(response);
      

    }
    ,(error) => {
      console.log(error);
      alert("Failed to fetch guards");
    });


    
  }


  search(): void {
     
        (this.grid as GridComponent).search(this.notifHeader.searchInput.toString());
      }
    
  

}
