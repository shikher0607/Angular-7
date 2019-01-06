import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OddComponent implements OnInit {

  @Input('oddnum') number: number;

  constructor() { }

  ngOnInit() {
  }

}
