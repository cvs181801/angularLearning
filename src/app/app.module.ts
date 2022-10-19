import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { AdminModule } from './admin/admin.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    StartComponent,

    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AdminModule, // this has to be placed before the approuting module, otherwise only the routes at the root will run. aka 'top down first match' policy.
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
