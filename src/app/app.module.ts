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
import { CardProfilComponent } from "./components/card-profil/card-profil.component";
import { PereComponent } from "./components/pere/pere.component";
import { FilsComponent } from "./components/fils/fils.component";

import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";

import { NgstyleComponent } from "./directives/ngstyle/ngstyle.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { NgclassComponent } from "./directives/ngclass/ngclass.component";
import { TodoComponent } from "./todo/todo/todo.component";

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
import { ListComponent } from "./cv/list/list.component";
import { ItemComponent } from "./cv/item/item.component";
import { DefaultImagePipe } from "./cv/pipes/default-image.pipe";
import { EmbaucheComponent } from "./cv/embauche/embauche.component";
import { CvCardComponent } from "./cv/cv-card/cv-card.component";
import { RhComponent } from "./optimizationPattern/rh/rh.component";
import { UserListComponent } from "./optimizationPattern/user-list/user-list.component";
import { ProductsComponent } from "./products/products.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AutocompleteComponent } from "./cv/autocomplete/autocomplete.component";
import { SliderComponent } from "./rxjs/slider/slider.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent,
        ColorComponent,
        TwoComponent,
        CardProfilComponent,
        PereComponent,
        FilsComponent,
        AddCvComponent,
        CvComponent,
        ListComponent,
        ItemComponent,
        DetailsCvComponent,
        CvCardComponent,
        CardProfilComponent,
        EmbaucheComponent,
        DefaultImagePipe,
        AutocompleteComponent,
        NgstyleComponent,
        MiniWordComponent,
        NgclassComponent,
        HighlightDirective,
        Btc2usdPipe,
        TodoComponent,
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
    exports: [
        AutocompleteComponent
    ]
})
export class AppModule {}
