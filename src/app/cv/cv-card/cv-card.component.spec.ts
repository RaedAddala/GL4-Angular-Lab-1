import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCardComponent } from './cv-card.component';

describe('CvCardComponent', () => {
  let component: CvCardComponent;
  let fixture: ComponentFixture<CvCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CvCardComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
