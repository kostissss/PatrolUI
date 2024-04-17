import { Component, ViewChild, OnInit, Input, viewChild } from '@angular/core';

@Component({
  selector: 'app-notifheader',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' 
})
export class NotifHeaderComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public icon: string = '';

  @Input() public showFilter: boolean = false;

  @Input() public showSearch: boolean = false;

  @Input( ) public filterValues: string[] = [];
  public searchInput: any;

  constructor() {
  }
  public data: string[] = ['Show All', 'Show only templates', 'Show only notifications'];

  ngOnInit(): void {

  }

}
