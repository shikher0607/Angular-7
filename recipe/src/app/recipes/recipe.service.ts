import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService){}

   private recipes: Recipe[] = [
        new Recipe('Pizza', 'Pizza is Nice', 'https://upload.wikimedia.org/wikipedia/commons/6/61/Pizza_Prosciutto.jpg',[
            new Ingredient('Dough', 1),
            new Ingredient('Sauce', 1)
        ]),
        new Recipe('Fries', 'So are Fries', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Shoestring_fries%2C_garlic%2C_homemade_blue_cheese_dressing%2C_with_some_spicy_sauce.jpg',[
            new Ingredient('Potato', 3),
            new Ingredient('Salt', 1)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
      
      getRecipe(id: number){
          return  this.recipes[id];
      }

      addIngredientsToSl(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }
}