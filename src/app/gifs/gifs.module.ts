import { NgModule } from "@angular/core";

import { HomePageComponent } from "./pages/home-page.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { CardListComponent } from "./components/card-list/card-list.component";
import { GifsService } from "./services/gifs.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/components/shared.module";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent,
    CardListComponent,
    SearchBoxComponent
  ],
  providers: [
    GifsService
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule
  ]
})
export class GifsModule {

}
