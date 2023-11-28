import { NgModule } from "@angular/core";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { CommonModule } from "@angular/common";
import { ImageLoaderComponent } from "./image-loader/image-loader.component";

@NgModule({
  declarations: [
    ImageLoaderComponent,
    SideBarComponent,
  ],
  exports: [
    ImageLoaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule
{
}
