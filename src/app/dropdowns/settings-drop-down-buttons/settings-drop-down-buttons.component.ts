import { Component, ViewChild } from '@angular/core';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { AccountChangeDropDownComponent } from '../account-change-drop-down/account-change-drop-down.component';
import { ApiServiceService } from '../../services/api-service.service';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-settings-drop-down-buttons',
  templateUrl: './settings-drop-down-buttons.component.html',
  styleUrl: './settings-drop-down-buttons.component.css'
})
export class SettingsDropDownButtonsComponent {

  constructor(private authService: AuthServiceService) { }
  @ViewChild(AccountChangeDropDownComponent)
  public accountChangeDropdown!: AccountChangeDropDownComponent;
  @ViewChild('myDropD')
  public myDropDown!: DropDownButtonComponent;

  public items: ItemModel[] = [
    
    {
        text: 'Account Settings',
        
        
    },
    {
        text: 'Logout'
    },
    
    
  ];
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
