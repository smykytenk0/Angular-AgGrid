import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { agGridOptionsConfig } from './ag-grid-options-config';
import { defaultData } from './defaultData';
import { Store } from '@ngrx/store';
import { AgGridService } from '../services/ag-grid.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  gridOptions: GridOptions = agGridOptionsConfig;
  isSelection: boolean = true;
  rowData: object[] = [];
  columnDefs: object[];
  columnDefsWithSelection = [
    {
      headerName: '',
      field: 'filterField',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,

    },
    {headerName: '', field: 'image', cellRenderer: 'tableImageComponent',},
    {headerName: 'Publish on', field: 'publishedAt'},
    {headerName: 'Video Title', field: 'title', cellRenderer: 'tableTitleComponent'},
    {headerName: 'Description', field: 'description'},
  ];
  columnDefsWithoutSelection = [
    {headerName: '', field: 'image', cellRenderer: 'tableImageComponent',},
    {headerName: 'Publish on', field: 'publishedAt'},
    {headerName: 'Video Title', field: 'title', cellRenderer: 'tableTitleComponent'},
    {headerName: 'Description', field: 'description'},
  ];

  constructor(private store: Store,
              private agGridService: AgGridService) {

  }

  ngOnInit(): void {
    this.columnDefs = (this.isSelection ? this.columnDefsWithSelection : this.columnDefsWithoutSelection);
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
