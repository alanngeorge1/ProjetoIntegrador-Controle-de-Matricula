import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina/disciplina';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  apiURL: string = environment.apiURLBase + '/api/disciplina';

  constructor( private http: HttpClient ) {}

  salvar( disciplina: Disciplina ) : Observable<Disciplina> {
    return this.http.post<Disciplina>( `${this.apiURL}` , disciplina);
  }

  atualizar( disciplina: Disciplina ) : Observable<any> {
    return this.http.put<Disciplina>(`${this.apiURL}/${disciplina.idDisciplina}` , disciplina);
  }

  getDisciplinas() : Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiURL);
  }
  
  getDisciplinaById(id: number) : Observable<Disciplina> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(disciplina: Disciplina) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${disciplina.idDisciplina}`);
  }

}
