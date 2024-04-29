import { Component, OnInit, SkipSelf, ViewChild } from '@angular/core';
import { AccountsService } from '../../../services/accounts.service';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { NgForm } from '@angular/forms';
import { EmitType } from '@syncfusion/ej2-base';
import { Account } from '../../../interfaces/account';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from '../../../services/toast.service';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent  {
  unameInput :string = '';
  passwordInput :string = '';
  invalidLogin :boolean = false;
  faUser = faUser;
  constructor( private authService: AuthServiceService,private router:Router,private toastService:ToastService) {

    console.log('Login Dialog Component');
   }

  onLoginSubmit() {
    let account : Account = {} as Account;
    account.uname = this.unameInput;
    account.password = this.passwordInput;
    
    
    this.authService.logIn(account).subscribe(
      (response ) => {
        //console.log(response);
        
        const toast:Message = { id: this.toastService.getCurrentId(), message: 'Login Successful', style: 'success' };
        this.toastService.sendMessage(toast);
        

        
      },
      (error) => {
        //debugger
        this.invalidLogin = true;
      }
     
    )
  }

  

}
