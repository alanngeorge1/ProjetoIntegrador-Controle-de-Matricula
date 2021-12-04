import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina/disciplina';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../environments/environment'
import { DisciplinaBusca } from './disciplina/disciplinas-lista/disciplinaBusca';

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

  getDisciplinas() : Observable<DisciplinaBusca[]> {
    return this.http.get<DisciplinaBusca[]>(this.apiURL);
  }

  getDisciplinaById(id: number) : Observable<Disciplina> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(disciplina: Disciplina) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${disciplina.idDisciplina}`);
  }

  buscar(nomeAluno: string, nomeProfessor: string, nomeDisciplina: string) : Observable<DisciplinaBusca[]>{
    
    const httpParams = new HttpParams()
      .set("nomeAluno", nomeAluno ?  nomeAluno.toString() : '')
      .set("nomeProfessor", nomeProfessor ?  nomeProfessor.toString() : '')
      .set("nomeDisciplina", nomeDisciplina ?  nomeDisciplina.toString() : '');

    const url = this.apiURL +"/pesquisa"+ "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}
