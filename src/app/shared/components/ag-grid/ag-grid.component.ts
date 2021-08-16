import { Component, Input, OnInit, Self } from '@angular/core';
import { GetContextMenuItems, GridOptions } from 'ag-grid-community';
import { Observable, of } from 'rxjs';

import { AgGridService } from '../../services/ag-grid.service';
import { agGridOptionsConfig } from './ag-grid-options-config';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  providers: [AgGridService, HttpService]
})
export class AgGridComponent implements OnInit {
  @Input() isSelection: boolean = true;
  public gridOptions: GridOptions = agGridOptionsConfig;
  public columnDefs$: Observable<object[]> = of(null);
  public rowData$: Observable<object>;

  constructor(@Self() private agGridService: AgGridService,
              @Self() private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.rowData$ = this.httpService.getVideosData();
    this.columnDefs$ = this.agGridService.selectContextMenuItems()
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
