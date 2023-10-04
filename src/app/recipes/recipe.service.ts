import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredents.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Paneer Butter Masala',
      'Containes Protein in the form of Paneer',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg',
      [
        new Ingredient('Paneer', 100),
        new Ingredient('Tomato', 6),
        new Ingredient('Onions', 10),
      ]
    ),
    new Recipe(
      'Hyderabadi Dum Biryani',
      'is an aromatic, mouth watering and authentic Indian dish',
      'https://imgmedia.lbb.in/media/2020/05/5ebbf3412b08841c1841b0f6_1589375809619.jpg',
      [
        new Ingredient('Chicken', 100),
        new Ingredient('Basmati Rice', 6),
        new Ingredient('Onions', 10),
      ]
    ),
  ];

  getRecpie() {
    return this.recipes.slice();
  }
}
