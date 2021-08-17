import { createAction, props } from '@ngrx/store';

import { IColumnDef } from '../shared/interfaces/columnDef.interface';

const toggleSelectionAction = createAction('[agGrid] isSelection change', props<{isSelection: boolean, columnsDefs: IColumnDef[]}>());

export const StoreActions = {
  toggleSelection: toggleSelectionAction
}
