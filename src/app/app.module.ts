import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DataTableComponent } from './data-table/data-table.component';

import { GridModule, SearchService, ToolbarService, SortService, PageService, EditService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { AddNotificationDialogComponent } from './data-table/add-notification-dialog/add-notification-dialog.component';
import { EditNotificationDialogComponent } from './data-table/edit-notification-dialog/edit-notification-dialog.component';
import { AssignToPartnersDialogComponent } from './data-table/assign-to-partners-dialog/assign-to-partners-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTableComponent,
    AddNotificationDialogComponent,
    EditNotificationDialogComponent,
    AssignToPartnersDialogComponent,
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
    AutoCompleteModule

  ],
  providers: [
    SearchService,
    ToolbarService, 
    SortService,
    EditService,
    PageService
  
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
