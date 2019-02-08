import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';

  onNavigation(headerFeature){
    this.loadedFeature = headerFeature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB0DmItuS-j3bLlgwQNaKYVzwK1jAJ26J0",
      authDomain: "recipe-book-e79e4.firebaseapp.com"
    });
  }
  
}
