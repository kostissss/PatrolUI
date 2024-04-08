import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsDirectiveDirective } from './forms-directive.directive';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import {  MenuModule } from '@syncfusion/ej2-angular-navigations';

import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { AccordionModule,SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { HomeModule } from './home/home.module';
import { AuthTokenInterceptor } from './inrerceptors/auth-token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { EditNotificationDialogComponent } from './NotificationGrid/data-table/edit-notification-dialog/edit-notification-dialog.component';
import { AssignToPartnersDialogComponent } from './NotificationGrid/data-table/assign-to-partners-dialog/assign-to-partners-dialog.component';

import { GridModule, SearchService, ToolbarService, SortService, PageService, EditService, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';



@NgModule({
  declarations: [
    AppComponent,
    EditNotificationDialogComponent,
    AssignToPartnersDialogComponent,
    FormsDirectiveDirective,
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
