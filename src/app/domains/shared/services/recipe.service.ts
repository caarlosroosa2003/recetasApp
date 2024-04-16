import { Injectable, signal } from '@angular/core';
import { environment } from './environment'; 
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Observable, from } from 'rxjs';
import { Recipe } from '../models/recipe';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private supabase: SupabaseClient;

  recipeList = signal<Recipe[]>([]);
  recipeList$ = toObservable(this.recipeList); // $ Para convertir cualquier señal en observable

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

getRecipes() {
  from(this.supabase
    .from('recipes')
    .select('*')
    .then(response => {
      let result = response.data as Recipe[];
      this.recipeList.set(result);
    }))
}

  addRecipe(newRecipe: Recipe): Observable<Recipe[]> {
    return from(this.supabase
      .from('recipes')
      .insert([
        { name: newRecipe.name, difficulty: newRecipe.difficulty }
      ])
      .select()
      .then(response => {
         let result = response.data as Recipe[];
         this.recipeList.set(result);
         return result;
        }))
  }

  getRecipesById(id: string): Observable<Recipe[]> {
    return from(this.supabase
      .from('recipes')
      .select('*')
      .eq('id', id)
      .then(response => response.data as Recipe[]));
  }

}
