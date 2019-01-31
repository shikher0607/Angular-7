import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectStatus = ['stable', 'critical', 'finished'];
  signupForm: FormGroup;
  
ngOnInit(){
  this.signupForm = new FormGroup({
      'name': new FormControl(null,[Validators.required, this.forbiddenNames], this.forbiddenNamesAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
  });
}

  onSubmit(){
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if (control.value === 'test') {
      return {'forbiddenName': true};
    }
    return null;
  }

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable <any>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'testproject') {
          resolve({'forbiddenName': true});
        }else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
