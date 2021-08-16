import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableImageComponent } from './shared/components/table-image/table-image.component';
import { TableTitleComponent } from './shared/components/table-title/table-title.component';
import { ToolbarPanelComponent } from './shared/components/toolbar-panel/toolbar-panel.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { environment } from '../environments/environment';
import { storeReducer } from './store/store.reducers';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([TableImageComponent, TableTitleComponent, ToolbarPanelComponent]),
    HttpClientModule,
    StoreModule.forRoot({store: storeReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
