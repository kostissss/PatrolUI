import { Component, ViewChild, OnInit } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {

  @ViewChild('dropdownlist', { static: true }) dropdownlist: DropDownListComponent;

  constructor() {
  }
  public data: string[] = ['Show All', 'Show only templates', 'Show only notifications'];

  ngOnInit(): void {
    this.dropdownlist.value = this.dropdownlist.dataSource[0];
  }

}
