import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from 'app/models/Stock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) {
    
  }

  GetAllStock():Observable<Stock[]>
  {
    //mode get
    return this.http.get<Stock[]>
    ('http://127.0.0.1:8000/api/stocks')
  }

  addStock(x:Stock):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/stocks',x)
  }

  getStockById(id:string):Observable<Stock>
  {
    return this.http.get<Stock>
    (`http://127.0.0.1:8000/api/stocks/${id}`)
  }

  updateStock(f:Stock,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/stocks/${id}`,f)
  }

  deleteStock(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/stocks/${id}`)
  }
}
