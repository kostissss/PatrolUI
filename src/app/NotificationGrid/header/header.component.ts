import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifheader',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' 
})
export class NotifHeaderComponent implements OnInit {

  constructor() {
  }
  public data: string[] = ['Show All', 'Show only templates', 'Show only notifications'];

  ngOnInit(): void {

  }

}
