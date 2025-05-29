import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'services/category.service'; 

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.css']
})
export class ModalCategoryComponent {


  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private CS: CategoryService ,private dialogRef: MatDialogRef<ModalCategoryComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      this.CS.getCategoryById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          refcategorie: new FormControl(res.refcategorie),
          nomcategorie:new FormControl(res.nomcategorie),
        })
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          refcategorie: new FormControl(null),
          nomcategorie:new FormControl(null),
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
