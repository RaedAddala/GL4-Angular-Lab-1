import { ArcEnCielDirective } from './arc-en-ciel.directive';
import { ElementRef } from '@angular/core';

describe('ArcEnCielDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('input')); // mock ElementRef
    const directive = new ArcEnCielDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
