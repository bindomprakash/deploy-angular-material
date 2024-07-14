import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './page/material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './appModule/material/material.module';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { LogoutComponent } from './page/logout/logout.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './page/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './page/login/login.component';
import { UserdetailsComponent } from './page/userdetails/userdetails.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    HomeComponent,
    AboutUsComponent,
    LogoutComponent,
    PageNotFoundComponent,
    SignupComponent,
    LoginComponent,
    UserdetailsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
