import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { HomeComponent } from './home.component';
import { SummaryComponent } from './summary/summary.component';
import { ArticleComponent } from './summary/article/article.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { PartnersComponent } from './partners/partners.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { MatIconModule } from '@angular/material/icon';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
   imports: [
      CommonModule,
      ParallaxScrollModule,
      MatIconModule
   ],
   declarations: [
      MainCarouselComponent,
      HomeComponent,
      SummaryComponent,
      ArticleComponent,
      CompanyInfoComponent,
      PartnersComponent,
      ContactsComponent,
      GalleryComponent
   ]
})
export class HomeModule {
}
