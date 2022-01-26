import { EventEmitter } from '@angular/core';
import { Ingredient } from "src/shared/ingredient.model";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes  ',10),
  ];

  getIngredients(){
    return this.ingredients.slice()
  }
  onIngredientAdded(ingredient: Ingredient){ 
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}