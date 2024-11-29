import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailsCvComponent } from './master-details-cv.component';

describe('MasterDetailsCvComponent', () => {
  let component: MasterDetailsCvComponent;
  let fixture: ComponentFixture<MasterDetailsCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDetailsCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDetailsCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
