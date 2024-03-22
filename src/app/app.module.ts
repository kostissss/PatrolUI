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
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AccountsDropDownButtonComponent } from './dropdowns/accounts-drop-down-button/accounts-drop-down-button.component';
import { Menu, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { HeaderComponent } from './components/header/header.component';
import { SettingsDropDownButtonsComponent } from './dropdowns/settings-drop-down-buttons/settings-drop-down-buttons.component';
import { HelpDropDownButtonComponent } from './dropdowns/help-drop-down-button/help-drop-down-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePartnerAccountModalComponent,
    FormsDirectiveDirective,
    CreateNewAccountComponent,
    ManagePartnerAccountModalComponent,
    AccountsDropDownButtonComponent,
    HeaderComponent,
    SettingsDropDownButtonsComponent,
    HelpDropDownButtonComponent,
    
    
    
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
    DropDownButtonModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
