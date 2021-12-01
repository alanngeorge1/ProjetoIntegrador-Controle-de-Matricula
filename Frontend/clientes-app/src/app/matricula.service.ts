import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Matricula } from './matricula/matricula';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { MatriculaBusca } from './matricula/matricula-lista/matriculaBusca';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  apiURL : string = environment.apiURLBase +  '/api/servicos-prestados';

  constructor(private http: HttpClient ) {}


  salvar(matricula: Matricula) : Observable<Matricula>{
    return this.http.post<Matricula>(this.apiURL, matricula);
  }
  
  buscar(nome: string, mes: number) : Observable<MatriculaBusca[]>{
    
    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ?  mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}