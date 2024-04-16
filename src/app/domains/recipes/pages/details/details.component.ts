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

    // Si no devuelve un elemento Recipe por algun fallo de base de datos o lo que sea, devuelve algo nulo
    recipeDetails = signal<Recipe | null>(null);

    ngOnInit() {
      if (this.id){ 
        this.recipeService.getRecipesById(this.id).subscribe({
          next: (data) => {
            console.log(data);
            this.recipeDetails.set(data[0]); // [0] porque Recipe es un array en la BBDD
          }
        })
      }
    }

}
