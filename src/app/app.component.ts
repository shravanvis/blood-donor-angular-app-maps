import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCOXPytkiOJWOr-pTjEySpN9nFFUfy6c1U",
  authDomain: "angular-maps-42ab9.firebaseapp.com",
  databaseURL: "https://angular-maps-42ab9.firebaseio.com",
  projectId: "angular-maps-42ab9",
  storageBucket: "",
  messagingSenderId: "130832708619",
  appId: "1:130832708619:web:cfdcdc2fb619403671830e"
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
