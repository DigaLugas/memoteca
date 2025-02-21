import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Think } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Think[]> {
    return this.http.get<Think[]>(this.API);
  }
}

