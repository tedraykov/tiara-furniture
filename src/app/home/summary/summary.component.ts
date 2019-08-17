import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.interface';

const staticArticles: Article[] = [
  {
    title: 'Вътрешно обзавеждане',
    text: 'Вашето жилище е вашата крепост. Доверете ни се и ние ще Ви помогнем да го превърнете в уютния дом, за който мечтаете.',
    iconClass: 'icon-furnishing',
    imageUrl: 'furnishing-thumbnail.jpg'
  },
  {
    title: 'Модерен дизайн',
    text: 'Независимо от Вашите предпочитания за дизайн и оформление на вашия дом, нашите дизайнери ще вложат всичко необходимо за впечатляващ резултат.',
    iconClass: 'icon-modern-design',
    imageUrl: 'modern-design-thumbnail.jpg'
  },
  {
    title: 'Бизнес обзавеждане',
    text: 'Магазин, офис, хотел - с нас ще получите комплексна услуга от проектиране през изработка и монтаж на поръчаното от Вас обзавеждане.',
    iconClass: 'icon-business-design',
    imageUrl: 'business-design-thumbnail.jpg'
  }, {
    title: 'Интериорен дизайн',
    text: 'От рисунка с калем на пясък до ползване на най-модерен софтуер, Злати е Вашият човек!',
    iconClass: 'icon-interior-design',
    imageUrl: 'interior-design-thumbnail.jpg'
  }
];

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  articles: Article[];

  constructor() {
  }

  ngOnInit() {
    this.articles = staticArticles;
  }

}
