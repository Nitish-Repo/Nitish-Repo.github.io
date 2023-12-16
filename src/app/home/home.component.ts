import { Component, OnInit, OnDestroy } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private typed: Typed | null = null;

  ngOnInit() {
    this.initTyped();
  }

  initTyped() {
    const options = {
      strings: ['Web Developer', 'Code Visionary'], // An array of strings to type
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 25, // Backspacing speed in milliseconds
      backDelay: 2000, // Delay before starting to backspace
      startDelay: 100, // Delay before starting to type
      showCursor: true, // Show the blinking cursor
      loop: true, // Add this option to loop the animation
    };

    this.typed = new Typed('.text-role', options);
  }

 
playVideo(): void {
  const videoElement = document.getElementById('videoElement') as HTMLVideoElement;
  videoElement.play();
}

  ngOnDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
