import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";

fdescribe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CounterComponent],
}).compileComponents();
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("CounterComponent exist", () => {
    expect(component).toBeTruthy();
  });
});
