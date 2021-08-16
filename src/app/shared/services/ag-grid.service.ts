import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { StoreActions } from '../../store/store.actions';
import { Observable } from 'rxjs';
import { columnsDefsSelector } from '../../store/store.selectors';

@Injectable()
export class AgGridService {

  constructor(private store: Store) {
  }

  dispatchToggleSelection(isSelection: boolean, columnsDefs: object[] ): void{
    this.store.dispatch(StoreActions.toggleSelection({
      isSelection: isSelection,
      columnsDefs: columnsDefs
    }))
  }

  selectContextMenuItems(): Observable<object[]>{
    return this.store.pipe(select(columnsDefsSelector));
  }
}
