import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems, EditSettingsModel, SelectionSettingsModel, GridComponent, CheckBoxChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { CheckPointService } from '../../../services/check-point.service';
import { CheckPoint } from '../../../interfaces/checkPoint';
import { WarningDialogComponent } from '../../dialogs/warning-dialog/warning-dialog.component';
import { checkBoxPosition } from '@syncfusion/ej2-angular-lists';
import { QRCodeDialogComponent } from '../../dialogs/qrcode-dialog/qrcode-dialog.component';


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

  @ViewChild(WarningDialogComponent)
  public warningDialog!: WarningDialogComponent;

  @ViewChild(QRCodeDialogComponent)
  public qrCodeDialog!: QRCodeDialogComponent;


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

  rowSelected(args: any) {
    console.log(args);
    this.selectedCheckPoint = args.data as CheckPoint;
    
   
 }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.prefixIcon === 'e-refresh') {
      this.reloadPage();
    }
    if (args.item.id === 'Generate') {
      this.onGenerateClick();
    }
    if (args.item.id === 'QR') { 
      this.onQRClick();
    }
    if (args.item.id === 'Remove') { 
      this.onRemoveClick();
    }
    if (args.item.id === 'Assign') { 
      this.onAssignClick();
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
    console.log(this.data,"check");
  }
  onLockedCheckBoxChange(){
    this.buttonStatus = false;
    this.data.forEach((CheckPoint) => {
      
      if (CheckPoint.checkPointId === this.selectedCheckPoint.checkPointId) {
        CheckPoint.isLocked = !CheckPoint.isLocked; 
      }
    });
    console.log(this.data,"check");
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

  onCheckBoxChange(args :any): void {
    if(args.selectedRowIndexes.length > 0){
      (this.grid as GridComponent)?.toolbarModule.enableItems(['Remove' ,'Assign'], true);

      if(args.selectedRowIndexes.length === 1){
        (this.grid as GridComponent)?.toolbarModule.enableItems(['QR'], true);
      }
      else{
        (this.grid as GridComponent)?.toolbarModule.enableItems(['QR'], false);
      
      }
    }
    else{
      (this.grid as GridComponent)?.toolbarModule.enableItems(['Remove' ,'Assign','QR'], false);
      
    }
  }

  onGenerateClick(){
    alert('Generate Points');
  }
  onQRClick(){
    
    this.qrCodeDialog.onOpenDialog(this.selectedCheckPoint.checkPointId.toString());
  }
  onRemoveClick(){
    const selectedRecords = this.grid.getSelectedRecords() as CheckPoint[];
    console.log(selectedRecords,"selectedRecords");
    this.data.forEach((CheckPoint) => {
      
      if (selectedRecords.includes(CheckPoint)) {
        CheckPoint.isDeleted = true;
        CheckPoint.deletedDate = new Date(); 
        console.log(CheckPoint, "changed");
      }
    });

    this.warningDialog.onOpenDialog(event);

    console.log(this.data,"this.data");
  }
  onAssignClick(){
    alert('Assign');
  }


  onDialogClick(event: any){
    console.log(event);
    if(event ){
      this.onSaveClick();
    }
    
  }

  rowDataBound(args: any){
    console.log(args);

    if ((args.data as CheckPoint).isDeleted===true ) {
      (args.row as Element).classList.add('deletedCheckPoint');
  }
    
  }



  
}
