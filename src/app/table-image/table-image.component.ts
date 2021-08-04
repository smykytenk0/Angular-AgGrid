import { Component } from '@angular/core';
import { imageInterface } from '../interfaces/image.interface';

@Component({
  selector: 'app-table-image',
  templateUrl: './table-image.component.html',
  styleUrls: ['./table-image.component.scss']
})
export class TableImageComponent {
  params: imageInterface;
  agInit(params: any){
    this.params = params.value;
  }
}
