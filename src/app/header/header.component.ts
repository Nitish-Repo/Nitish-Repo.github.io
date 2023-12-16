import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and add or remove the 'sticky' class accordingly
    if (window.scrollY > 0) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  ngOnInit() {
    // Initialize the 'isSticky' property based on the initial scroll position
    this.onWindowScroll();
  }

  closeMenu() {
      // Find the checkbox with the #check ID and set its "checked" property to false
      const checkbox = document.getElementById('check') as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
  }
}