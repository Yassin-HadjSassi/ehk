import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'app/models/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) {
    
  }

  GetAllOrder():Observable<Order[]>
  {
    //mode get
    return this.http.get<Order[]>
    ('http://127.0.0.1:8000/api/orders')
  }

  addOrder(x:Order):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/orders',x)
  }

  getOrderById(id:string):Observable<Order>
  {
    return this.http.get<Order>
    (`http://127.0.0.1:8000/api/orders/${id}`)
  }

  updateOrder(f:Order,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/orders/${id}`,f)
  }

  deleteOrder(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/orders/${id}`)
  }
}
