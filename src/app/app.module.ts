import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CreatePartnerAccountModalComponent } from './components/create-partner-account-modal/create-partner-account-modal.component';
import { FormsModule } from '@angular/forms';
import { FormsDirectiveDirective } from './forms-directive.directive';
import {CheckBoxModule} from '@syncfusion/ej2-angular-buttons';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
import { CreateNewAccountComponent } from './components/create-new-account/create-new-account.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent,
    CreatePartnerAccountModalComponent,
    FormsDirectiveDirective,
    CreateNewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    FormsModule,
    CheckBoxModule,
    DropDownListModule,
    DateTimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }