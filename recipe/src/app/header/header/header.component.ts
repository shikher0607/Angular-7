import { Component, OnInit } from '@angular/core';
import { DataStorage } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorage, private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipes().subscribe((response: Response) => {
      console.log(response.json());
    }, (err) => {
      console.log(err);
    });
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  logout(){
    this.authService.logOut();
  }

}
