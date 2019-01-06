import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EvenComponent implements OnInit {

 @Input('evenNum') evenNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
