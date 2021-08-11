import { StoreInterface } from '../shared/interfaces/store.interface';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { StoreActions } from './store.actions';
import { columnDefsWithoutSelection } from '../shared/constants/contextMenuItems.constants';

const initialState: StoreInterface = {
  isSelection: false,
  contextMenuItems: columnDefsWithoutSelection,
}

export const StoreReducers = createReducer(
  initialState,
  on(StoreActions.toggleSelection, (state, {isSelection, contextMenuItems}) => {
    return {...state, isSelection: isSelection, contextMenuItems: contextMenuItems}
  })

)

export const defaultSelector = createFeatureSelector<StoreInterface>('storeInterface');
export const isSelectionSelector = createSelector(defaultSelector, state => state.isSelection);
export const contextMenuItemsSelector = createSelector(defaultSelector, state => state.contextMenuItems);
