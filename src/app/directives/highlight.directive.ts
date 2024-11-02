import { Input, OnInit, inject } from '@angular/core';
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
  private element = inject(ElementRef);

  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bgc = this.out;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {}
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
