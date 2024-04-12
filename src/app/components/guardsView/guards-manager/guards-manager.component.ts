import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { GuardsService } from '../../../services/guards.service';
import { Guard } from '../../../interfaces/guard';



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


  constructor(private dialog: MatDialog,private guardsService: GuardsService) { }

  ngOnInit(): void {
    this.guardsService.data$.subscribe(data => {
      this.data = data;
      this.originalData = data;
      this.guardsCount = this.data.length;
      (this.grid as GridComponent).toolbarModule.enableItems(['Generate' ], true);
      console.log(data);
      // this.buttonStatus = data.length === 0 ? true : false;
      
    });
    
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Generate Guards', tooltipText: 'Add', id: 'Generate', disabled: true},
      { text: 'Export To Excel', tooltipText: 'Edit', id: 'Export',disabled: false}, 
      
      
    ];
  }

  rowSelected() {
    this.selectedGuard = this.grid.getSelectedRecords()[0] as Guard;
   
 }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    
  }

  reloadPage() {
    window.location.reload();
  }

  onCancelClick(){
    this.guardsService.getFilteredGuards("userId",this.data[0].userId).subscribe((response) => {
     
      console.log(response);
      // this.buttonStatus = data.length === 0 ? true : false;
      
    }
    ,(error) => {
      console.log(error);
      alert("Failed to fetch guards");
    });

  }
  onPttCheckBoxChange(){
    this.buttonStatus = false;
    this.data.forEach((guard) => {
      if (guard.GuardId === this.selectedGuard.GuardId) {
        debugger
        guard.isPTT = !guard.isPTT; // Update some property of the guard
      }
    });
  }
  onPatrolCheckBoxChange(){
    this.buttonStatus = false;
    this.data.forEach((guard) => {
      if (guard.GuardId === this.selectedGuard.GuardId) {
        guard.isQrPatrol = !guard.isQrPatrol; // Update some property of the guard
      }
    });
  }

  onSaveClick(){
    
      
      this.guardsService.updateMultipleGuards(this.data).subscribe((response) => {
        console.log(response);
        alert('Guards updated successfully');
        this.buttonStatus = true;

      }
      ,(error) => {
        console.log(error);
        alert("Failed to update guards");
      });
    
  }
}
