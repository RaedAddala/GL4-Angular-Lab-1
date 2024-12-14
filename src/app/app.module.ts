import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { PereComponent } from "./components/pere/pere.component";
import { FilsComponent } from "./components/fils/fils.component";

import { NgstyleComponent } from "./directives/ngstyle/ngstyle.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { NgclassComponent } from "./directives/ngclass/ngclass.component";

import { HighlightDirective } from "./directives/highlight.directive";

import { Btc2usdPipe } from "./pipes/btc2usd.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestFormComponent } from "./components/test-form/test-form.component";
import { LoginComponent } from "./auth/login/login.component";
import { TestObservableComponent } from "./rxjs/test-observable/test-observable.component";
import { TestHttpComponent } from "./components/test-http/test-http.component";
import { AuthInterceptorProvider } from "./auth/interceptors/auth.interceptor";
import { RhComponent } from "./optimizationPattern/rh/rh.component";
import {FibonacciPipe, UserListComponent} from "./optimizationPattern/user-list/user-list.component";
import { ProductsComponent } from "./products/products.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { SliderComponent } from "./rxjs/slider/slider.component";
import {NgOptimizedImage} from "@angular/common";
import {CvRoutingModule} from "./cv/cv-routing.module";
import {TodoModule} from "./todo/todo.module";

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent,
        ColorComponent,
        TwoComponent,
        PereComponent,
        FilsComponent,
        NgstyleComponent,
        MiniWordComponent,
        NgclassComponent,
        HighlightDirective,
        Btc2usdPipe,
        NavbarComponent,
        FrontComponent,
        AdminComponent,
        NF404Component,
        TestFormComponent,
        LoginComponent,
        TestObservableComponent,
        SliderComponent,
        TestHttpComponent,
        RhComponent,
        UserListComponent,
        ProductsComponent,
      FibonacciPipe
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        AppRoutingModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: "registerWhenStable:30000",
        }),
        NgOptimizedImage,
    ],
    providers: [
        AuthInterceptorProvider,
        provideHttpClient(withInterceptorsFromDi()),
    ],

})
export class AppModule {}
