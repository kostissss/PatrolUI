import { Component, Input, ViewChild } from '@angular/core';
import { DataStateChangeEventArgs, EditSettingsModel, GridComponent, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

import { AccountsService } from '../../../services/accounts.service';
import { Account } from '../../../interfaces/account';
import { GuardsService } from '../../../services/guards.service';
import { NotifHeaderComponent } from '../../headers/blackHeader/header.component';
import { Observable } from 'rxjs';
import { CheckPointService } from '../../../services/check-point.service';

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

  public data: Observable<DataStateChangeEventArgs>;
    public pageOptions: Object={ pageSize: 3 };
    public state: DataStateChangeEventArgs | undefined;
  public selectedCompanyId: number = 0;
  public selectedRecords: gridRecord = {} as gridRecord;
  private currentIndex: number = 0;

  public pageSettings: PageSettingsModel = {
    pageSize: 3, 
  };

  @ViewChild('grid')
  public grid!: GridComponent;

  @ViewChild(NotifHeaderComponent)
  public notifHeader!: NotifHeaderComponent;
  @Input() public fetchEntity: string = "";


  constructor(  private guardsService: GuardsService, private accountsService: AccountsService,private checkPointService: CheckPointService) {
        
    this.data = accountsService;
}

  public dataStateChange(state: DataStateChangeEventArgs): void {
    //debugger
    console.log("dataStateChange",state);
    this.accountsService.execute(state, this.grid);
}

public ngOnInit(): void {
    
    let state = { skip: 0, take: 3 };
    this.accountsService.execute(state, this.grid);
}
  
 

  

  
  rowSelected() {
     this.selectedRecords = this.grid.getSelectedRecords()[0] as gridRecord;
    console.log(this.selectedRecords);
    this.selectedCompanyId = this.selectedRecords.id ;
    console.log(this.selectedCompanyId);
    console.log(this.fetchEntity,"fefefefe");
    if(this.fetchEntity === "guard"){
      this.fetchGuards();
    }
    else if(this.fetchEntity === "checkPoint"){
      this.fetchCheckPoints();
    }
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

  fetchCheckPoints(){
    this.checkPointService.getFilteredCheckPoints("userId",this.selectedCompanyId).subscribe((response) => {
      console.log(response);
      

    }
    ,(error) => {
      console.log(error);
      alert("Failed to fetch checkPoint");
    });
  }


  search(): void {
     
        (this.grid as GridComponent).search(this.notifHeader.searchInput.toString());
      }
    
  

}
