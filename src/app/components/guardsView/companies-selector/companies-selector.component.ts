import { Component, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { MyNotification, data } from '../../../NotificationGrid/shared/datasource';
import { AccountsService } from '../../../services/api-service.service';
import { Account } from '../../../interfaces/account';

@Component({
  selector: 'app-companies-selector',
  templateUrl: './companies-selector.component.html',
  styleUrl: './companies-selector.component.css'
})
export class CompaniesSelectorComponent {

  public data?: Account[];
  public editSettings?: EditSettingsModel;
  public notificationCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  

  @ViewChild('grid')
  public grid!: GridComponent;


  constructor(private accountsService:AccountsService) { }

  ngOnInit(): void {
    this.fetchCompanyAccounts();
    
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    
  }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    if (args.item.id === 'Add') {
      
    }
    if (args.item.id === 'Edit') { 
     
    }
    if (args.item.id === 'Assign') {
      
    }
    if (args.item.id === 'Delete') { 
      var selectedRecord = this.grid.getSelectedRecords()[0];
      this.grid.deleteRecord(selectedRecord as string);
    }
  }

  reloadPage() {
    window.location.reload();
  }

  

  

  
  onItemClick(){
    var selectedRecord = this.grid.getSelectedRecords()[0];
    (this.grid as GridComponent).toolbarModule.enableItems(['Edit','Delete','Assign' ], true); // Disable toolbar items.
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
