import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

import { GridModule, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTableComponent,
    ToolBarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GridModule,
    ButtonModule

  ],
  providers: [SearchService, ToolbarService],
  bootstrap: [AppComponent]
})

export class AppModule { }
