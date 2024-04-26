import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/headers/Mainheader/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AutoCompleteModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule, DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientModule } from '@angular/common/http';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AccordionModule, MenuModule, SidebarModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CreateNewAccountComponent } from '../components/dialogs/create-new-account/create-new-account.component';
import { CreatePartnerAccountModalComponent } from '../components/dialogs/create-partner-account-modal/create-partner-account-modal.component';
import { ManagePartnerAccountModalComponent } from '../components/dialogs/manage-partner-account-modal/manage-partner-account-modal.component';
import { AccountsDropDownButtonComponent } from '../components/dropdowns/accounts-drop-down-button/accounts-drop-down-button.component';
import { SettingsDropDownButtonsComponent } from '../components/dropdowns/settings-drop-down-buttons/settings-drop-down-buttons.component';
import { HelpDropDownButtonComponent } from '../components/dropdowns/help-drop-down-button/help-drop-down-button.component';
import { AccountChangeDropDownComponent } from '../components/dropdowns/account-change-drop-down/account-change-drop-down.component';
import { ChangeUsernameDialogComponent } from '../components/dialogs/change-username-dialog/change-username-dialog.component';
import { ChangeLanguageDialogComponent } from '../components/dialogs/change-language-dialog/change-language-dialog.component';
import { DataTableComponent } from '../NotificationGrid/data-table/data-table.component';
import { NotifHeaderComponent } from '../components/headers/blackHeader/header.component';
import { AddNotificationDialogComponent } from '../NotificationGrid/data-table/add-notification-dialog/add-notification-dialog.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { RouterModule } from '@angular/router';

import { SidebarMobileComponent } from '../components/sidebar/sidebar.component';
import { HtmlPreviewerDialogComponent } from '../components/dialogs/html-previewer-dialog/html-previewer-dialog.component';
import { NotifGridComponent } from '../NotificationGrid/shared/notifgrid/notifgrid.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { GuardsComponent } from '../components/guardsView/guards/guards.component';
import { GuardsManagerComponent } from '../components/guardsView/guards-manager/guards-manager.component';
import { CompaniesSelectorComponent } from '../components/guardsView/companies-selector/companies-selector.component';
import { AssignToPartnersDialogComponent } from '../NotificationGrid/data-table/assign-to-partners-dialog/assign-to-partners-dialog.component';
import { AssignGridComponent } from '../NotificationGrid/shared/assign-grid/assign-grid.component';
import { CompaniesComponent } from '../components/companies/companies.component';
import { ChangePlanComponent } from '../components/companies/change-plan/change-plan.component';
import { DetailsComponent } from '../components/companies/details/details.component';
import { InspectCompanyComponent } from '../components/companies/inspect-company/inspect-company.component';
import { ResetPasswordComponent } from '../components/companies/reset-password/reset-password.component';
import { CheckPointsComponent } from '../components/checkPointsView/check-points/check-points.component';
import { CheckPointsManagerComponent } from '../components/checkPointsView/check-points-manager/check-points-manager.component';
import { WarningDialogComponent } from '../components/dialogs/warning-dialog/warning-dialog.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QRCodeDialogComponent } from '../components/dialogs/qrcode-dialog/qrcode-dialog.component';


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
    DataTableComponent,
    NotifHeaderComponent,
    AddNotificationDialogComponent,
    NotifGridComponent,
    SidebarMobileComponent,
    HtmlPreviewerDialogComponent,
    NotificationsComponent,
    GuardsComponent,
    GuardsManagerComponent,
    CompaniesSelectorComponent,
    AssignToPartnersDialogComponent,
    AssignGridComponent,
    CompaniesComponent,
    ChangePlanComponent,
    DetailsComponent,
    InspectCompanyComponent,
    ResetPasswordComponent,
    CheckPointsComponent,
    CheckPointsManagerComponent,
    WarningDialogComponent,
    QRCodeDialogComponent
  
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
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    GridModule,
    ButtonModule,
    ToolbarModule,
    DatePickerAllModule,
    TimePickerModule,
    TextBoxModule,
    MultiSelectModule,
    AutoCompleteModule,
    FontAwesomeModule,
    PagerModule,
    SidebarModule,
    QRCodeModule
  ]
})
export class HomeModule { }
