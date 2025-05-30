import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Emplacement } from 'app/models/Emplacement';
import { EmplacementService } from 'services/emplacement.service';
import { ModalEmplacementComponent } from 'app/modal-emplacement/modal-emplacement.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from 'app/confirm/confirm.component';

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.css']
})
export class EmplacementComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Emplacement>;
  loaded = false;
  displayedColumns: string[] = ['id','pos','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sss: EmplacementService, private dialog:MatDialog) {
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
    this.sss.GetAllEmplacement().subscribe((res) => {
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
    let dialogRef = this.dialog.open(ModalEmplacementComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res && res.pos != null){
        this.loaded = false;
        this.sss.addEmplacement(res).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

    openEdit(id : string):void{
    let x = new MatDialogConfig();
    x.data = id
    let dialogRef = this.dialog.open(ModalEmplacementComponent,x)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.loaded = false;
        this.sss.updateEmplacement(res,id).subscribe(() => {
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
        this.sss.deleteEmplacement(id).subscribe(()=>{
          this.fetchData()
        })
      }
    })
  }
}