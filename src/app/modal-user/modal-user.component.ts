import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'services/user.service'; 

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {


  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private US: UserService ,private dialogRef: MatDialogRef<ModalUserComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      // this.US.getUserById(data).subscribe((res)=>{
      //   console.log(res)
      //   this.form = new FormGroup({
      //     id: new FormControl(res.id),
      //     name: new FormControl(res.name),
      //     email:new FormControl(res.email),
      //   })
      // })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          name: new FormControl(null),
          email:new FormControl(null),
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
