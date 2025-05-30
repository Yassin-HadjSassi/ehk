import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormeService } from 'services/forme.service';

@Component({
  selector: 'app-modal-forme',
  templateUrl: './modal-forme.component.html',
  styleUrls: ['./modal-forme.component.css']
})

export class ModalFormeComponent {


  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private FS: FormeService ,private dialogRef: MatDialogRef<ModalFormeComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      this.FS.getFormeById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          refforme: new FormControl(res.refforme),
          designation:new FormControl(res.designation),
          imageforme:new FormControl(res.imageforme),
        })
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          refforme: new FormControl(null),
          designation:new FormControl(null),
          imageforme: new FormControl(null),
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
