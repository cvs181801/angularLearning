import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { AdminMenuComponent } from './admin/admin/admin-menu/admin-menu.component';
import { UserService } from './admin/admin/adminShared/user.service';

const routes: Routes = [

  {
    path: 'admin',
      component: AdminComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignUpComponent},
        { path: '', component: AdminMenuComponent, canActivate: [UserService]}
      ]
  },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  ErrorComponent,
  AdminComponent,
  AdminMenuComponent,
  LoginComponent,
  SignUpComponent
];
