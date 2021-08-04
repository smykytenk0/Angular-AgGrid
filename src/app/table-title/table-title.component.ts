import { Component } from '@angular/core';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.scss']
})
export class TableTitleComponent {
  link: string;
  videoTitle: string
  agInit(params: any){
    this.link = `https://www.youtube.com/watch?v=${params.value.id.videoId}`;
    this.videoTitle = params.value.snippet.title;
  }
}
