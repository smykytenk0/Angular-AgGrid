import { GridOptions } from 'ag-grid-community';
import { TableImageComponent } from '../table-image/table-image.component';
import { TableTitleComponent } from '../table-title/table-title.component';
import { ToolbarPanelComponent } from '../toolbar-panel/toolbar-panel.component';
import 'ag-grid-enterprise'

export const agGridOptionsConfig: GridOptions = {
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
  rowSelection: "multiple",
  rowMultiSelectWithClick: true,
}
