import { Component, HostBinding, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  private topScrollThreshold = 20;
  @HostBinding('class.nav-effect') isNavOnTop: boolean;
  isNavExpanded: boolean;
  isMenuMobile: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isNavExpanded = false;
    this.isNavOnTop = this.isScrollBelowThreshold();
    this.breakpointObserver.observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => this.isMenuMobile = state.matches);
  }

  @HostListener('document:scroll', [])
  onScroll(): void {
    this.isNavOnTop = this.isScrollBelowThreshold();
  }

  private isScrollBelowThreshold(): boolean {
    return this.document.documentElement.scrollTop > this.topScrollThreshold;
  }
}
