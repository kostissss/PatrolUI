import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { NgForm } from '@angular/forms';
import { EmitType } from '@syncfusion/ej2-base';
import { Account } from '../../../interfaces/account';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent  {
  unameInput :string = '';
  passwordInput :string = '';
  invalidLogin :boolean = false;

  constructor(private apiService: ApiServiceService) { }

  onLoginSubmit() {
    let account : Account = {} as Account;
    account.uname = this.unameInput;
    account.password = this.passwordInput;
    console.log(account);
    this.apiService.logIn(account).subscribe(
      (response ) => {
        console.log(response);
        alert('Logged In successfully');
        localStorage.setItem('token', response.authToken);
        
      },
      (error) => {
        //debugger
        this.invalidLogin = true;
      }
     
    )
  }

  

}
