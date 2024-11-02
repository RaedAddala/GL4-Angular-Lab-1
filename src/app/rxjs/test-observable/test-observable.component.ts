import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-test-observable",
    templateUrl: "./test-observable.component.html",
    styleUrls: ["./test-observable.component.css"],
    standalone: true,
})
export class TestObservableComponent {
  firstObservable$: Observable<number>;

  constructor(private toaster: ToastrService) {
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
