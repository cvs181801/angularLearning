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
  public editForm: FormGroup;
  
  Students: Student[]; 
  updatedStudents: Student[];
  studentsExist: boolean = false;
  showEditForm: boolean = false;
  
  constructor(public userService: UserService, public formBuilder: FormBuilder) { 
    // let formArr = [this.studentForm, this.editForm];
    // formArr.forEach(form=> {form = this.formBuilder.group({
    //   name: [''],
    //   email: [''],
    //   course: [''],
    //   fees: ['']
    // })})

    this.studentForm = this.formBuilder.group({
        name: [''],
        email: [''],
        course: [''],
        fees: ['']
      })

      this.editForm = this.formBuilder.group({
        name: [''],
        email: [''],
        course: [''],
        fees: ['']
      })
  }

  ngOnInit(): void {
    this.userService.getStudentList().subscribe((res: any)=>{
      this.Students = res.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data() as {}
         } as Student
      })
      this.showStudentInfo(this.Students, true)
    })
  }

  onSubmit() {
    this.userService.createStudent(this.studentForm.value);
  }

  showStudentInfo(array: Student[], studentsExist: boolean) {
    this.userService.saveStudentInfo(array, studentsExist)
    this.updatedStudents = this.userService.Students;
    this.studentsExist = this.userService.studentsExist;
    console.log('student array', this.updatedStudents) 
  } 

  showEdit(){
    this.showEditForm = !this.showEditForm; 
  }

  updateStudentInfo(student: {id: string; name: string; email: string; course: string; fees: string}) {
    console.log('check this student obj', student)
    this.userService.updateStudent(student, student.id)
  }

  deleteStudentInfo(Student: {id: string; name: string; email: string; course: string; fees: string}) {
    if(confirm(`Are you sure you want to delete ${Student.name}?`)){
      this.userService.deleteStudent(Student);
    }
  }

}
