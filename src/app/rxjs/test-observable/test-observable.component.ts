import { Component, OnDestroy, inject } from "@angular/core";
import { Observable, Subscription, filter, map } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-test-observable",
    templateUrl: "./test-observable.component.html",
    styleUrls: ["./test-observable.component.css"],
    standalone: true,
})
export class TestObservableComponent {
  private toaster = inject(ToastrService);

  firstObservable$: Observable<number>;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
  }
}
