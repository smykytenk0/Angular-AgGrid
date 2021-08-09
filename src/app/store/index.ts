import {
  ActionReducerMap,
} from '@ngrx/store';
import { StoreReducers } from './store.reducers';
import { StoreInterface } from '../shared/interfaces/store.interface';


export interface State {
  defaultStore: StoreInterface
}

export const reducers: ActionReducerMap<State> = {
  defaultStore: StoreReducers
};
