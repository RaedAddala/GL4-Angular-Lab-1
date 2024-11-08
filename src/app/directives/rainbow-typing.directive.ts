import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[rainbowTyping]'  // Applies only to input elements with the 'rainbowTyping' attribute
})
export class RainbowTypingDirective {
  // Array of colors for the rainbow effect
  private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  // HostBinding for dynamic style properties
  @HostBinding('style.color') textColor: string = this.colors[0];
  @HostBinding('style.borderColor') borderColor: string = this.colors[0];

  // HostListener for keyup event to trigger color change
  @HostListener('keyup') onKeyUp() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
}
