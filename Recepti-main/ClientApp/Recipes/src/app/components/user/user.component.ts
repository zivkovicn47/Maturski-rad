import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //displayedColumns: string[] = ['id', 'name', 'user', 'location'];
  dataSource: any;
  showAddUser: boolean = false;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: false })
  // sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<UserItem>;

  constructor(public userService: UserService) {
    this.showAddUser = false;
  }

  ngOnInit(): void {
    //this.dataSource = new StorigeSpaceDataSource(this.storigeSpaceService);
    this.userService.getUser().subscribe(res => {
      this.dataSource = res as UserItem[];
      console.log(res);
    });
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.ngOnInit();
  }

  addUser() {

  }

  showAdd() {
    this.showAddUser = !this.showAddUser;
  }
}
export interface UserItem {
  ID: number;
  Name: string;
  LastName: string;
  Email: string;
  UserName: string;
}
