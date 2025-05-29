import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'app/models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {
    
  }

  GetAllCategory():Observable<Category[]>
  {
    //mode get
    return this.http.get<Category[]>
    ('http://127.0.0.1:8000/api/categories')
  }

  addCategory(x:Category):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/categories',x)
  }

  getCategoryById(id:string):Observable<Category>
  {
    return this.http.get<Category>
    (`http://127.0.0.1:8000/api/categories/${id}`)
  }

  updateCategory(f:Category,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/categories/${id}`,f)
  }

  deleteCategory(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/categories/${id}`)
  }
}
