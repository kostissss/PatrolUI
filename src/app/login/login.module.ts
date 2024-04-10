import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from '../inrerceptors/auth-token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthTokenInterceptor,multi:true}]
})
export class LoginModule { }
