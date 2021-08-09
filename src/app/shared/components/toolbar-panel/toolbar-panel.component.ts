import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreActions } from '../../../store/store.actions';

@Component({
  selector: 'app-toolbar-panel',
  templateUrl: './toolbar-panel.component.html',
  styleUrls: ['./toolbar-panel.component.scss']
})
export class ToolbarPanelComponent {

  constructor(private store: Store) {
  }
  selection: boolean = false;
  agInit(){
  }
  toggleSelection() {
    this.selection = !this.selection;
    this.store.dispatch(StoreActions.toggleSelection({isSelection: this.selection}))
  }
}
