import { Injectable } from '@angular/core';
import { TableDataInterface } from '../interfaces/TableData.interface';

@Injectable({providedIn: 'root'})
export class AgGridService {
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
}
