import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { StoredSpaceService } from 'src/app/services/stored-space.service';

@Component({
  selector: 'app-storige-space',
  templateUrl: './storige-space.component.html',
  styleUrls: ['./storige-space.component.css']
})
export class StorigeSpaceComponent implements OnInit {
  dataSource : any;
  showAddStorigeSpace: boolean = false;
  showEditStorigeSpace: boolean = false;
  name: FormControl;
  storigeSpaceType: FormControl;
  location: FormControl;
  id: FormControl;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<StorigeSpacesItem>;

  constructor(public storigeSpaceService: StoredSpaceService) {
    this.showAddStorigeSpace = false;
    this.showEditStorigeSpace = false;
    this.name = new FormControl();
    this.storigeSpaceType = new FormControl();
    this.location = new FormControl();
    this.id = new FormControl();
  }

  ngOnInit(): void {
    ///this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.storigeSpaceService.getStoredSpace().subscribe(res => {
      this.dataSource = res as StorigeSpacesItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addStorigeSpace()
  {
    let storigeSpace : StorigeSpacesItem=
    {
      ID: this.dataSource.lenght + 1000,
      Name: this.name.value,
      StorigeSpaceType: this.storigeSpaceType.value,
      Location: this.storigeSpaceType.value
    }
    console.log(storigeSpace);
    this.storigeSpaceService.addStoredSpace(storigeSpace).subscribe(res => console.log(res));
    this.showAddStorigeSpace = false;

    this.id.setValue('');
    this.name.setValue('');
    this.storigeSpaceType.setValue('');
    this.location.setValue('');
  }

  showAdd()
  {
    this.id.setValue('');
    this.name.setValue('');
    this.storigeSpaceType.setValue('');
    this.location.setValue('');
    this.showAddStorigeSpace = !this.showAddStorigeSpace;
    this.showEditStorigeSpace = false;
  }

  deleteStorigeSpace(){}

  showEdit(e : any)
  {
    console.log(e);
    this.id.setValue(e.id);
    this.name.setValue(e.name);
    this.storigeSpaceType.setValue(e.storageSpaceType);
    this.location.setValue(e.location);
    this.showEditStorigeSpace = true;
    this.showAddStorigeSpace = false;
  }
  editStorigeSpace(){
    if(this.showEditStorigeSpace)
    {
      this.name.setValue('');
      this.storigeSpaceType.setValue('');
      this.location.setValue('');

      this.name.setValue('');
      this.storigeSpaceType.setValue('');
      this.location.setValue('');
    }
    else
    {
      this.showEditStorigeSpace = true;
    }
  }
}

export interface StorigeSpacesItem {
  ID : number;
  Name: string;
  StorigeSpaceType : number;
  Location: string;
}
