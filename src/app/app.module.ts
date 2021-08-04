import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { TableImageComponent } from './table-image/table-image.component';
import { TableTitleComponent } from './table-title/table-title.component';
import { ToolbarPanelComponent } from './toolbar-panel/toolbar-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TableImageComponent,
    TableTitleComponent,
    ToolbarPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([TableImageComponent, TableTitleComponent, ToolbarPanelComponent]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
