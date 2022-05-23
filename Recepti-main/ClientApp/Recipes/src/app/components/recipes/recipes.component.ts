import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddRecipes: boolean = false;
  showEditRecipes: boolean = false;
  name: FormControl;
  difficulty: FormControl;
  numberServes: FormControl;
  minuteForPrepere: FormControl;
  text: FormControl;
  createAt: FormControl;
  iD: FormControl;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<RecipesItem>;
  recipes: any;

  //vidii ovu liniju iznad (21) i (29) liniju koda gde je (res: ShoppinglistItem[])
  constructor(public recipesService: RecipesService) {
    this.showAddRecipes = false;
    this.showEditRecipes = false;
    this.name = new FormControl();
    this.difficulty = new FormControl();
    this.numberServes = new FormControl();
    this.minuteForPrepere = new FormControl();
    this.text = new FormControl();
    this.createAt = new FormControl();
    this.iD = new FormControl();
  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.recipes.getRecipes().subscribe((res: RecipesItem[]) => {
      this.dataSource = res as RecipesItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addRecipes() {
    let recipes: RecipesItem =
    {
      ID: this.dataSource.lenght + 1000,
      Name: this.name.value,
      Difficulty: this.difficulty.value,
      NumberServes: this.numberServes.value,
      MinuteForPrepere: this.minuteForPrepere.value,
      Text: this.text.value,
      CreateAt: this.createAt.value
    }
    console.log(recipes);
    this.recipesService.addRecipes(recipes).subscribe(res => console.log(res));
    this.showAddRecipes = false;

    this.iD.setValue('');
    this.name.setValue('');
    this.difficulty.setValue('');
    this.numberServes.setValue('');
    this.minuteForPrepere.setValue('');
    this.text.setValue('');
    this.createAt.setValue('');
  }

  showAdd() {
    this.showAddRecipes = !this.showAddRecipes;
    this.iD.setValue('');
    this.name.setValue('');
    this.difficulty.setValue('');
    this.numberServes.setValue('');
    this.minuteForPrepere.setValue('');
    this.text.setValue('');
    this.createAt.setValue('');
    this.showEditRecipes = false;
  }

  deleteRecipes() { }

  showEdit(e : any) {
    console.log(e);
    this.iD.setValue(e.iD)
    this.name.setValue(e.name);
    this.difficulty.setValue(e.difficulty);
    this.numberServes.setValue(e.numberServes);
    this.minuteForPrepere.setValue(e.minuteForPrepere);
    this.text.setValue(e.text);
    this.createAt.setValue(e.createAt);
    this.showEditRecipes = true;
    this.showAddRecipes = false;
  }
  editRecipes()
  {
    if (this.showEditRecipes) {
      this.iD.setValue('');
      this.name.setValue('');
      this.difficulty.setValue('');
      this.numberServes.setValue('');
      this.minuteForPrepere.setValue('');
      this.text.setValue('');
      this.createAt.setValue('');
    }
    else
    {
      this.showEditRecipes = true;
    }
  }
}

export interface RecipesItem {
  ID: number;
  Name: string;
  Difficulty: number;
  NumberServes: number;
  MinuteForPrepere: number;
  Text: string;
  CreateAt: any;
}
