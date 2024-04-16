import { Component, Input, inject, input, signal } from '@angular/core';
import { RecipeService } from '../../../shared/services/recipe.service';
import { Recipe } from '../../../shared/models/recipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent {

    // La ? es para indicar que puede o no venir un Input
    @Input() id?: string;

    private recipeService = inject(RecipeService);
    recipe = signal<Recipe | null>(null);

    ngOnInit() {
      console.log(this.id);
      if (this.id){ 
        this.recipeService.getRecipesById(this.id);
      }
    }

}
