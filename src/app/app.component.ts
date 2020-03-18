import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
    // apiKey: "AIzaSyC29XCymSSdfQF9h8kyFxZJF3fbtgjSSj4",
    // authDomain: "blood-donor-angular-maps.firebaseapp.com",
    // databaseURL: "https://blood-donor-angular-maps.firebaseio.com",
    // projectId: "blood-donor-angular-maps",
    // storageBucket: "",
    // messagingSenderId: "204711991202",
    // appId: "1:204711991202:web:01eed13fdd87aa58fb84fb"
    // apiKey: "AIzaSyDzil6yPSoSLHS4T0A0Jztk1uPpdT1ZJrA",
    // authDomain: "blood-donor-264009.firebaseapp.com",
    // databaseURL: "https://blood-donor-264009.firebaseio.com",
    // projectId: "blood-donor-264009",
    // storageBucket: "blood-donor-264009.appspot.com",
    // messagingSenderId: "912506938938",
    // appId: "1:912506938938:web:426743a3dfebcf94c57703"
    // apiKey: "AIzaSyACPok4pT_guXa2bm9XddKApKRQB9XDfZg",
    // authDomain: "farmer-40822.firebaseapp.com",
    // databaseURL: "https://farmer-40822.firebaseio.com",
    // projectId: "farmer-40822",
    // storageBucket: "farmer-40822.appspot.com",
    // messagingSenderId: "650506063933",
    // appId: "1:650506063933:web:aab085b293a59fed571a54"

    // AIzaSyC1MyhFu7fx-wnBj0tW9Hd-j4k_RBd23GA

    apiKey: "AIzaSyC1MyhFu7fx-wnBj0tW9Hd-j4k_RBd23GA",
    authDomain: "causal-scarab-270817.firebaseapp.com",
    databaseURL: "https://causal-scarab-270817.firebaseio.com",
    projectId: "causal-scarab-270817",
    storageBucket: "causal-scarab-270817.appspot.com",
    messagingSenderId: "831281061203",
    appId: "1:831281061203:web:3f2d59daf265c9321455a6"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blood-app';

  constructor(){
    firebase.initializeApp(config);
  }
}
