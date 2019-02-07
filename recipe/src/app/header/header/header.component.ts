import { Component, OnInit } from '@angular/core';
import { DataStorage } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorage) { }

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

}
