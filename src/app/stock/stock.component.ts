import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from 'app/models/Stock';
import { StockService } from 'services/stock.service';
import { ModalStockComponent } from 'app/modal-stock/modal-stock.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from 'app/confirm/confirm.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Stock>;
  loaded = false;
  displayedColumns: string[] = ['id','articleID', 'emplacementID','qtestock','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private SS: StockService, private dialog:MatDialog) {
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
    this.SS.GetAllStock().subscribe((res) => {
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
    let dialogRef = this.dialog.open(ModalStockComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res && res.articleID != null){
        this.loaded = false;
        this.SS.addStock(res).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

    openEdit(id : string):void{
    let x = new MatDialogConfig();
    x.data = id
    let dialogRef = this.dialog.open(ModalStockComponent,x)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.loaded = false;
        this.SS.updateStock(res,id).subscribe(() => {
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
        this.SS.deleteStock(id).subscribe(()=>{
          this.fetchData()
        })
      }
    })
  }
}