import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { StoredMaterialsService } from 'src/app/services/stored-materials.service';

@Component({
  selector: 'app-stored-materials',
  templateUrl: './stored-materials.component.html',
  styleUrls: ['./stored-materials.component.css']
})
export class StoredMaterialsComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'storigeSpaceType', 'location'];
  dataSource: any;
  showAddStoredMaterials: boolean = false;
  showEditStoredMaterials: boolean = false;
  iD: FormControl;
  storedAt: FormControl;
  storedSpaceID: FormControl;
  foodID: FormControl;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<StoredMaterialsItem>;

  constructor(public storedMaterialsService: StoredMaterialsService) {
    this.showAddStoredMaterials = false;
    this.showEditStoredMaterials = false;
    this.iD = new FormControl();
    this.storedAt = new FormControl();
    this.storedSpaceID = new FormControl();
    this.foodID = new FormControl();

  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.storedMaterialsService.getStoredMaterials().subscribe(res => {
      this.dataSource = res as StoredMaterialsItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addStoredMaterials() {
    let storedMaterials: StoredMaterialsItem =
    {
      ID: this.dataSource.lenght + 1000,
      StoredAt: this.storedAt.value,
      FoodID: this.foodID.value,
      StoredSpaceID: this.storedSpaceID.value
    }
    console.log(storedMaterials);
    this.storedMaterialsService.addStoredMaterials(storedMaterials).subscribe(res => console.log(res));
    this.showAddStoredMaterials = false;

    this.iD.setValue('');
    this.storedAt.setValue('');
    this.foodID.setValue('');
    this.storedSpaceID.setValue('');
  }

  showAdd() {
    this.showAddStoredMaterials = true;
    this.iD.setValue('');
    this.storedAt.setValue('');
    this.foodID.setValue('');
    this.storedSpaceID.setValue('');
    this.showEditStoredMaterials = false;
  }
  deleteStoredMaterials() { }
  showEdit(e: any) {
    console.log(e);
    this.iD.setValue(e.iD);
    this.storedAt.setValue(e.storedAt);
    this.foodID.setValue(e.foodID);
    this.storedSpaceID.setValue(e.storedSpaceID);
    this.showEditStoredMaterials = true;
    this.showAddStoredMaterials = false;
  }
  editStoredMaterials() {
    if (this.showEditStoredMaterials) {
      this.storedAt.setValue('');
      this.foodID.setValue('');
      this.storedSpaceID.setValue('');
           
    }
    else {
      this.showEditStoredMaterials = true;
    }
  }
}
export interface StoredMaterialsItem {
  ID: number;
  StoredAt: any;
  StoredSpaceID: number;
  FoodID: number;
}
