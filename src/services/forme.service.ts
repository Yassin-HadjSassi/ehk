import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forme } from 'app/models/Forme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormeService {

  constructor(private http:HttpClient) {
    
  }

  GetAllForme():Observable<Forme[]>
  {
    //mode get
    return this.http.get<Forme[]>
    ('http://127.0.0.1:8000/api/formes')
  }

  addForme(x:Forme):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/formes',x)
  }

  getFormeById(id:string):Observable<Forme>
  {
    return this.http.get<Forme>
    (`http://127.0.0.1:8000/api/formes/${id}`)
  }

  updateForme(f:Forme,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/formes/${id}`,f)
  }

  deleteForme(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/formes/${id}`)
  }
}
