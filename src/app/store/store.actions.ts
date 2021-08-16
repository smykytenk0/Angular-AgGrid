import { createAction, props } from '@ngrx/store';

const toggleSelectionAction = createAction('[agGrid] isSelection change', props<{isSelection: boolean, columnsDefs: object[]}>());

export const StoreActions = {
  toggleSelection: toggleSelectionAction
}
