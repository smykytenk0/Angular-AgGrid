import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { TableDataInterface } from '../interfaces/TableData.interface';
import { StoreActions } from '../../store/store.actions';
import { convertToTableData } from '../operators/convertToTableData';

@Injectable({providedIn: 'root'})
export class AgGridService {

  constructor(private store: Store,
              private http: HttpClient) {
  }

  getVideosData(){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0wvlxmokPdCjKWE6utYlGfQLQC39TBtw&maxResults=50&type=video&part=snippet&q=john')
      .pipe(convertToTableData())
  }

  getDataForTable(data): TableDataInterface[] {
    let rowData: TableDataInterface[] = [];
    for (let i of data) {
      rowData.push({
        filterField: '',
        image: i.snippet.thumbnails.default,
        publishedAt: i.snippet.publishedAt,
        title: i,
        description: i.snippet.description
      })
    }
    return rowData
  };

  dispatchToggleSelection(isSelection: boolean, contextMenuItems: object[] ){
    this.store.dispatch(StoreActions.toggleSelection({
      isSelection: isSelection,
      contextMenuItems: contextMenuItems
    }))
  }
}
