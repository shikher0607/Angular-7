import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges {

 @Input('srvElement') element: {
    name: string,
    type: string,
    content: string
  };

  constructor() {
    console.log('constructor called');
   }

  ngOnInit() {
    console.log('ngonit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called');
    console.log(changes);
  }

}
