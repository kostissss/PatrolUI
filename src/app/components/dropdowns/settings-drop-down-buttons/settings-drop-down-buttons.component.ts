import { Component,  OnInit, ViewChild } from '@angular/core';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { AccountChangeDropDownComponent } from '../account-change-drop-down/account-change-drop-down.component';
import { AccountsService } from '../../../services/accounts.service';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Message } from '../../../interfaces/message';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-settings-drop-down-buttons',
  templateUrl: './settings-drop-down-buttons.component.html',
  styleUrl: './settings-drop-down-buttons.component.css'
})
export class SettingsDropDownButtonsComponent implements OnInit{
  authSubscription: any;

  constructor(private authService: AuthServiceService,private toastService:ToastService) { }
  @ViewChild(AccountChangeDropDownComponent)
  public accountChangeDropdown!: AccountChangeDropDownComponent;
  

  public accountName: string = 'Account Name';

  public items: ItemModel[] = [
    
    {
        text: 'Account Settings',
        
        
    },
    {
        text: 'Logout'
    },
    
    
  ];

  ngOnInit(): void {
    this.authSubscription=this.authService.authState$.subscribe(authResponse => {
      
      if (authResponse && authResponse.account) {
       
        this.accountName = authResponse.account.uname;
        
      } else {
        
        
       
      }
    });
  }



  public select(args: MenuEventArgs) {
    if (args.item.text === 'Account Settings') {
      //const event: any = null; // Pass any relevant event object here
      this.accountChangeDropdown.onOpen();
      
      
      // this.accountChangeDropdown.toggle();
    }
    if (args.item.text === 'Logout') {
      //const event: any = null; // Pass any relevant event object here
      this.authService.logOut().subscribe(

        (response) => {
          const toast:Message = { id: this.toastService.getCurrentId(), message: 'Logout Succesfull', style: 'success' };
          this.toastService.sendMessage(toast);
        },
        (error) => {
          const toast:Message = { id: this.toastService.getCurrentId(), message: 'An error occurred during log out', style: 'danger' };
          this.toastService.sendMessage(toast);
        }
      )
    
    }
  }
  

}
