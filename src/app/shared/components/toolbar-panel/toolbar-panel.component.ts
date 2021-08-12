import { Component } from '@angular/core';

import { columnDefsWithoutSelection, columnDefsWithSelection } from '../../constants/contextMenuItems.constants';
import { AgGridService } from '../../services/ag-grid.service';

@Component({
  selector: 'app-toolbar-panel',
  templateUrl: './toolbar-panel.component.html',
  styleUrls: ['./toolbar-panel.component.scss']
})
export class ToolbarPanelComponent {
  private selection: boolean = false;
  private contextMenuItems: object[] = columnDefsWithSelection;

  constructor(public agGridService: AgGridService) {
  }

  agInit() {
  }

  toggleSelection() {
    this.selection = !this.selection;
    this.contextMenuItems = (this.selection ? columnDefsWithSelection : columnDefsWithoutSelection);
    this.agGridService.dispatchToggleSelection(this.selection, this.contextMenuItems);
  }
}
