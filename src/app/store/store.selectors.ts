import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './store.interfaces';

export const defaultSelector = createFeatureSelector<AppState>('store');
export const isSelectionSelector = createSelector(defaultSelector, state => state.isSelection);
export const columnsDefsSelector = createSelector(defaultSelector, state => state.columnsDefs);
