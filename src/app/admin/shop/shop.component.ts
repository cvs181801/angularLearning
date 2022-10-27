import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../login/adminShared/user.service';
import { Student } from '../login/adminShared/student.model'

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
        ...item.payload.doc.data() as {}
         } as Student
      })
      //console.log('res payload data', res[0].payload.doc.data())
      //console.log('this.Students', this.Students)
      this.studentsExist = true;
      this.showStudentInfo(this.Students, this.studentsExist)
    })
  }

  onSubmit() {
    this.userService.createStudent(this.studentForm.value);
  }

  showStudentInfo(array: Student[], studentsExist: boolean) {
    this.userService.saveStudentInfo(array, studentsExist)
    this.Students = this.userService.Students;
    this.studentsExist = this.userService.studentsExist;
    console.log('student array', this.Students) 
  } 

  updateStudentInfo() {

  }

  deleteStudentInfo() {
    
  }

}
