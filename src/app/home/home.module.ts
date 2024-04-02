import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule } from '@angular/forms';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientModule } from '@angular/common/http';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AccordionModule, MenuModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CreateNewAccountComponent } from '../components/dialogs/create-new-account/create-new-account.component';
import { CreatePartnerAccountModalComponent } from '../components/dialogs/create-partner-account-modal/create-partner-account-modal.component';
import { ManagePartnerAccountModalComponent } from '../components/dialogs/manage-partner-account-modal/manage-partner-account-modal.component';
import { AccountsDropDownButtonComponent } from '../dropdowns/accounts-drop-down-button/accounts-drop-down-button.component';
import { SettingsDropDownButtonsComponent } from '../dropdowns/settings-drop-down-buttons/settings-drop-down-buttons.component';
import { HelpDropDownButtonComponent } from '../dropdowns/help-drop-down-button/help-drop-down-button.component';
import { AccountChangeDropDownComponent } from '../dropdowns/account-change-drop-down/account-change-drop-down.component';
import { ChangeUsernameDialogComponent } from '../components/dialogs/change-username-dialog/change-username-dialog.component';
import { ChangeLanguageDialogComponent } from '../components/dialogs/change-language-dialog/change-language-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CreateNewAccountComponent,
    ManagePartnerAccountModalComponent,
    AccountsDropDownButtonComponent,
    //HeaderComponent,
    SettingsDropDownButtonsComponent,
    HelpDropDownButtonComponent,
    AccountChangeDropDownComponent,
    ChangeUsernameDialogComponent,
    ChangeLanguageDialogComponent,
    CreatePartnerAccountModalComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    //BrowserModule,
    //AppRoutingModule,
    DialogModule,
    FormsModule,
    CheckBoxModule,
    DropDownListModule,
    DateTimePickerModule,
    HttpClientModule,
    DropDownButtonModule,
    MenuModule,
    ListViewModule,
    AccordionModule,
    SidebarModule,
  ]
})
export class HomeModule { }
