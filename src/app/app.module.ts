import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CreatePartnerAccountModalComponent } from './components/dialogs/create-partner-account-modal/create-partner-account-modal.component';
import { FormsDirectiveDirective } from './forms-directive.directive';
import { CreateNewAccountComponent } from './components/dialogs/create-new-account/create-new-account.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ManagePartnerAccountModalComponent } from './components/dialogs/manage-partner-account-modal/manage-partner-account-modal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { Menu, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { HeaderComponent } from './components/header/header.component';

import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { AccordionModule,SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ChangeUsernameDialogComponent } from './components/dialogs/change-username-dialog/change-username-dialog.component';
import { ChangeLanguageDialogComponent } from './components/dialogs/change-language-dialog/change-language-dialog.component';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { AuthTokenInterceptor } from './inrerceptors/auth-token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import { NotifHeaderComponent } from './NotificationGrid/header/header.component';
// import { DataTableComponent } from './NotificationGrid/data-table/data-table.component';
// import { AddNotificationDialogComponent } from './NotificationGrid/data-table/add-notification-dialog/add-notification-dialog.component';
import { EditNotificationDialogComponent } from './NotificationGrid/data-table/edit-notification-dialog/edit-notification-dialog.component';
import { AssignToPartnersDialogComponent } from './NotificationGrid/data-table/assign-to-partners-dialog/assign-to-partners-dialog.component';
// import { GridComponent } from './NotificationGrid/shared/grid/grid.component';

import { GridModule, SearchService, ToolbarService, SortService, PageService, EditService, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import {  FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { HtmlPreviewerDialogComponent } from './components/dialogs/html-previewer-dialog/html-previewer-dialog.component';







@NgModule({
  declarations: [
    AppComponent,
    // NotifHeaderComponent,
    // DataTableComponent,
    // AddNotificationDialogComponent,
    EditNotificationDialogComponent,
    AssignToPartnersDialogComponent,
    // GridComponent,
    FormsDirectiveDirective,
    HtmlPreviewerDialogComponent,
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    GridModule,
    ButtonModule,
    ToolbarModule,
    DropDownListModule,
    DatePickerAllModule,
    TimePickerModule,
    TextBoxModule,
    MultiSelectModule,
    AutoCompleteModule,
    DialogModule,
    CheckBoxModule,
    DateTimePickerModule,
    HttpClientModule,
    DropDownButtonModule,
    MenuModule,
    ListViewModule,
    AccordionModule,
    SidebarModule,
    HomeModule,
    FontAwesomeModule,
    PagerModule,
  ],
  providers: [
    SearchService,
    ToolbarService, 
    SortService,
    EditService,
    PageService,
    FilterService,
    GroupService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthTokenInterceptor,multi:true}
  
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
