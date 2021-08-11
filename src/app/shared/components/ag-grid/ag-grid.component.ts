import { Component, Input, OnInit, Self } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { agGridOptionsConfig } from './ag-grid-options-config';
import { defaultData } from './defaultData';
import { select, Store } from '@ngrx/store';
import { AgGridService } from '../../services/ag-grid.service';
import { Observable } from 'rxjs';
import { contextMenuItemsSelector } from '../../../store/store.reducers';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  providers: [AgGridService]
})
export class AgGridComponent implements OnInit {
  gridOptions: GridOptions = agGridOptionsConfig;
  @Input() isSelection: boolean = true;
  rowData: object[] = [];
  columnDefs: object[];
  columnDefs$: Observable<object[]>;
  constructor(private store: Store,
              @Self() private agGridService: AgGridService) {

  }

  ngOnInit(): void {
    this.columnDefs$ = this.store.pipe(select(contextMenuItemsSelector));
    this.rowData = this.agGridService.getDataForTable(defaultData.items);
  }

  getContextMenuItems(params) {
    const columnName = params.column.colId;
    return ( columnName == 'title' ?
      [
        'copy',
        'copyWithHeaders',
        'paste',
        {
          name: 'Open in new tab',
          icon: '<img src="../../../../assets/openInNewTab.png" alt="Open in new tab" width="16px" height="16px">',
          action: () => {
            window.open(`https://www.youtube.com/watch?v=${params.value.id.videoId}`)
          }
        }
      ] : params.defaultItems);
  }
}
