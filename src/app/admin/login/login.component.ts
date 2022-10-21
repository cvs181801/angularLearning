import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterStateSnapshot } from '@angular/router';

import { UserService } from './adminShared/user.service';

@Component({
  selector: 'app-login',
  template: '<router-outlet></router-outlet>',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  //username: string;
  //password: string;

  // login() {
  //   if(this.username && this.password) {
  //     return true;
  //   } else {
  //     return false; //we have to broadcast the value returned down to the user.service.ts
  //   }
  // }

  onSubmit(f: NgForm) {
    console.log(f.value)
    console.log(f.valid)
    console.log(RouterStateSnapshot)
    // if(f.valid) {
    //   localStorage.setItem('username', f.value.username)
    //   localStorage.setItem('password', f.value.password)
    // }
    this.userService.verifyLogin(RouterStateSnapshot, f.value, f.valid)
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

}
