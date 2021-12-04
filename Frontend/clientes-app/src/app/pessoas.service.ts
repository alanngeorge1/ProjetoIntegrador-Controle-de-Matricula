import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa/pessoa';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../environments/environment'
import { PessoaBusca } from './pessoa/pessoas-lista/pessoaBusca';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  apiURL: string = environment.apiURLBase + '/api/pessoa';

  constructor( private http: HttpClient ) {}

  salvar( pessoa: Pessoa ) : Observable<Pessoa> {
    return this.http.post<Pessoa>( `${this.apiURL}` , pessoa);
  }

  atualizar( pessoa: Pessoa ) : Observable<any> {
    return this.http.put<Pessoa>(`${this.apiURL}/${pessoa.id}` , pessoa);
  }

  getClientes() : Observable<PessoaBusca[]> {
    return this.http.get<PessoaBusca[]>(this.apiURL);
  }
  
  getClienteById(id: number) : Observable<Pessoa> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(pessoa: Pessoa) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${pessoa.id}`);
  }

  buscar(nome: string, cpf: string) : Observable<PessoaBusca[]>{
    
    const httpParams = new HttpParams()
      .set("nome", nome ?  nome.toString() : '')
      .set("cpf", cpf ?  cpf.toString() : '');

    const url = this.apiURL +"/pesquisa"+ "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}
