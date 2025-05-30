import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StockService } from 'services/stock.service'; 

@Component({
  selector: 'app-modal-stock',
  templateUrl: './modal-stock.component.html',
  styleUrls: ['./modal-stock.component.css']
})
export class ModalStockComponent {


  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private SS: StockService ,private dialogRef: MatDialogRef<ModalStockComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      this.SS.getStockById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          articleID: new FormControl(res.articleID),
          emplacementID:new FormControl(res.emplacementID),
           qtestock:new FormControl(res.qtestock),
        })
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          articleID: new FormControl(null),
          emplacementID:new FormControl(null),
          qtestock:new FormControl(null),
        })
    }
  }



  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
