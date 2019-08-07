import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainCarouselComponent, HomeComponent]
})
export class HomeModule {
}
