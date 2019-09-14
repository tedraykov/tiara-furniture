import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  hovered: boolean;
  constructor() {
    this.hovered = false;
  }

  ngOnInit() {
  }

}
