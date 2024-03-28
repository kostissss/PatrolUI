import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { NgForm } from '@angular/forms';
import { EmitType } from '@syncfusion/ej2-base';
import { Account } from '../../../interfaces/account';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
  constructor(private authService: AuthServiceService,private router:Router) { }

  onLoginSubmit() {
    let account : Account = {} as Account;
    account.uname = this.unameInput;
    account.password = this.passwordInput;
    console.log(account);
    this.authService.logIn(account).subscribe(
      (response ) => {
        console.log(response);
        alert('Logged In successfully');
        localStorage.setItem('Authtoken', response.authToken);
        this.router.navigateByUrl('/home');

        
      },
      (error) => {
        //debugger
        this.invalidLogin = true;
      }
     
    )
  }

  

}
