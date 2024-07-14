import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { LogoutComponent } from './page/logout/logout.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { SignupComponent } from './page/signup/signup.component';
import { authGuard } from './authentication/auth.guard';
import { LoginComponent } from './page/login/login.component';
import { UserdetailsComponent } from './page/userdetails/userdetails.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: "signup", pathMatch: 'full' },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "about-us", component: AboutUsComponent, canActivate: [authGuard] },
  { path: "logout", component: LogoutComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "user-details", component: UserdetailsComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password/:id/:token", component: ResetPasswordComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
