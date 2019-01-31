import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListservice: ShoppingListService) { }

  ngOnInit() {
    this.subscription =  this.shoppingListservice.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editItem = this.shoppingListservice.getIngredient(index);
      this.shoppingListForm.form.patchValue({
        name: this.editItem['name'],
        amount: this.editItem['amount']
      });
    });
  }

  onAddItem(form: NgForm){
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingListservice.updateIngredeint(this.editedItemIndex, newIngredient);
    }else {
      this.shoppingListservice.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onClear(){
    this.shoppingListForm.setValue({
      name: "",
      amount: ""
    });
    this.editMode = false;
  }

  onDelete(){
    this.onClear();
    this.shoppingListservice.deleteIngredients(this.editedItemIndex);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
