import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroComponent {
  showDiv = true; 

  ngOnInit(): void {
    this.onResize(); 
  }

  @HostListener('window:resize', [])
  onResize(): void {
    let width = window.innerWidth;
    this.showDiv = width > 725;
  }

}
