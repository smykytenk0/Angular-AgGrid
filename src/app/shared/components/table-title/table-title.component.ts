import { Component } from '@angular/core';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.scss']
})
export class TableTitleComponent {
  public link: string;
  public videoTitle: string

  agInit(params: any): void{
    this.link = `https://www.youtube.com/watch?v=${params.value.id.videoId}`;
    this.videoTitle = params.value.snippet.title;
  }
}
