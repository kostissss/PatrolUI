import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';




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
    BrowserModule
    //TextBoxModule
    
  ],
  //providers: [],
  bootstrap: [AppComponent],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,SearchService, ToolbarService]
})
export class AppModule { }
