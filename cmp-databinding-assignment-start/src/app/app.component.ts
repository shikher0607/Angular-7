import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];
  onClickStart(serverData: any){
    if (serverData % 2 === 0) {
      this.evenNumbers.push(serverData);
    }else{
      this.oddNumbers.push(serverData);
    }
  }

}
