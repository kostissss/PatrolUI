import { Component, ViewChild, OnInit } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-notifheader',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' 
})
export class NotifHeaderComponent implements OnInit {

<<<<<<< HEAD
  @ViewChild('dropdownlist', { static: true })
  public dropdownlist!: DropDownListComponent;
=======
  //@ViewChild('dropdownlist', { static: true }) dropdownlist: DropDownListComponent;
>>>>>>> 20b2f1720766e67497c734a62420fa1011e4268e

  constructor() {
  }
  public data: string[] = ['Show All', 'Show only templates', 'Show only notifications'];

  ngOnInit(): void {
<<<<<<< HEAD

=======
    //this.dropdownlist.value = this.dropdownlist.dataSource[0];
>>>>>>> 20b2f1720766e67497c734a62420fa1011e4268e
  }

}
