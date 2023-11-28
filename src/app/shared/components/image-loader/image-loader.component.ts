import { Component, Input, OnInit } from "@angular/core";
import { Gif } from "../../../gifs/interfaces/gifs-interfaces";

@Component({
  selector: 'image-loader',
  templateUrl: './image-loader.component.html'
})
export class ImageLoaderComponent implements OnInit {

  public hasLoaded = false;

  @Input()
  public url?: string;

  @Input()
  public alt: string = '';

  ngOnInit(): void {
    if (!this.url) throw new Error("Gif is required.");
  }

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000)
  }
}
