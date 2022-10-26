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
  Students: Student[]; 
  studentsExist: boolean = false;
  
  constructor(public userService: UserService, public formBuilder: FormBuilder) { 
    this.studentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      course: [''],
      fees: ['']
    })

  }

  ngOnInit(): void {
    this.userService.getStudentList().subscribe((res)=>{
      this.Students = res.map(item => {
      return {
        id: item.payload.doc.id,
        name: 'test',
        email: 'test',
        course: 'test',
        fees: 'test'
        //  ...item.payload.doc.data() as {}
         } as Student
      },
      this.showStudentInfo(this.Students)
      )
      console.log('res payload data', res[0].payload.doc.data())
    })

  }

  onSubmit() {
    this.userService.createStudent(this.studentForm.value);
  }

  showStudentInfo(array: any): void {
    this.Students = array;
    this.studentsExist = true;
    console.log('student array', array)
  } //the method is running but then the variables are getting reverted back to undefined. why?, 
  //well nm, now I don't see anything except undifined getting saved in the array

  updateStudentInfo() {

  }

  deleteStudentInfo() {
    
  }

}
