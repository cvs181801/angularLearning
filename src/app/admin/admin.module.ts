import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { UserService } from './login/adminShared/user.service';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

// const AdminRoutes: Routes = [
//   {
//     path: 'admin',
//       component: AdminComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'signup', component: SignUpComponent},
//       { path: '', component: AdminMenuComponent, canActivate: [UserService]}
//     ]
//   },
// ];
@NgModule({
  imports: [
   // RouterModule.forChild(AdminRoutes),
    CommonModule,
    FormsModule

  ],
  exports: [
   // RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    LoginComponent,
    SignUpComponent,
    ShopComponent,
    CartComponent
  ],
  providers: [
    UserService
  ]
})
export class AdminModule {}
