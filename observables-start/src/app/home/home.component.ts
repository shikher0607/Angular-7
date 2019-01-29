import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs/Observer'
import 'rxjs/Rx'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObservableSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
        const myNumbers = Observable.interval(1000).map((data : number) => {
          return data * 2;
        });
        this.numberObservableSubscription = myNumbers.subscribe((number: number) => {
          console.log(number);
        });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
      //  observer.error('this package doesn\'t work');
      observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('this package doesn\'t work');
      }, 6000);
    });
    this.customObservableSubscription =  myObservable.subscribe((data: string) => {
      console.log(data);
    }, (error: string) => {
      console.log(error);
    }, () => {
      console.log('completed');
    });
  }

  ngOnDestroy(){
    this.numberObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }

}
