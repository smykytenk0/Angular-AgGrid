import { createAction, props } from '@ngrx/store';

const toggleSelection = createAction('[agGrid] isSelection change', props<{isSelection: boolean, contextMenuItems: object[]}>());

export const StoreActions = {
  toggleSelection
}
