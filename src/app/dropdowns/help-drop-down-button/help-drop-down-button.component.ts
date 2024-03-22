import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-help-drop-down-button',
  templateUrl: './help-drop-down-button.component.html',
  styleUrl: './help-drop-down-button.component.css'
})
export class HelpDropDownButtonComponent {
  public items: ItemModel[] = [
    
    {
        text: 'Learning Center',
        
        
    },
    {
        text: 'Contact Us'
    }
    ,
    {
        text: 'About QR-Patrol Advanced Web App '
    }
    
  ];


}
