import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'app/models/Article';
import { ArticleService } from 'services/article.service';
import { ModalArticleComponent } from 'app/modal-article/modal-article.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from 'app/confirm/confirm.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Article>;
  loaded = false;
  displayedColumns: string[] = ['id','refEHK', 'designation','prixHT','imageart','categorieID','formeID','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private AS: ArticleService, private dialog:MatDialog) {
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
    this.AS.GetAllArticle().subscribe((res) => {
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
    let dialogRef = this.dialog.open(ModalArticleComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res && res.refEHK != null){
        this.loaded = false;
        this.AS.addArticle(res).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

    openEdit(id : string):void{
    let x = new MatDialogConfig();
    x.data = id
    let dialogRef = this.dialog.open(ModalArticleComponent,x)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.loaded = false;
        this.AS.updateArticle(res,id).subscribe(() => {
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
        this.AS.deleteArticle(id).subscribe(()=>{
          this.fetchData()
        })
      }
    })
  }
}