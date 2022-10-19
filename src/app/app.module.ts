import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminMenuComponent } from './admin/admin/admin-menu/admin-menu.component';
import { AdminModule } from './admin/admin.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    StartComponent,
    AdminComponent,
    SignUpComponent,
    LoginComponent,

    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
