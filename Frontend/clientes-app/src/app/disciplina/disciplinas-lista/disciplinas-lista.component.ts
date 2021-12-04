import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Disciplina } from '../disciplina';
import {DisciplinasService } from '../../disciplinas.service';
import { from } from 'rxjs';
import { DisciplinaBusca } from './disciplinaBusca';


@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.css']
})
export class DisciplinasListaComponet implements OnInit {

  disciplinaelecionado: Disciplina;
  mensagemSucesso: string;
  mensagemErro: string;
  nomeAluno: string;
  nomeProfessor: string;
  nomeMatricula: string;
  lista: DisciplinaBusca[];
  message: string;

  constructor(
    private service: DisciplinasService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getDisciplinas()
      .subscribe( resposta => this.lista = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/disciplina/form'])
  }

  preparaDelecao(disciplina: Disciplina){
    this.disciplinaelecionado = disciplina;
  }

  deletarDisciplina  (){
    this.service
      .deletar(this.disciplinaelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Disciplina deletada com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar a disciplina.'  
      )
    
}

consultar(){
  this.service
    .buscar(this.nomeAluno, this.nomeMatricula, this.nomeProfessor)
    .subscribe(response => {
      this.lista = response;
      if( this.lista.length <= 0 ){
        this.message = "Nenhum Registro encontrado.";
      }else{
        this.message = null;
      }
    });
}


}
