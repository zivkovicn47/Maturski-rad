import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UsedRecipesService } from 'src/app/services/usedrecipes.service';

@Component({
  selector: 'app-used-recipes',
  templateUrl: './used-recipes.component.html',
  styleUrls: ['./used-recipes.component.css']
})
export class UsedRecipesComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddUsedRecipes: boolean = false;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<UsedRecipesItem>;

  constructor(public usedRecipesService: UsedRecipesService) {
    this.showAddUsedRecipes = false;
  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.usedRecipesService.getUsedRecipes().subscribe(res => {
      this.dataSource = res as UsedRecipesItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addUsedRecipes() {

  }

  showAdd() {
    this.showAddUsedRecipes = !this.showAddUsedRecipes;
  }
}
export interface UsedRecipesItem {
  ID: number;
  UserID: number;
  RecipeID: number;
  UsedTime: any;
}
