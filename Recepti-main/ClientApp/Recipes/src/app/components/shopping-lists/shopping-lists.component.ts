import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddShoppinglist: boolean = false;
  showEditShoppingList: boolean = false;
  name: FormControl;
  createdAt: FormControl;
  id: FormControl;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<ShoppinglistItem>;
    shoppinglist: any;

  //vidii ovu liniju iznad (21) i (29) liniju koda gde je (res: ShoppinglistItem[])
  constructor(public shoppinglistService: ShoppinglistService) {
    this.showAddShoppinglist = false;
    this.showEditShoppingList = false;
    this.name = new FormControl();
    this.createdAt = new FormControl();
    this.id = new FormControl();
  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.shoppinglistService.getShoppinglist().subscribe(res=> {
      this.dataSource = res as ShoppinglistItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addShoppinglist() {
    let storigeSpace: ShoppinglistItem =
    {
      ID: this.dataSource.lenght + 1000,
      Name: this.name.value,
      CreatedAt: this.createdAt.value
    }
    console.log(storigeSpace);
    this.shoppinglistService.addShoppinglist(storigeSpace).subscribe(res => console.log(res));
    this.showAddShoppinglist = false;

    this.id.setValue('');
    this.name.setValue('');
    this.createdAt.setValue('');
  }

  showAdd() {
    this.id.setValue('');
    this.name.setValue('');
    this.createdAt.setValue('');
    this.showAddShoppinglist = !this.showAddShoppinglist;
    this.showEditShoppingList = false;
  }

  editStorigeSpace() {
    if (this.showEditShoppingList) {
      this.name.setValue('');
      this.createdAt.setValue('');

    }
    else {
      this.showEditShoppingList = true;
    }
  }
}
export interface ShoppinglistItem {
  ID: number;
  Name: string;
  CreatedAt: any;
}
