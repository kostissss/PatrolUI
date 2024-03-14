import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CreatePartnerAccountModalComponent } from './components/dialogs/create-partner-account-modal/create-partner-account-modal.component';
import { FormsModule } from '@angular/forms';
import { FormsDirectiveDirective } from './forms-directive.directive';
import {CheckBoxModule} from '@syncfusion/ej2-angular-buttons';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
import { CreateNewAccountComponent } from './components/dialogs/create-new-account/create-new-account.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ManagePartnerAccountModalComponent } from './components/dialogs/manage-partner-account-modal/manage-partner-account-modal.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CreatePartnerAccountModalComponent,
    FormsDirectiveDirective,
    CreateNewAccountComponent,
    ManagePartnerAccountModalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    FormsModule,
    CheckBoxModule,
    DropDownListModule,
    DateTimePickerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
