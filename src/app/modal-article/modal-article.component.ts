import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticleService } from 'services/article.service'; 

@Component({
  selector: 'app-modal-article',
  templateUrl: './modal-article.component.html',
  styleUrls: ['./modal-article.component.css']
})
export class ModalArticleComponent {


  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private AS: ArticleService ,private dialogRef: MatDialogRef<ModalArticleComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      this.AS.getArticleById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          refEHK: new FormControl(res.refEHK),
          designation:new FormControl(res.designation),
        })
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          refEHK: new FormControl(null),
          designation:new FormControl(null),
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
