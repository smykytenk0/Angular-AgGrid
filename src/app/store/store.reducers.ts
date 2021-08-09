import { StoreInterface } from '../shared/interfaces/store.interface';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { StoreActions } from './store.actions';

const initialState: StoreInterface = {
  isSelection: false,
}

export const StoreReducers = createReducer(
  initialState,
  on(StoreActions.toggleSelection, (state, {isSelection}) => {
    return {...state, isSelection: isSelection}
  })
)

export const defaultSelector = createFeatureSelector<StoreInterface>('storeInterface');
export const isSelectionSelector = createSelector(defaultSelector, state => state.isSelection);
