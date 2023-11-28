import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtGifInput')
  private textBox!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  search() {
    this.gifsService.getList(this.textBox.nativeElement.value);
    this.textBox.nativeElement.value = '';
  }
}
