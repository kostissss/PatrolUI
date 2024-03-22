import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-settings-drop-down-buttons',
  templateUrl: './settings-drop-down-buttons.component.html',
  styleUrl: './settings-drop-down-buttons.component.css'
})
export class SettingsDropDownButtonsComponent {

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

}
