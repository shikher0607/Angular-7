import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm
  defaultDropdown = "basic";


  onSubmit(){
    console.log(this.signupForm);
    console.log(this.signupForm.value.id, this.signupForm.value.password, this.signupForm.value.subscription);
  }

}
