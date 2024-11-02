import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassComponent } from './ngclass.component';

describe('NgclassComponent', () => {
  let component: NgclassComponent;
  let fixture: ComponentFixture<NgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NgclassComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
