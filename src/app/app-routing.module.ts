import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "./auth/guards/auth.guard";

const routes: Routes = [
  { path: "login", loadComponent: () => import("./auth/login/login.component").then(m => m.LoginComponent) },
  { 
    path: "cv", 
    loadChildren: () => import("./cv/cv.routes").then(m => m.CV_ROUTES)
  },
  { 
    path: "admin", 
    canActivate: [authGuard],
    loadChildren: () => import("./templates/admin/admin.routes").then(m => m.ADMIN_ROUTES)
  },
  { 
    path: "", 
    loadComponent: () => import("./templates/front/front.component").then(m => m.FrontComponent),
    children: [
      { path: "todo", loadComponent: () => import("./todo/todo/todo.component").then(m => m.TodoComponent) },
      { path: "word", loadComponent: () => import("./directives/mini-word/mini-word.component").then(m => m.MiniWordComponent) }
    ]
  },
  { path: "ttc-calculator", loadComponent: () => import("./components/ttc-calculator/ttc-calculator.component").then(m => m.TtcCalculatorComponent) },
  { path: "**", loadComponent: () => import("./components/nf404/nf404.component").then(m => m.NF404Component) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
