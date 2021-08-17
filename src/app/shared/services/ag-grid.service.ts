import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StoreActions } from '../../store/store.actions';
import { columnsDefsSelector } from '../../store/store.selectors';
import { IColumnDef } from '../interfaces/columnDef.interface';

@Injectable()
export class AgGridService {

  constructor(private store: Store) {
  }

  dispatchToggleSelection(isSelection: boolean, columnsDefs: IColumnDef[] ): void{
    this.store.dispatch(StoreActions.toggleSelection({
      isSelection: isSelection,
      columnsDefs: columnsDefs
    }))
  }

  selectContextMenuItems(): Observable<IColumnDef[]>{
    return this.store.pipe(select(columnsDefsSelector));
  }
}
