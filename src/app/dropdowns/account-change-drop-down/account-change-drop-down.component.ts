import { Component, ViewChild } from '@angular/core';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-account-change-drop-down',
  templateUrl: './account-change-drop-down.component.html',
  styleUrl: './account-change-drop-down.component.css'
})
export class AccountChangeDropDownComponent {
  @ViewChild('myDropDown')
  public myComp!: DropDownButtonComponent;


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
      console.log("Dropdown opened");
      this.myComp.toggle();
    } catch (error) {
      console.log(error);
    }
  }

}
