import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'app/models/User';
import { UserService } from 'services/user.service';
import { ModalUserComponent } from 'app/modal-user/modal-user.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from 'app/confirm/confirm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<User>;
  loaded = false;
  displayedColumns: string[] = ['id','name', 'email','role'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private US: UserService, private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.fetchData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchData() {
    this.US.GetAllUser().subscribe((res) => {
      this.dataSource.data = res;
      this.loaded = true;

      if (this.sort && this.paginator) {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }, 0);
      }
    });
  }

    open(){
    let dialogRef = this.dialog.open(ModalUserComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res && res.name != null){
        this.loaded = false;
        this.US.addUser(res).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

    openEdit(id : string):void{
    let x = new MatDialogConfig();
    x.data = id
    let dialogRef = this.dialog.open(ModalUserComponent,x)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.loaded = false;
        this.US.updateUser(res,id).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

  deleteEvt(id:string)
  {
    let dialogRef = this.dialog.open(ConfirmComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.loaded = false;
        this.US.deleteUser(id).subscribe(()=>{
          this.fetchData()
        })

      }
    })
  }
}