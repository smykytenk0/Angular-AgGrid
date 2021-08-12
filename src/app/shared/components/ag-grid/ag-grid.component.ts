import { Component, Input, OnInit, Self } from '@angular/core';
import { GetContextMenuItems, GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AgGridService } from '../../services/ag-grid.service';
import { defaultData } from './defaultData';
import { agGridOptionsConfig } from './ag-grid-options-config';
import { contextMenuItemsSelector } from '../../../store/store.reducers';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  providers: [AgGridService]
})
export class AgGridComponent implements OnInit {
  @Input() isSelection: boolean = true;
  public gridOptions: GridOptions = agGridOptionsConfig;
  public rowData: object[] = [];
  public columnDefs$: Observable<object[]>;
  public rowData$: Observable<object>;

  constructor(private store: Store,
              @Self() private agGridService: AgGridService) {
  }

  ngOnInit(): void {
    this.rowData$ = this.agGridService.getVideosData();
    this.rowData$.subscribe(data => console.log(data));
    this.columnDefs$ = this.store.pipe(select(contextMenuItemsSelector));
    this.rowData = this.agGridService.getDataForTable(defaultData.items);
  }

  getContextMenuItems(params): GetContextMenuItems {
    const columnName = params.column.colId;
    return (columnName == 'title' ?
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
