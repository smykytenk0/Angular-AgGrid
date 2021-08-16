import { IColumnDef } from '../shared/interfaces/columnDef.interface';

export interface AppState {
  isSelection: boolean;
  columnsDefs: IColumnDef[];
}
