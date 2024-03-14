import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {
  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  

  ngOnInit(): void {
      this.data = data;
      this.toolbarOptions = ['Search'];
  }
}


