import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  lastNumber = 0;
  interval;

  @Output() startClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clickStart(){
    this.interval = setInterval(() => {
      this.startClicked.emit(this.lastNumber + 1);
      this.lastNumber ++;
    }, 1000);
  }

  clickStop(){
    clearInterval(this.interval);
  }

}
