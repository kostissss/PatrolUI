import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { NgForm } from '@angular/forms';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent  {
  unameInput :string = '';
  passwordInput :string = '';

  constructor(private apiService: ApiServiceService) { }

  

}
