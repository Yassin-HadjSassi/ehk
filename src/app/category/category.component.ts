import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'app/models/Category';
import { CategoryService } from 'services/category.service';
import { ModalCategoryComponent } from 'app/modal-category/modal-category.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from 'app/confirm/confirm.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Category>;
  loaded = false;
  displayedColumns: string[] = ['id','refcategorie', 'nomcategorie','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private CS: CategoryService, private dialog:MatDialog) {
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
    this.CS.GetAllCategory().subscribe((res) => {
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
    let dialogRef = this.dialog.open(ModalCategoryComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res.nomcategorie != null){
        this.CS.addCategory(res).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

    openEdit(id : string):void{
    let x = new MatDialogConfig();
    x.data = id
    let dialogRef = this.dialog.open(ModalCategoryComponent,x)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.CS.updateCategory(res,id).subscribe(() => {
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
        this.CS.deleteCategory(id).subscribe(()=>{
          this.fetchData()
        })
      }
    })
  }
}