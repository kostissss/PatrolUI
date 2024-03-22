import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ItemModel,MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { CreateNewAccountComponent } from '../../components/dialogs/create-new-account/create-new-account.component';
import { CreatePartnerAccountModalComponent } from '../../components/dialogs/create-partner-account-modal/create-partner-account-modal.component';
import { ManagePartnerAccountModalComponent } from '../../components/dialogs/manage-partner-account-modal/manage-partner-account-modal.component';

@Component({
  selector: 'app-accounts-drop-down-button',
  templateUrl: './accounts-drop-down-button.component.html',
  styleUrl: './accounts-drop-down-button.component.css'
})
export class AccountsDropDownButtonComponent {
  @ViewChild(CreateNewAccountComponent)
  public accountDialog!: CreateNewAccountComponent;

  @ViewChild(CreatePartnerAccountModalComponent)
  public partnerDialog!: CreatePartnerAccountModalComponent;

  @ViewChild(ManagePartnerAccountModalComponent)
  public managePartnerDialog!: ManagePartnerAccountModalComponent;

  public items: ItemModel[] = [
    
    {
        text: 'Create Account',
        
        
    },
    {
        text: 'Create Partner Account'
    },
    {
      text: 'Manage Partner'
    }
  ];

    public select(args: MenuEventArgs) {
      if (args.item.text === 'Create Account') {
        const event: any = null; // Pass any relevant event object here
        this.accountDialog.onOpenDialog(event);
      }
      if (args.item.text === 'Create Partner Account') {
        const event: any = null; // Pass any relevant event object here
        this.partnerDialog.onOpenDialog(event);
      }
      if (args.item.text === 'Manage Partner') {
        const event: any = null; // Pass any relevant event object here
        this.managePartnerDialog.onOpenDialog(event);
      }
    }
    
  }


