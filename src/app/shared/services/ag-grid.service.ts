import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { TableDataInterface } from '../interfaces/TableData.interface';
import { StoreActions } from '../../store/store.actions';
import { contextMenuItemsSelector } from '../../store/store.reducers';

@Injectable({providedIn: 'root'})
export class AgGridService {

  constructor(private store: Store) {
  }

  getDataForTable(data): TableDataInterface[] {
    let rowData: TableDataInterface[] = [];
    for (let i of data) {
      rowData.push({
        filterField: '',
        image: i.snippet.thumbnails.default,
        publishedAt: i.snippet.publishedAt,
        title: i,
        description: i.snippet.description
      })
    }
    return rowData
  };

  dispatchToggleSelection(isSelection: boolean, contextMenuItems: object[] ){
    this.store.dispatch(StoreActions.toggleSelection({
      isSelection: isSelection,
      contextMenuItems: contextMenuItems
    }))
  }

  selectContextMenuItems(){
    return this.store.pipe(select(contextMenuItemsSelector));
  }
}
