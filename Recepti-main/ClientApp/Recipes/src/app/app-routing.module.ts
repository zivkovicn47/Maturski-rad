import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodsComponent } from './components/foods/foods.component';
import { FoodtypeComponent } from './components/foodtype/foodtype.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { LoginComponent } from './components/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListItemsComponent } from './components/shopping-list-items/shopping-list-items.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { StoredMaterialsComponent } from './components/stored-materials/stored-materials.component';
import { StorigeSpaceComponent } from './components/storige-space/storige-space.component';
import { UsedRecipesComponent } from './components/used-recipes/used-recipes.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: RecipesComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'storigespace', component: StorigeSpaceComponent },
  { path: 'user', component: UserComponent },
  { path: 'usedrecipes', component: UsedRecipesComponent },
  { path: 'storedmaterials', component: StoredMaterialsComponent },
  { path: 'shoppinglist', component: ShoppingListsComponent },
  { path: 'shoppinglistitems', component: ShoppingListItemsComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'foodtype', component: FoodtypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
