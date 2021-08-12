import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { convertToTableData } from '../operators/convertToTableData';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getVideosData(){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0wvlxmokPdCjKWE6utYlGfQLQC39TBtw&maxResults=50&type=video&part=snippet&q=john')
      .pipe(convertToTableData())
  }
}
