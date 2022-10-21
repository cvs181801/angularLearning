import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { AdminMenuComponent } from './admin/admin/admin-menu/admin-menu.component';
import { ShopComponent } from './admin/shop/shop.component';
import { CartComponent } from './admin/cart/cart.component';
import { UserService } from './admin/login/adminShared/user.service';

const routes: Routes = [
  //{ path: 'admin', component: AdminComponent, },

  //{ path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent, canActivate: [UserService]},
  { path: 'shop', component: ShopComponent, canActivate: [UserService]},
  //{ path: 'cart', component: CartComponent},
  //{ path: 'shop', component: ShopComponent},
  { path: 'login', component: LoginComponent },
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
