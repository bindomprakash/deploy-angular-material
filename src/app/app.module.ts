import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './page/material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './appModule/material/material.module';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { LoginComponent } from './page/login/login.component';
import { LogoutComponent } from './page/logout/logout.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
