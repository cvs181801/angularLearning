import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../login/adminShared/user.service';
import { Student } from './student.model'

@Component({
  selector: 'app-shop',
  template: '<router-outlet></router-outlet>',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {
  public studentForm: FormGroup;
  public students: Student[]; 
  
  constructor(public userService: UserService, public formBuilder: FormBuilder) { 
    this.studentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      course: [''],
      fees: ['']
    })

  }

  ngOnInit(): void {
    this.userService.getStudentList().subscribe(res=>{this.students = res.map(item=>{})})
  }

  onSubmit() {
    this.userService.createStudent(this.studentForm.value);
  }

  getStudentsArr() {
    this.userService.getStudentList().subscribe(res=>{console.log('res', res)})
    
  }

}
