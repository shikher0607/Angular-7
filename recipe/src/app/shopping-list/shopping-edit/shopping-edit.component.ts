import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputref: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListservice: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputref.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListservice.addIngredient(newIngredient);
  }

}
