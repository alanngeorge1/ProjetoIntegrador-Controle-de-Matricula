import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Disciplina } from '../disciplina';
import {DisciplinasService } from '../../disciplinas.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.css']
})
export class DisciplinasListaComponet implements OnInit {

 
 disciplina: Disciplina[] = [];
  disciplinaelecionado: Disciplina;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: DisciplinasService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getDisciplinas()
      .subscribe( resposta => this.disciplina = resposta );
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
          this.mensagemSucesso = 'Disciplina deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o disciplina.'  
      )
    
}

}
