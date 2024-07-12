import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { LogoutComponent } from './page/logout/logout.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { SignupComponent } from './page/signup/signup.component';
import { authGuard } from './authentication/auth.guard';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: "signup", pathMatch: 'full' },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "about-us", component: AboutUsComponent, canActivate: [authGuard] },
  { path: "logout", component: LogoutComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
