import { Component, Input, OnInit, Self } from '@angular/core';
import { GetContextMenuItems, GridOptions } from 'ag-grid-community';
import { Observable, of } from 'rxjs';

import { AgGridService } from '../shared/services/ag-grid.service';
import { AG_GRID_CONFIG } from './ag-grid-options-config';
import { HttpService } from '../shared/services/http.service';
import { IColumnDef } from '../shared/interfaces/columnDef.interface';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  providers: [AgGridService, HttpService]
})
export class AgGridComponent implements OnInit {
  @Input() isSelection: boolean = true;
  public gridOptions: GridOptions = AG_GRID_CONFIG;
  public columnDefs$: Observable<IColumnDef[]> = of(null);
  public rowData$: Observable<object>;

  constructor(@Self() private agGridService: AgGridService,
              @Self() private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.rowData$ = this.httpService.getVideosData();
    this.columnDefs$ = this.agGridService.selectContextMenuItems();
  }

  public getContextMenuItems(params): GetContextMenuItems {
    const columnName = params.column.colId;
    return (columnName == 'title' ?
      [
        'copy',
        'copyWithHeaders',
        'paste',
        {
          name: 'Open in new tab',
          icon: '<img src="../../assets/openInNewTab.png" alt="Open in new tab" width="16px" height="16px">',
          action: () => {
            window.open(`https://www.youtube.com/watch?v=${params.value.id.videoId}`)
          }
        }
      ] : params.defaultItems);
  }
}
