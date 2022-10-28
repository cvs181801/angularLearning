import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import { Student } from './student.model';

@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: boolean = false;
  formValue: {username: string, password: string}; ///need to save the values coming in fro mthe login form
  formValid: boolean;
  Students: Student[]; 
  studentsExist: boolean = false;

  constructor( private router: Router, private angularFirestore: AngularFirestore ){}

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

  getStudentDoc(id: string){
    return this.angularFirestore.collection("student-collection").doc(id).valueChanges();
  }

  getStudentList(){
    return this.angularFirestore.collection("student-collection").snapshotChanges();
  }

  createStudent(student: Student){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("student-collection")
        .add(student).then(response => { 
          console.log(response)}, error=> reject(error)
        )
    })
  }
  
  deleteStudent(student: {id: string; name: string; email: string; course: string; fees: string}){
    return this.angularFirestore.collection("student-collection").doc(student.id).delete();
  }

  saveStudentInfo(array: Student[], studentsExist: boolean) {
    this.Students = array;
    this.studentsExist = true;
  }

  updateStudent(student: any, id: string){
    console.log('check this student obj', student, 'check this id', id)
    //let studentToUpdate = student;
    this.angularFirestore.collection("student-collection").doc(id).update({
        name: student.name,
        email: student.email,
        course: student.course,
        fees: student.fees
      } //I think there is a missing something because the data is not getting updated in the firestore DB. 
      //could this have something to do with the version of firestore or firebase we're using ?
    )
  }
}
