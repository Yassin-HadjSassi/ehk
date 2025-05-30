import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmplacementService } from 'services/emplacement.service'; 

@Component({
  selector: 'app-modal-emplacement',
  templateUrl: './modal-emplacement.component.html',
  styleUrls: ['./modal-emplacement.component.css']
})
export class ModalEmplacementComponent {


  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private sss: EmplacementService ,private dialogRef: MatDialogRef<ModalEmplacementComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      this.sss.getEmplacementById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          pos: new FormControl(res.pos),
        })
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          pos: new FormControl(null),
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
