import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ShoppinglistitemsService } from 'src/app/services/shoppinglistitems.service';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.component.html',
  styleUrls: ['./shopping-list-items.component.css']
})
export class ShoppingListItemsComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddShoppinglistitems: boolean = false;
  showEditShoppinglistitems: boolean = false;
  foodID: FormControl;
  shoppingListID: FormControl;
  isPurchased: FormControl;
  quantity: FormControl;
  id: FormControl;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<ShoppinglistitemsItem>;
  shoppinglistitems: any;

  constructor(public shoppinglistitemsService: ShoppinglistitemsService) {
    this.showAddShoppinglistitems = false;
    this.showEditShoppinglistitems = false;
    this.foodID = new FormControl;
    this.shoppingListID = new FormControl();
    this.isPurchased = new FormControl();
    this.quantity = new FormControl();
    this.id = new FormControl();
  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.shoppinglistitems.getShoppinglistitems().subscribe((res: ShoppinglistitemsItem[]) => {
      this.dataSource = res as ShoppinglistitemsItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addShoppinglistitems() {
    let shoppinglistitems: ShoppinglistitemsItem =
    {
      ID: this.dataSource.lenght + 1000,
      FoodID: this.foodID.value,
      ShoppingListID: this.shoppingListID.value,
      IsPurchased: this.isPurchased.value,
      Quantity: this.quantity.value
    }
    console.log(shoppinglistitems);
    this.shoppinglistitemsService.addShoppinglistitems(shoppinglistitems).subscribe(res => console.log(res));
    this.showAddShoppinglistitems = false;

    this.id.setValue('');
    this.foodID.setValue('');
    this.shoppingListID.setValue('');
    this.isPurchased.setValue('')
    this.quantity.setValue('');
  }

  showAdd() {
    this.showAddShoppinglistitems = !this.showAddShoppinglistitems;
    this.id.setValue('');
    this.foodID.setValue('');
    this.shoppingListID.setValue('');
    this.isPurchased.setValue('')
    this.quantity.setValue('');
    this.showEditShoppinglistitems = false;
  }

  deleteShoppinglistitems() { }

  showEdit(e: any) {
    console.log(e);
    this.id.setValue(e.id);
    this.foodID.setValue(e.foodID);
    this.shoppingListID.setValue(e.shoppingListID);
    this.isPurchased.setValue(e.isPurchased);
    this.quantity.setValue(e.quantity);
    this.showAddShoppinglistitems = false;
    this.showEditShoppinglistitems = true;
  }
  editShoppinglistitems() {
    if (this.showEditShoppinglistitems) {
      this.foodID.setValue('');
      this.shoppingListID.setValue('');
      this.isPurchased.setValue('')
      this.quantity.setValue('');
    }
    else {
      this.showEditShoppinglistitems = true;
    }
  }
}
export interface ShoppinglistitemsItem {
  ID: number;
  FoodID: number;
  ShoppingListID: number;
  IsPurchased: boolean;
  Quantity: number;
}
