import { Component } from '@angular/core';

import { columnDefsWithoutSelection, columnDefsWithSelection } from '../../constants/columnDefs.constants';
import { AgGridService } from '../../services/ag-grid.service';

@Component({
  selector: 'app-toolbar-panel',
  templateUrl: './toolbar-panel.component.html',
  styleUrls: ['./toolbar-panel.component.scss']
})
export class ToolbarPanelComponent {
  public selection: boolean = false;
  public columnsDefs: object[] = columnDefsWithSelection;

  constructor(public agGridService: AgGridService) {
  }

  agInit(): void {
  }

  toggleSelection(): void {
    this.selection = !this.selection;
    this.columnsDefs = (this.selection ? columnDefsWithSelection : columnDefsWithoutSelection);
    this.agGridService.dispatchToggleSelection(this.selection, this.columnsDefs);
  }
}
