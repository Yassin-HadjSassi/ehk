import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emplacement } from 'app/models/Emplacement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplacementService {

  constructor(private http:HttpClient) {
    
  }

  GetAllEmplacement():Observable<Emplacement[]>
  {
    //mode get
    return this.http.get<Emplacement[]>
    ('http://127.0.0.1:8000/api/emplacements')
  }

  addEmplacement(x:Emplacement):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/emplacements',x)
  }

  getEmplacementById(id:string):Observable<Emplacement>
  {
    return this.http.get<Emplacement>
    (`http://127.0.0.1:8000/api/emplacements/${id}`)
  }

  updateEmplacement(f:Emplacement,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/emplacements/${id}`,f)
  }

  deleteEmplacement(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/emplacements/${id}`)
  }
}
