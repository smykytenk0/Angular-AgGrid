import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreActions } from '../../../store/store.actions';
import { columnDefsWithoutSelection, columnDefsWithSelection } from '../../constants/contextMenuItems.constants';

@Component({
  selector: 'app-toolbar-panel',
  templateUrl: './toolbar-panel.component.html',
  styleUrls: ['./toolbar-panel.component.scss']
})
export class ToolbarPanelComponent {
  selection: boolean = false;
  contextMenuItems: object[] = columnDefsWithSelection;

  constructor(private store: Store) {
  }

  agInit() {
  }

  toggleSelection() {
    this.selection = !this.selection;
    this.contextMenuItems = (this.selection ? columnDefsWithSelection : columnDefsWithoutSelection);
    this.store.dispatch(StoreActions.toggleSelection({isSelection: this.selection, contextMenuItems: this.contextMenuItems}))
  }
}
