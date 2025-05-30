import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderLine } from 'app/models/OrderLine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private http:HttpClient) {
    
  }

  GetAllOrderLine():Observable<OrderLine[]>
  {
    //mode get
    return this.http.get<OrderLine[]>
    ('http://127.0.0.1:8000/api/orderlines')
  }

  addOrderLine(x:OrderLine):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/orderlines',x)
  }

  getOrderLineById(id:string):Observable<OrderLine>
  {
    return this.http.get<OrderLine>
    (`http://127.0.0.1:8000/api/orderlines/${id}`)
  }

  updateOrderLine(f:OrderLine,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/orderlines/${id}`,f)
  }

  deleteOrderLine(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/orderlines/${id}`)
  }
}

