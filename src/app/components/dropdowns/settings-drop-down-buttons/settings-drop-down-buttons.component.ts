import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { AccountChangeDropDownComponent } from '../account-change-drop-down/account-change-drop-down.component';
import { AccountsService } from '../../../services/accounts.service';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-settings-drop-down-buttons',
  templateUrl: './settings-drop-down-buttons.component.html',
  styleUrl: './settings-drop-down-buttons.component.css'
})
export class SettingsDropDownButtonsComponent implements OnInit,OnDestroy{
  authSubscription: any;

  constructor(private authService: AuthServiceService) { }
  @ViewChild(AccountChangeDropDownComponent)
  public accountChangeDropdown!: AccountChangeDropDownComponent;
  @ViewChild('myDropD')
  public myDropDown!: DropDownButtonComponent;

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
      //debugger
      if (authResponse && authResponse.account) {
       
        this.accountName = authResponse.account.uname;
      } else {
        
       
      }
    });
  }


  ngOnDestroy(): void {
    
    this.authSubscription.unsubscribe();
  }
    
  
  public select(args: MenuEventArgs) {
    if (args.item.text === 'Account Settings') {
      //const event: any = null; // Pass any relevant event object here
      this.accountChangeDropdown.onOpen();
      this.myDropDown.toggle();
      this.myDropDown.toggle();
      // this.accountChangeDropdown.toggle();
    }
    if (args.item.text === 'Logout') {
      //const event: any = null; // Pass any relevant event object here
      this.authService.logOut().subscribe(

        (response) => {
          alert('Logged out successfully');
        },
        (error) => {
          alert('An error occurred during log out');
        }
      )
    
    }
  }
  

}
