import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtcCalculatorComponent } from './ttc-calculator.component';

describe('TtcCalculatorComponent', () => {
  let component: TtcCalculatorComponent;
  let fixture: ComponentFixture<TtcCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TtcCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtcCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
