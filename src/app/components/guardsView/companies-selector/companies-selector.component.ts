import { Component, Input, ViewChild } from '@angular/core';
import { DataStateChangeEventArgs, EditSettingsModel, GridComponent, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

import { AccountsService } from '../../../services/accounts.service';
import { Account } from '../../../interfaces/account';
import { GuardsService } from '../../../services/guards.service';
import { NotifHeaderComponent } from '../../headers/blackHeader/header.component';
import { Observable } from 'rxjs';
import { CheckPointService } from '../../../services/check-point.service';
import { Message } from '../../../interfaces/message';
import { ToastService } from '../../../services/toast.service';

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


  constructor(  private guardsService: GuardsService, private accountsService: AccountsService,private checkPointService: CheckPointService,private toastService:ToastService) {
        
    this.data = accountsService;
}

  public dataStateChange(state: DataStateChangeEventArgs): void {
    //debugger
    
    this.accountsService.execute(state, this.grid);
}

public ngOnInit(): void {
    
    let state = { skip: 0, take: 3 };
    this.accountsService.execute(state, this.grid);
}
  
 

  

  
  rowSelected() {
     this.selectedRecords = this.grid.getSelectedRecords()[0] as gridRecord;
    
    this.selectedCompanyId = this.selectedRecords.id ;
    
    if(this.fetchEntity === "guard"){
      this.fetchGuards();
    }
    else if(this.fetchEntity === "checkPoint"){
      this.fetchCheckPoints();
    }
  }
  


  fetchGuards(){
    this.guardsService.getFilteredGuards("userId",this.selectedCompanyId).subscribe((response) => {
      
      

    }
    ,(error) => {
      
      let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Failed to fetch Guards",style:"danger",id:id};
        this.toastService.sendMessage(toast);
        
    });


    
  }

  fetchCheckPoints(){
    this.checkPointService.getFilteredCheckPoints("userId",this.selectedCompanyId).subscribe((response) => {
      
      

    }
    ,(error) => {
      
      let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Failed to fetch Checkpoints",style:"danger",id:id};
        this.toastService.sendMessage(toast);
        
    });
  }


  search(): void {
     
        (this.grid as GridComponent).search(this.notifHeader.searchInput.toString());
      }
    
  

}
