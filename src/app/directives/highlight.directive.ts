import { Input, OnInit } from '@angular/core';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.bgc = this.out;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.innerHTML = 'IN';
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.innerHTML = 'OUT';
    this.bgc = this.out;
  }
}
