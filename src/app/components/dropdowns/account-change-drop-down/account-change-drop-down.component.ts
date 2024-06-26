import { Component, ViewChild } from '@angular/core';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { ChangeUsernameDialogComponent } from '../../dialogs/change-username-dialog/change-username-dialog.component';
import { ChangeLanguageDialogComponent } from '../../dialogs/change-language-dialog/change-language-dialog.component';

@Component({
  selector: 'app-account-change-drop-down',
  templateUrl: './account-change-drop-down.component.html',
  styleUrl: './account-change-drop-down.component.css'
})
export class AccountChangeDropDownComponent {
  @ViewChild('myDropDown')
  public myComp!: DropDownButtonComponent;

  @ViewChild(ChangeUsernameDialogComponent)
  public unameChangeDropdown!: ChangeUsernameDialogComponent;
  @ViewChild(ChangeLanguageDialogComponent)
  public langChangeDropdown!: ChangeLanguageDialogComponent;


  public items: ItemModel[] = [
    
    {
        text: 'Language Change',
        
        
    },
    {
      text: 'Username Change',  
      
      
  },
   {
    text: 'Date Format Change',
    
    
}, {
  text: 'Password Change',
  
  
},
    
  ];

  public onOpen(): void {
    try {
      
      this.myComp.toggle();
    } catch (error) {
      
    }
  }


  public select(args: MenuEventArgs) {
    if (args.item.text === 'Username Change') {
      const event: any = null; // Pass any relevant event object here
      this.unameChangeDropdown.onOpenDialog(event);
      
    }
    else if (args.item.text === 'Language Change') {
      const event: any = null; // Pass any relevant event object here
      this.langChangeDropdown.onOpenDialog(event);
      
    }
  }

}
