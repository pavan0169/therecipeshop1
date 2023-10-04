import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredents.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  constructor(private slService: ShoppingListService) {}

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.slService.addIngredient(
      new Ingredient(nameInput.value, parseInt(amountInput.value))
    );
  }
}
