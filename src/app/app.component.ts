import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase/app'
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  template: `
  <h1>{{ (item | async)?.name }}</h1>
  `,
})
export class AppComponent implements OnInit{
  title = 'angularlearning';

  item: Observable<any>;
  constructor(db: AngularFireDatabaseModule) {
    //this.item = db.object('item').valueChanges();
    console.log('db', db)
  }

  ngOnInit(): void {
   console.log('AngularFireModule', AngularFireModule)
   console.log('firebase', firebase)
   console.log('AngularFireDatabaseModule', AngularFireDatabaseModule)
   console.log('AngularFirestoreModule', AngularFirestoreModule)
  }
}
//1. I skipped the forchild routes because I didn't see evidence that we're using them in prl or ros frontened 

//2. firebase database unable to be used in this project due to a dependency conflict 
//(@angular/firebase incompatible with the older version of node that Ruby uses, 12.21.0, which is installed globally.)
//there is a way to switch the node version you're using in a specific project only by downloading an nvm script locally so you can run 
//an nvm command in bash terminal.  however, for simpliciy sake, developing this on my mac so I can avoid needing 
//to deal with nvm on windows.
//I had to install specific versions of node, angular cli and firebase to get around a dependency conflict.
//we define the CRUD methods to manage our data in a service file. This way, we can use the methods throughout the application

//3. Re: Observables in angular.  Observables are declarative —that is, you define a function for publishing values, 
//but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications 
//until the function completes, or until they unsubscribe.

//4. unit testing in angular

//5. for the 'shop' part of the site, I am thinking just a very simple CRUD something just to get a little practice with this syntax

//6. the shopping cart wont be a real shopping cart mostly because we dont have shopping cart in new ros/prl 

//7. styles using scss (Sass). must add the correct file path to the main sass file.  In that main sass file, you must import the other related 
//sass file paths.  in angular.json, add the stylePreprocessorOptions under the style file path.  