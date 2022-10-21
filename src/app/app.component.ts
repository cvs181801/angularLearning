import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angularlearning';
}
//1. build a more basic app just to get router working at root and forchild routes ?? doesent look like we are currently using any child routes in prl or ros front ends so I'm skipping for now
//2. firebase database unable to be used in this project due to a dependency conflict (@angular/firebase incompatible with the older version of node that Ruby uses, 12.21.0, which is installd globally.)
//there is a way to switch the node version you're using in a specific project only by downloading an nvm script locally so you can run an nvm command in bash terminal.  however, as the
//focus of this tutorial is learning angular functionality and syntax, at this pint I'm opting to set up using a more basic approach - I can add  a firebase database later if it feels important and simply migrate data there if needed.
//3. create a login page where user enters any username/pw combo and hits enter, then they can proceed to the secret blog, secret shopping area, and the secret shopping cart
//if they try to get to the secret areas before loggin in, they will be automatically re directed to login page
//4. how to connect the angular front end to backend ?  check new ros/ new prl
//5. Observables in angular.  Observables are declarative —that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.
