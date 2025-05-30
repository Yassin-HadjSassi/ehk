import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderStat } from 'app/models/orderStat';
import { StockStat } from 'app/models/StockStat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http:HttpClient) {
    
  }

  CheckOrder(id:string):Observable<OrderStat>{
    return this.http.get<OrderStat>
    (`http://127.0.0.1:8000/api/stocks/checkorder/${id}`)
  }
  ProcessOrder(orderStat : OrderStat):Observable<any>{
    return this.http.post<any>
    (`http://127.0.0.1:8000/api/stocks/processorder`,orderStat)
  }
  GetManqueStock(n : number):Observable<StockStat>{
    return this.http.get<StockStat>
    (`http://127.0.0.1:8000/api/stocks/manque/${n}`)
  }


}
