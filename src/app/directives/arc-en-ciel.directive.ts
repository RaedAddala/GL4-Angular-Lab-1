import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';


@Directive({
  selector: 'input[appArcEnCiel][type=text]',
  standalone: true
})
export class ArcEnCielDirective  {
  @HostBinding('style.color') textColor: string = 'black';
  @HostBinding('style.borderColor') borderColor: string = 'black';
  @HostBinding('style.outline') outlineColor: string = "black";


  

  private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  
  constructor() {
   
  }

  @HostListener('keyup') onKeyUp() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.textColor = randomColor;
    this.borderColor = randomColor;
    this.outlineColor = randomColor;
    console.log(`Color changed to: ${randomColor}`);
  }
  
}