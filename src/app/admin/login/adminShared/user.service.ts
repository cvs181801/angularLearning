import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: boolean = false;
  formValue: {username: string, password: string}; ///need to save the values coming in fro mthe login form
  formValid: boolean;

  constructor( private router: Router ){
    
  }

  //canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    canActivate():boolean {
    //let url: string = state.url;
    if(localStorage.getItem('username')) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
    if(this.userLoggedIn){
      //this.router.navigate(['/shop'])
      return true;
    } else {
      //this.router.navigate(['/login'])
      return false;
    }
    //return this.verifyLogin(url, this.formValue, this.formValid);
  }

  verifyLogin(formValue: {username: string, password: string}, formValid: boolean):boolean {
    if(formValid){
      localStorage.setItem('username', formValue.username)
      this.userLoggedIn = true;
      this.router.navigate(['/shop'])
      return true;
    } else {
      this.userLoggedIn = false;
      this.router.navigate(['/login'])
      return false;
    }
  }

  logout(){
      if(localStorage.getItem('username')) {
        localStorage.removeItem('username')
        this.userLoggedIn = false;
      } else {
        this.userLoggedIn = true;
      } 
  }
}
