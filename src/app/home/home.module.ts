import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { HomeComponent } from './home.component';
import { SummaryComponent } from './summary/summary.component';
import { ArticleComponent } from './summary/article/article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainCarouselComponent,
    HomeComponent,
    SummaryComponent,
    ArticleComponent
  ]
})
export class HomeModule {
}
