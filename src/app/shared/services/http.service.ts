import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { convertToTableData } from '../operators/convertToTableData';
import { Observable } from 'rxjs';
import { TableDataInterface } from '../../ag-grid/TableData.interface';

@Injectable()
export class HttpService {
  key = 'AIzaSyD0wvlxmokPdCjKWE6utYlGfQLQC39TBtw';
  constructor(private http: HttpClient) {
  }

  getVideosData(): Observable<TableDataInterface>{
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&maxResults=50&type=video&part=snippet&q=john`;
    return this.http.get(url)
      .pipe(convertToTableData())
  }
}
