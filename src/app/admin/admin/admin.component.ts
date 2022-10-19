import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: '<router-outlet></router-outlet>',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
