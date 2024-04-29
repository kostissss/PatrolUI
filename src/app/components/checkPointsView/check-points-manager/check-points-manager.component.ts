import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {
  ToolbarItems,
  EditSettingsModel,
  SelectionSettingsModel,
  GridComponent,
  CheckBoxChangeEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { CheckPointService } from '../../../services/check-point.service';
import { CheckPoint } from '../../../interfaces/checkPoint';
import { WarningDialogComponent } from '../../dialogs/warning-dialog/warning-dialog.component';
import { checkBoxPosition } from '@syncfusion/ej2-angular-lists';
import { QRCodeDialogComponent } from '../../dialogs/qrcode-dialog/qrcode-dialog.component';
import { GeneratePointsDialogComponent } from '../../dialogs/generate-points-dialog/generate-points-dialog.component';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Message } from '../../../interfaces/message';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-check-points-manager',
  templateUrl: './check-points-manager.component.html',
  styleUrl: './check-points-manager.component.css',
})
export class CheckPointsManagerComponent implements OnInit {
  public buttonStatus: boolean = true;
  public data: CheckPoint[] = [];
  public editSettings?: EditSettingsModel;
  public checkPointCount: number = 0;
  public selectionOptions?: SelectionSettingsModel;
  public toolbar?: ToolbarItems[] | object;
  wrapOption = { wrapMode: 'Header' };
  public selectedCheckPoint: CheckPoint = {} as CheckPoint;

  @ViewChild('grid')
  public grid!: GridComponent;

  @ViewChild(WarningDialogComponent)
  public warningDialog!: WarningDialogComponent;

  @ViewChild(QRCodeDialogComponent)
  public qrCodeDialog!: QRCodeDialogComponent;

  @ViewChild(GeneratePointsDialogComponent)
  public generatePointsDialog!: GeneratePointsDialogComponent;

  constructor(
    private checkPointService: CheckPointService,
    private authService: AuthServiceService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.checkPointService.data$.subscribe((data) => {
      this.data = data;

      this.checkPointCount = this.data?.length;
      (this.grid as GridComponent)?.toolbarModule.enableItems(
        ['Generate'],
        true,
      );
    });

    this.selectionOptions = { mode: 'Row', type: 'Single' };
    this.editSettings = { allowDeleting: true, mode: 'Dialog' };
    this.toolbar = [
      { prefixIcon: 'e-refresh' },
      {
        text: 'Generate Points',
        tooltipText: 'Add',
        id: 'Generate',
        disabled: true,
      },
      {
        text: 'View QR-Code',
        tooltipText: 'QR-Code',
        id: 'QR',
        disabled: true,
      },
      { text: 'Remove', tooltipText: 'Remove', id: 'Remove', disabled: true },
      { text: 'Assign', tooltipText: 'Assign', id: 'Assign', disabled: true },
      {
        text: 'Export To Excel',
        tooltipText: 'ExcelExport',
        id: 'ExcelExport',
        disabled: false,
      },
      'Search',
    ];
  }

  rowSelected(args: any) {
    
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
    if (args.item.id === 'ExcelExport') {
      (this.grid as GridComponent).excelExport();
    }
  }

  reloadPage() {
    window.location.reload();
  }

  onCancelClick() {
    this.checkPointService
      .getFilteredCheckPoints('userId', this.data[0].userId)
      .subscribe(
        (response) => {
          
          // this.buttonStatus = data.length === 0 ? true : false;
        },
        (error) => {
          
          alert('Failed to fetch checkPoint');
        },
      );
  }
  onDeletedCheckBoxChange() {
    this.buttonStatus = false;
    this.data.forEach((CheckPoint) => {
      if (CheckPoint.checkPointId === this.selectedCheckPoint.checkPointId) {
        CheckPoint.isDeleted = !CheckPoint.isDeleted;
        if (CheckPoint.isDeleted) {
          CheckPoint.deletedDate = new Date();
        } else {
          CheckPoint.deletedDate = null;
        }
      }
    });
    
  }
  onLockedCheckBoxChange() {
    this.buttonStatus = false;
    this.data.forEach((CheckPoint) => {
      if (CheckPoint.checkPointId === this.selectedCheckPoint.checkPointId) {
        CheckPoint.isLocked = !CheckPoint.isLocked;
      }
    });
    
  }

  onSaveClick() {
    this.checkPointService.updateMultipleCheckPoints(this.data).subscribe(
      (response) => {
        
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:"CheckPoints updated succesfully!",style:"success",id:id};
        this.toastService.sendMessage(toast);
        this.buttonStatus = true;
      },
      (error) => {
        
        let id =this.toastService.getCurrentId();
        const toast:Message= {message:"Failed to update checkPoints!",style:"danger",id:id};
        this.toastService.sendMessage(toast);
      },
    );
  }

  onCheckBoxChange(args: any): void {
    if (args.selectedRowIndexes.length > 0) {
      (this.grid as GridComponent)?.toolbarModule.enableItems(
        ['Remove', 'Assign'],
        true,
      );

      if (args.selectedRowIndexes.length === 1) {
        (this.grid as GridComponent)?.toolbarModule.enableItems(['QR'], true);
      } else {
        (this.grid as GridComponent)?.toolbarModule.enableItems(['QR'], false);
      }
    } else {
      (this.grid as GridComponent)?.toolbarModule.enableItems(
        ['Remove', 'Assign', 'QR'],
        false,
      );
    }
  }

  onGenerateClick() {
    this.generatePointsDialog.onOpenDialog(event);
  }
  onQRClick() {
    this.qrCodeDialog.onOpenDialog(
      this.selectedCheckPoint.checkPointId.toString(),
    );
  }
  onRemoveClick() {
    const selectedRecords = this.grid.getSelectedRecords() as CheckPoint[];
    ;
    this.data.forEach((CheckPoint) => {
      if (selectedRecords.includes(CheckPoint)) {
        CheckPoint.isDeleted = true;
        CheckPoint.deletedDate = new Date();
        
      }
    });

    this.warningDialog.onOpenDialog(event);

    
  }
  onAssignClick() {
    alert('Assign');
  }

  onDialogClick(event: any) {
    
    if (event) {
      this.onSaveClick();
    }
  }

  rowDataBound(args: any) {
    

    if ((args.data as CheckPoint).isDeleted === true) {
      (args.row as Element).classList.add('deletedCheckPoint');
    }
  }

  bulkCreatePoints(event: any) {
    let checkPointsToCreate: CheckPoint[] = [];
    for (let i = 0; i < event; i++) {
      let checkPoint: CheckPoint = {} as CheckPoint;

      checkPoint.checkPoint = 'CheckPoint ' + (this.checkPointCount + i + 1);
      checkPoint.clientSiteCode = this.checkPointCount + i + 1;
      checkPoint.checkPointCode = 'CP' + (this.checkPointCount + i + 1);
      checkPoint.isDeleted = false;
      checkPoint.isLocked = false;
      checkPoint.deletedDate = null;
      checkPoint.userId = this.data[0].userId;
      checkPointsToCreate.push(checkPoint);
    }
    
    this.checkPointService.bulkCreateCheckPoints(checkPointsToCreate).subscribe(
      (response) => {
       
        alert('CheckPoints created successfully');
      },
      (error) => {
        
        alert('Failed to create CheckPoints');
      },
    );
  }
}
