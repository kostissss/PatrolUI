import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginDialogComponent } from '../components/dialogs/login-dialog/login-dialog.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DialogModule,
    FormsModule
  ]
})
export class LoginModule { }
