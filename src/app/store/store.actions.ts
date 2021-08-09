import { createAction, props } from '@ngrx/store';

const toggleSelection = createAction('[agGrid] isSelection change', props<{isSelection: boolean}>());

export const StoreActions = {
  toggleSelection
}
