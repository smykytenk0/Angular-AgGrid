import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { convertToTableData } from '../operators/convertToTableData';
import { Observable } from 'rxjs';
import { TableDataInterface } from '../../ag-grid/TableData.interface';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getVideosData(): Observable<TableDataInterface>{
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0wvlxmokPdCjKWE6utYlGfQLQC39TBtw&maxResults=50&type=video&part=snippet&q=john')
      .pipe(convertToTableData())
  }
}
