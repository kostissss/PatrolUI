import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ItemModel,MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { CreateNewAccountComponent } from '../../dialogs/create-new-account/create-new-account.component';
import { CreatePartnerAccountModalComponent } from '../../dialogs/create-partner-account-modal/create-partner-account-modal.component';
import { ManagePartnerAccountModalComponent } from '../../dialogs/manage-partner-account-modal/manage-partner-account-modal.component';
import { AccountsService } from '../../../services/accounts.service';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-accounts-drop-down-button',
  templateUrl: './accounts-drop-down-button.component.html',
  styleUrl: './accounts-drop-down-button.component.css'
})
export class AccountsDropDownButtonComponent implements OnInit{
  constructor(private authService:AuthServiceService) { }
  userRole: string = '';

  ngOnInit(): void {
    // this.accountService.getUserInfo().subscribe((response) => {
    //   this.userRole = response.role;
      
    //   if (this.isAdmin()){
    //     console.log('adminsdsds');
    //     this.items=   [
    
    //       {
    //           text: 'Create Account',
              
              
    //       },
    //       {
    //           text: 'Create Partner Account'
    //       },
    //       {
    //     text: 'Manage Partner'
    //   },
          
          
          
    //     ];
    //   }
    // });
    this.authService.authState$.subscribe(authResponse => {
      if (authResponse && authResponse.account) {
        this.userRole = authResponse.account.role;
        

        if (this.isAdmin()){
          
          this.items=   [
      
            {
                text: 'Create Account',
                
                
            },
            {
                text: 'Create Partner Account'
            },
            {
          text: 'Manage Partner'
        },
      ];
    
    
  }
      } else {
        
      }



    });

    
}
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


    public isAdmin(): boolean {
      return this.userRole === 'admin';
    }
    
  }


