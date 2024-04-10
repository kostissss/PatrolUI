import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { SidebarMobileComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild(SidebarMobileComponent) 
  public sidebar!: SidebarMobileComponent;
  constructor(private router:  Router,private authService: AuthServiceService) { }
  screenWidth: number = window.innerWidth;


  public redirectOnHome(){
    this.router.navigate(['/']);
  }
  public refreshClicked(){
    this.authService.refreshToken().subscribe((response) => {
      console.log(response);
    });
  }
  public toggleSidebar(){
    this.sidebar.toggleClick();
  }
}
