import { Component, HostBinding, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  private topScrollThreshold = 20;
  @HostBinding('class.nav-effect') isNavOnTop: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.isNavOnTop = this.isScrollBelowThreshold();
  }

  @HostListener('document:scroll', [])
  onScroll(): void {
    this.isNavOnTop = this.isScrollBelowThreshold();
  }

  private isScrollBelowThreshold(): boolean {
    return this.document.documentElement.scrollTop > this.topScrollThreshold;
  }
}
