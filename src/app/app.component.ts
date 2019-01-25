import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'tunoche';


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDnXTtqqY1yyOkbWDuxv09w1G-J9xgDx1I',
      authDomain: 'tu-noche-30fa6.firebaseapp.com'
    });
  }
}

