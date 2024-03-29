import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

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
        text: 'About QR-Patrol Advanced Web App'
    }
    
  ];

  public select(args: MenuEventArgs) {
    if (args.item.text === 'Learning Center') {
      const event: any = null; // Pass any relevant event object here
      window.open('https://learning.qrpatrol.com/', '_blank');
    
    }
    if (args.item.text === 'Contact Us') {
      const event: any = null; // Pass any relevant event object here
      
    }
    if (args.item.text === 'About QR-Patrol Advanced Web App') {
      const event: any = null; // Pass any relevant event object here
      
    }
  }


}
