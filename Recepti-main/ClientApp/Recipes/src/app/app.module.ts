import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { StorigeSpaceComponent } from './components/storige-space/storige-space.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { UsedRecipesComponent } from './components/used-recipes/used-recipes.component';
import { StoredMaterialsComponent } from './components/stored-materials/stored-materials.component';
import { FoodsComponent } from './components/foods/foods.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        StorigeSpaceComponent,
        RecipesComponent,
        ShoppingListsComponent,
        UsedRecipesComponent,
        StoredMaterialsComponent,
        FoodsComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
