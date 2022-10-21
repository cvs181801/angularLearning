import { Component, OnInit } from '@angular/core';
import { UserService } from '../admin/login/adminShared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  clickToLogout() {
    this.userService.logout();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
   
  }

}
