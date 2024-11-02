import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOfComponent } from './from-of.component';

describe('FromOfComponent', () => {
  let component: FromOfComponent;
  let fixture: ComponentFixture<FromOfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [FromOfComponent]
});
    fixture = TestBed.createComponent(FromOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
