import { Component } from '@angular/core';
import { imageInterface } from './image.interface';

@Component({
  selector: 'app-table-image',
  templateUrl: './table-image.component.html',
  styleUrls: ['./table-image.component.scss']
})
export class TableImageComponent {
  public params: imageInterface;
  public url: string;

  agInit(params: any) {
    this.url = params.value.url;
  }
}
