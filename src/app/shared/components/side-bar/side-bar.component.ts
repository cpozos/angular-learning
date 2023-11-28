import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'gifs-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent
{
  constructor(private gifsService: GifsService) { }

  get tags(): string[]{
    return this.gifsService.tagHistory;
  }

  search(tag: string) : void{
    this.gifsService.getList(tag);
  }
}
