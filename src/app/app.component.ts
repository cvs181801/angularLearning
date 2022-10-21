import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'angularlearning';

  ngOnInit(): void {
   console.log('AngularFireModule', AngularFireModule)
   console.log('firebase', firebase)
  }
}
//1. I skipped the forchild routes because I didn't see evidence that we're using them in prl or ros frontened 

//2. firebase database unable to be used in this project due to a dependency conflict 
//(@angular/firebase incompatible with the older version of node that Ruby uses, 12.21.0, which is installed globally.)
//there is a way to switch the node version you're using in a specific project only by downloading an nvm script locally so you can run 
//an nvm command in bash terminal.  however, for simpliciy sake, developing this on my mac so I can avoid needing 
//to deal with nvm on windows.

//3. Re: Observables in angular.  Observables are declarative —that is, you define a function for publishing values, 
//but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications 
//until the function completes, or until they unsubscribe.

//4. unit testing in angular

//5. for the 'shop' part of the site, I am thinking just a very simple CRUD something just to get a little practice with this syntax

//6. the shopping cart wont be a real shopping cart mostly because we dont have shopping cart in new ros/prl 