import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Article } from 'app/models/Article';
import { Emplacement } from 'app/models/Emplacement';
import { ArticleService } from 'services/article.service';
import { EmplacementService } from 'services/emplacement.service';
import { StockService } from 'services/stock.service'; 

@Component({
  selector: 'app-modal-stock',
  templateUrl: './modal-stock.component.html',
  styleUrls: ['./modal-stock.component.css']
})
export class ModalStockComponent {


  form!:FormGroup
  articles:Article[]=[];
  emplacements:Emplacement[]=[];
  loadingArt:boolean = true;
  loadingEmp:boolean = true;
  loadingSto:boolean = true;
  loading:boolean = true;

  //bach iwali boite (forcage de type =>MODAL)
  constructor(
    private AS:ArticleService,
    private ES:EmplacementService,
    private SS: StockService ,
    private dialogRef: MatDialogRef<ModalStockComponent>,
    @Inject(MAT_DIALOG_DATA) data:any
  )
  {
    this.AS.GetAllArticle().subscribe((res)=>{
      this.articles = res;
      this.loadingArt = false
      this.loading = this.loadingArt || this.loadingEmp || this.loadingSto;
      console.log("art");
    })

    this.ES.GetAllEmplacement().subscribe((res)=>{
      this.emplacements = res;
      this.loadingEmp = false
      this.loading = this.loadingArt || this.loadingEmp || this.loadingSto;
      console.log("emp");
    })

    if(data){
      this.SS.getStockById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          articleID: new FormControl(res.articleID),
          emplacementID:new FormControl(res.emplacementID),
          qtestock:new FormControl(res.qtestock),
        })
        this.loadingSto = false;
        this.loading = this.loadingArt || this.loadingEmp || this.loadingSto;
        console.log("sto");
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          articleID: new FormControl(null),
          emplacementID:new FormControl(null),
          qtestock:new FormControl(null),
        })
        this.loadingSto = false;
        this.loading = this.loadingArt || this.loadingEmp || this.loadingSto;
        console.log("sto");
    }
    
  }



  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
