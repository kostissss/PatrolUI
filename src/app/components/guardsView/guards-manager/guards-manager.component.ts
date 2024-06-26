import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { GuardsService } from '../../../services/guards.service';
import { Guard } from '../../../interfaces/guard';
import { ToastService } from '../../../services/toast.service';
import { Message } from '../../../interfaces/message';



@Component({
  selector: 'app-guards-manager',
  templateUrl: './guards-manager.component.html',
  styleUrl: './guards-manager.component.css'
})
export class GuardsManagerComponent implements OnInit {
  public buttonStatus : boolean = true;
  public data: Guard[]=[];
  public editSettings?: EditSettingsModel;
  public guardsCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;
  wrapOption = { wrapMode: 'Header' };
  public selectedGuard: Guard = {} as Guard;
  public originalData: Guard[] = [];

  @ViewChild('grid')
  public grid!: GridComponent;


  constructor(private dialog: MatDialog,private guardsService: GuardsService,private toastService:ToastService) { }

  ngOnInit(): void {
    this.guardsService.data$.subscribe(data => {
      this.data = data;
      this.originalData = data;
      this.guardsCount =  this.data?.length;
      (this.grid as GridComponent)?.toolbarModule.enableItems(['Generate' ], true);
      
    });
    
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Generate Guards', tooltipText: 'Add', id: 'Generate', disabled: true},
      { text: 'Export To Excel', tooltipText: 'Edit', id: 'Export',disabled: false}, 
      'Search'
      
      
    ];
  }

  rowSelected() {
    this.selectedGuard = this.grid.getSelectedRecords()[0] as Guard;
   
 }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    if (args.item.id === 'Generate') {
      let id =this.toastService.getCurrentId();
      const toast:Message= {message:"Cannot Generate Guards for Demo Accounts!",style:"danger",id:id};
      console.log('adding',this.toastService.getMessages());
      this.toastService.sendMessage(toast);
    }
    
  }

  reloadPage() {
    window.location.reload();
  }

  onCancelClick(){
    this.guardsService.getFilteredGuards("userId",this.data[0].userId).subscribe((response) => {

      // this.buttonStatus = data.length === 0 ? true : false;
      
    }
    ,(error) => {

      let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Failed to fetch guards!",style:"danger",id:id};
        this.toastService.sendMessage(toast);
        
    });

  }
  onPttCheckBoxChange(){
    this.buttonStatus = false;
    this.data.forEach((guard) => {
      if (guard.GuardId === this.selectedGuard.GuardId) {
        
        guard.isPTT = !guard.isPTT; 
        
      }
    });
  }
  onPatrolCheckBoxChange(){
    this.buttonStatus = false;
    this.data.forEach((guard) => {
      
      if (guard.GuardId === this.selectedGuard.GuardId) {
        guard.isQrPatrol = !guard.isQrPatrol; 
      }
    });
  }

  onSaveClick(){
    
      
      this.guardsService.updateMultipleGuards(this.data).subscribe((response) => {
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Guards updated successfully!",style:"success",id:id};
        this.toastService.sendMessage(toast);
        
        this.buttonStatus = true;

      }
      ,(error) => {
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Failed to update guards!",style:"danger",id:id};
        this.toastService.sendMessage(toast);
      });
    
  }
}
