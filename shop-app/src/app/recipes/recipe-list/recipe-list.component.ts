import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [];

  constructor(private recipeService:RecipeService, private router:Router, private activatedRoute: ActivatedRoute){}
  ngOnInit():void {
    this.recipes = this.recipeService.getRecipes()
  }
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe)
  // }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.activatedRoute})
  }

} 