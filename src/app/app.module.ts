import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { TableImageComponent } from './shared/components/table-image/table-image.component';
import { TableTitleComponent } from './shared/components/table-title/table-title.component';
import { ToolbarPanelComponent } from './shared/components/toolbar-panel/toolbar-panel.component';
import { AgGridComponent } from './shared/components/ag-grid/ag-grid.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreReducers } from './store/store.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TableImageComponent,
    TableTitleComponent,
    ToolbarPanelComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([TableImageComponent, TableTitleComponent, ToolbarPanelComponent]),
    HttpClientModule,
    StoreModule.forRoot({storeInterface: StoreReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
