import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockLine } from 'app/models/StockLine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockLineService {

  constructor(private http:HttpClient) {
    
  }

  GetAllStockLine():Observable<StockLine[]>
  {
    //mode get
    return this.http.get<StockLine[]>
    ('http://127.0.0.1:8000/api/stocklines')
  }

  addStockLine(x:StockLine):Observable<void>
  {
    return this.http.post<void>
    ('http://127.0.0.1:8000/api/stocklines',x)
  }

  getStockLineById(id:string):Observable<StockLine>
  {
    return this.http.get<StockLine>
    (`http://127.0.0.1:8000/api/stocklines/${id}`)
  }

  updateStockLine(f:StockLine,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://127.0.0.1:8000/api/stocklines/${id}`,f)
  }

  deleteStockLine(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://127.0.0.1:8000/api/stocklines/${id}`)
  }
}
