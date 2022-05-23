import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FoodtypeService } from 'src/app/services/foodtype.service';

@Component({
  selector: 'app-foodtype',
  templateUrl: './foodtype.component.html',
  styleUrls: ['./foodtype.component.css']
})
export class FoodtypeComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddFoodtype: boolean = false;
  showEditFoodtype: boolean = false;
  iD: FormControl;
  name: FormControl;
  unit: FormControl;
  defaultQuantity: FormControl;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<FoodtypeItem>;
  foodtype: any;

  //vidii ovu liniju iznad (21) i (29) liniju koda gde je (res: ShoppinglistItem[])
  constructor(public foodtypeService: FoodtypeService) {
    this.showAddFoodtype = false;
    this.showEditFoodtype = false;
    this.iD = new FormControl();
    this.name = new FormControl();
    this.unit = new FormControl();
    this.defaultQuantity = new FormControl();
  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.foodtype.getFoodtype().subscribe((res: FoodtypeItem[]) => {
      this.dataSource = res as FoodtypeItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addFoodtype() {

  }

  showAdd() {
    this.showAddFoodtype = !this.showAddFoodtype;
  }
}
export interface FoodtypeItem {
  ID: number;
  Name: string;
  Unit: string;
  DefaultQuantity: string;
}
