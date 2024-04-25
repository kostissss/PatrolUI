import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { CheckPointService } from '../../../services/check-point.service';
import { CheckPoint } from '../../../interfaces/checkPoint';


@Component({
  selector: 'app-check-points-manager',
  templateUrl: './check-points-manager.component.html',
  styleUrl: './check-points-manager.component.css'
})
export class CheckPointsManagerComponent implements OnInit {
  public buttonStatus : boolean = true;
  public data: CheckPoint[]=[];
  public editSettings?: EditSettingsModel;
  public checkPointCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;
  wrapOption = { wrapMode: 'Header' };
  public selectedCheckPoint: CheckPoint = {} as CheckPoint;
  public originalData: CheckPoint[] = [];

  @ViewChild('grid')
  public grid!: GridComponent;


  constructor(private dialog: MatDialog,private checkPointService: CheckPointService) { }

  ngOnInit(): void {
    this.checkPointService.data$.subscribe(data => {
      this.data = data;
      this.originalData = data;
      this.checkPointCount =  this.data?.length;
      (this.grid as GridComponent)?.toolbarModule.enableItems(['Generate' ], true);
      console.log(data);
      // this.buttonStatus = data.length === 0 ? true : false;
      
    });
    
    this.selectionOptions = { mode: 'Row',  type: 'Single' };
    this.editSettings = {allowDeleting: true, mode: 'Dialog',};
    this.toolbar = [
      { prefixIcon: 'e-refresh'},
      { text: 'Generate Points', tooltipText: 'Add', id: 'Generate', disabled: true},
      { text: 'View QR-Code', tooltipText: 'QR-Code', id: 'QR', disabled: true},
      { text: 'Remove', tooltipText: 'Remove', id: 'Remove', disabled: true},
      { text: 'Assign', tooltipText: 'Assign', id: 'Assign', disabled: true},
      { text: 'Export To Excel', tooltipText: 'Edit', id: 'Export',disabled: false}, 
      'Search'
      
      
    ];
  }

  rowSelected() {
    this.selectedCheckPoint = this.grid.getSelectedRecords()[0] as CheckPoint;
   
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
    this.checkPointService.getFilteredCheckPoints("userId",this.data[0].userId).subscribe((response) => {
     
      console.log(response);
      // this.buttonStatus = data.length === 0 ? true : false;
      
    }
    ,(error) => {
      console.log(error);
      alert("Failed to fetch checkPoint");
    });

  }
  onDeletedCheckBoxChange(){
    this.buttonStatus = false;
    this.data.forEach((CheckPoint) => {
      if (CheckPoint.checkPointId === this.selectedCheckPoint.checkPointId) {
        
        CheckPoint.isDeleted = !CheckPoint.isDeleted; 
        if(CheckPoint.isDeleted){
          CheckPoint.deletedDate = new Date();
        }
        else{
          CheckPoint.deletedDate = null;
        }
        
      }
    });
  }
  onLockedCheckBoxChange(){
    this.buttonStatus = false;
    this.data.forEach((CheckPoint) => {
      
      if (CheckPoint.checkPointId === this.selectedCheckPoint.checkPointId) {
        CheckPoint.isLocked = !CheckPoint.isLocked; 
      }
    });
  }

  onSaveClick(){
    
      
       this.checkPointService.updateMultipleCheckPoints(this.data).subscribe((response) => {
         console.log(response);
         alert('checkPoint updated successfully');
         this.buttonStatus = true
       }
       ,(error) => {
         console.log(error);
         alert("Failed to update checkPoint");
       });
    
  }
}
