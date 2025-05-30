import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderService } from 'services/order.service'; 

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent {


  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private OS: OrderService ,private dialogRef: MatDialogRef<ModalOrderComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      this.OS.getOrderById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          userID: new FormControl(res.userID),
          status:new FormControl(res.status),
          date:new FormControl(res.date),
        })
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          userID: new FormControl(null),
          status:new FormControl(null),
          date:new FormControl(null),
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
