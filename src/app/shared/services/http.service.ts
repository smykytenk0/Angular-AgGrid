import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {convertToTableData} from '../operators/convertToTableData';
import {TableDataInterface} from '../../ag-grid/tableData.interface';

@Injectable()
export class HttpService {
  apiKey = 'AIzaSyD0wvlxmokPdCjKWE6utYlGfQLQC39TBtw';
  apiUrl = 'https://www.googleapis.com/youtube/v3'
  constructor(private http: HttpClient) {
  }

  public getVideosData(): Observable<TableDataInterface> {
    const url = `${this.apiUrl}/search?key=${this.apiKey}&maxResults=50&type=video&part=snippet&q=john`;
    return this.http.get(url)
      .pipe(convertToTableData())
  }
}
