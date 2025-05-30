import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'app/models/Category';
import { Forme } from 'app/models/Forme';
import { ArticleService } from 'services/article.service'; 
import { CategoryService } from 'services/category.service';
import { FormeService } from 'services/forme.service';

@Component({
  selector: 'app-modal-article',
  templateUrl: './modal-article.component.html',
  styleUrls: ['./modal-article.component.css']
})
export class ModalArticleComponent {


  form!:FormGroup
  categories:Category[]=[];
  formes:Forme[]=[];
  loadingCat:boolean = true;
  loadingFor:boolean = true;
  loadingArt:boolean = true;
  loading:boolean = true;

  
  //bach iwali boite (forcage de type =>MODAL)

  chechLoading(){
    this.loading = this.loadingCat || this.loadingFor || this.loadingArt;
  }

  constructor(
    private AS: ArticleService ,
    private dialogRef: MatDialogRef<ModalArticleComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
    private CS:CategoryService,
    private FS:FormeService,
  ){

      this.CS.GetAllCategory().subscribe((res)=>{
      this.categories = res;
      this.loadingCat = false;
      this.chechLoading();
    })

    this.FS.GetAllForme().subscribe((res)=>{
      this.formes = res;
      this.loadingFor = false
      this.chechLoading();
    })

    if(data){
      this.AS.getArticleById(data).subscribe((res)=>{
        console.log(res)
        this.form = new FormGroup({
          id: new FormControl(res.id),
          refEHK: new FormControl(res.refEHK),
          designation:new FormControl(res.designation),
          prixHT:new FormControl(res.prixHT),
          imageart:new FormControl(res.imageart),
          categorieID:new FormControl(res.categorieID),
          formeID:new FormControl(res.formeID),
        })
        this.loadingArt = false;
        this.chechLoading();
      })
    }
    else{
        this.form = new FormGroup({
          id:new FormControl(null),
          refEHK: new FormControl(null),
          designation:new FormControl(null),
          prixHT:new FormControl(null),
          imageart:new FormControl(null),
          categorieID:new FormControl(null),
          formeID:new FormControl(null),
        })
        this.loadingArt = false;
        this.chechLoading();
    }
  }



  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
