import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsDirectiveDirective } from './forms-directive.directive';
import { HomeModule } from './home/home.module';
import { AuthTokenInterceptor } from './inrerceptors/auth-token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefreshTokenInterceptor } from './inrerceptors/refresh-token.interceptor';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { AccordionModule,SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { EditNotificationDialogComponent } from './NotificationGrid/data-table/edit-notification-dialog/edit-notification-dialog.component';
import { GridModule, SearchService, ToolbarService, SortService, PageService, EditService, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true
    }
  
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
