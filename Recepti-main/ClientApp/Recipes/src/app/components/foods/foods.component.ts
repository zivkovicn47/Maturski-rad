import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddFood: boolean = false;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<FoodItem>;
  food: any;

  //vidii ovu liniju iznad (21) i (29) liniju koda gde je (res: ShoppinglistItem[])
  constructor(public foodsService: FoodsService) {
    this.showAddFood = false;
  }

  ngOnInit(): void {
    this.food.getFood().subscribe((res: FoodItem[]) => {
      this.dataSource = res as FoodItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addFood() {

  }

  showAdd() {
    this.showAddFood = !this.showAddFood;
  }
}
export interface FoodItem {
  ID: number;
  Name: string;
  FoodType: any;
}
