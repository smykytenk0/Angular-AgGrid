import { NgModule } from '@angular/core';
import { TableImageComponent } from './components/table-image/table-image.component';
import { TableTitleComponent } from './components/table-title/table-title.component';
import { ToolbarPanelComponent } from './components/toolbar-panel/toolbar-panel.component';

@NgModule({
  declarations: [
    TableImageComponent,
    TableTitleComponent,
    ToolbarPanelComponent
  ],
  imports: []
})

export class SharedModule{}
