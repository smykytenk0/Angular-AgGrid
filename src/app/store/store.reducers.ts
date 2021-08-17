import { createReducer, on } from '@ngrx/store';

import { StoreActions } from './store.actions';
import { columnDefsWithoutSelection } from '../shared/constants/columnDefs.constants';
import { AppState } from './store.interfaces';

const initialState: AppState = {
  isSelection: false,
  columnsDefs: columnDefsWithoutSelection,
}

export const storeReducer = createReducer(
  initialState,
  on(StoreActions.toggleSelection, (state, {isSelection, columnsDefs}) => {
    return {...state, isSelection: isSelection, columnsDefs: columnsDefs}
  })
)

