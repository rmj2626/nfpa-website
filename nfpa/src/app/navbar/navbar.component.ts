
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle, NgClass, RouterOutlet, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  isScrollUp: boolean = false; //intial visibilty of isScrollUp is false
  isOriginal: boolean = true; //intial visibilty of isOriginal is true

  private previousScrollPosition: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition < this.previousScrollPosition) {
      // Scrolling up, show navbar
      this.isScrollUp = true;
      this.isOriginal = false;
    }

    this.previousScrollPosition = scrollPosition;

    if (scrollPosition < 30) {
      this.isOriginal = true;
      this.isScrollUp = false;
    }
  }
}