import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {
    
  }

  GetAllUser():Observable<User[]>
  {
    //mode get
    return this.http.get<User[]>
    ('http://127.0.0.1:8000/api/users')
  }

  addUser(x:User):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/users',x)
  }

  getUserById(id:string):Observable<User>
  {
    return this.http.get<User>
    (`http://127.0.0.1:8000/api/users/${id}`)
  }

  updateUser(f:User,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/users/${id}`,f)
  }

  deleteUser(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/users/${id}`)
  }
}
