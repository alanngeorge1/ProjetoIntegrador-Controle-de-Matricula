import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../environments/environment'

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

  getClientes() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiURL);
  }
  
  getClienteById(id: number) : Observable<Pessoa> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(pessoa: Pessoa) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${pessoa.id}`);
  }

}
