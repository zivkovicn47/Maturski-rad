import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddIngredients: boolean = false;
  showEditIngredients: boolean = false;
  foodID: FormControl;
  recipeID: FormControl;
  quantity: FormControl;
  iD: FormControl;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<IngredientsItem>;
  ingredients: any;

  //vidii ovu liniju iznad (21) i (29) liniju koda gde je (res: ShoppinglistItem[])
  constructor(public ingredientsService: IngredientsService) {
    this.showAddIngredients = false;
    this.showEditIngredients = false;
    this.foodID = new FormControl();
    this.recipeID = new FormControl();
    this.quantity = new FormControl();
    this.iD = new FormControl();
  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.ingredients.getIngredients().subscribe((res: IngredientsItem[]) => {
      this.dataSource = res as IngredientsItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addIngredients() {
    let ingredients: IngredientsItem =
    {
      ID: this.dataSource.lenght + 1000,
      FoodID: this.foodID.value,
      RecipeID: this.recipeID.value,
      Quantity: this.quantity.value
    }
    console.log(ingredients);
    this.ingredientsService.addIngredients(ingredients).subscribe(res => console.log(res));
    this.showAddIngredients = false;

    this.iD.setValue('');
    this.foodID.setValue('');
    this.recipeID.setValue('');
    this.quantity.setValue('');
  }

  showAdd() {
    this.showAddIngredients = !this.showAddIngredients;
    this.iD.setValue('');
    this.foodID.setValue('');
    this.recipeID.setValue('');
    this.quantity.setValue('');
    this.showEditIngredients = false;
  }

  deleteIngredients() { }

  showEdit(e: any) {
    console.log(e);
    this.iD.setValue(e.iD);
    this.foodID.setValue(e.foodID);
    this.recipeID.setValue(e.recipeID);
    this.quantity.setValue(e.quantity);
    this.showEditIngredients = true;
    this.showAddIngredients = false;
  }
  editIngredients() {
    if (this.showEditIngredients) {
      this.iD.setValue('');
      this.foodID.setValue('');
      this.recipeID.setValue('');
      this.quantity.setValue('');
    }
    else {
      this.showEditIngredients = true;
    }
  }
}
export interface IngredientsItem {
  ID: number;
  FoodID: number;
  RecipeID: number;
  Quantity: number;
}
