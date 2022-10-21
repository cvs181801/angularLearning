import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './adminShared/user.service';

@Component({
  selector: 'app-login',
  template: '<router-outlet></router-outlet>',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  onSubmit(f: NgForm) {
    console.log(f.value)
    console.log(f.valid)
    this.userService.verifyLogin(f.value, f.valid)
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

}
