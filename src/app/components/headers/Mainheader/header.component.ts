import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../../../services/accounts.service';
import { AuthServiceService } from '../../../services/auth-service.service';
import { SidebarMobileComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @ViewChild(SidebarMobileComponent) 
  public sidebar!: SidebarMobileComponent;
  constructor(private router:  Router,private authService: AuthServiceService) { }
  screenWidth: number = window.innerWidth;
  isMobile: boolean = false;


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


  setDialogSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) { // Adjust this breakpoint according to your requirements
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
    
      ngOnInit() {
          
          
          this.setDialogSize();
      }
}
