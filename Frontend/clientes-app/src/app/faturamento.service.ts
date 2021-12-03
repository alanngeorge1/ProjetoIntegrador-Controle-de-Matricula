import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Faturamento } from './faturamento/faturamento';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { FaturamentoBusca } from './faturamento/faturamento-lista/faturamentoBusca';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  apiURL : string = environment.apiURLBase +  '/api/servicos-prestados';

  constructor(private http: HttpClient ) {}


  salvar(faturamento: Faturamento) : Observable<Faturamento>{
    return this.http.post<Faturamento>(this.apiURL, faturamento);
  }

  buscar(periodoInicial: string, periodoFinal: string, nomeDisciplina: string) : Observable<FaturamentoBusca[]>{

    const httpParams = new HttpParams()
      .set("periodoInicial", periodoInicial)
      .set("periodoFinal", periodoFinal )
      .set("nomeDisciplina",  nomeDisciplina);

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}
