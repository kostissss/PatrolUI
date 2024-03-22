import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { GridModule, SearchService, Toolbar, ToolbarService, PagerModule  } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { AppRoutingModule }  from './app-routing.module'; 
import { HttpClientModule }  from '@angular/common/http';
import { ToolbarItem } from '@syncfusion/ej2-grids';





@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    FormsModule,
    GridModule,
    PagerModule,
    BrowserModule,
    CheckBoxModule,
    ToolbarModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  //providers: [],
  bootstrap: [AppComponent],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,SearchService, ToolbarService]
})
export class AppModule { }
