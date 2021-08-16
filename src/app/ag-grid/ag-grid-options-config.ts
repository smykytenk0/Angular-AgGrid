import { GridOptions } from 'ag-grid-community';
import 'ag-grid-enterprise'

import { TableImageComponent } from '../shared/components/table-image/table-image.component';
import { TableTitleComponent } from '../shared/components/table-title/table-title.component';
import { ToolbarPanelComponent } from '../shared/components/toolbar-panel/toolbar-panel.component';

export const AG_GRID_CONFIG: GridOptions = {
  statusBar: {
    statusPanels: [
      {
        statusPanel: 'toolbarPanelComponent',
        align: 'left'
      },
      {
        statusPanel: 'agSelectedRowCountComponent',
        align: 'right'
      },
      {
        statusPanel: 'agTotalRowCountComponent',
        align: 'right'
      }],
  },
  frameworkComponents: {
    tableImageComponent: TableImageComponent,
    tableTitleComponent: TableTitleComponent,
    toolbarPanelComponent: ToolbarPanelComponent
  },
  defaultColDef: {
    flex: 1,
    autoHeight: true,
    resizable: true,
  },
  rowSelection: 'multiple',
  rowMultiSelectWithClick: true,
}
