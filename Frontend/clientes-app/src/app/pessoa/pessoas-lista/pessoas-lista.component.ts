import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Pessoa } from '../pessoa';
import {PessoasService } from '../../pessoas.service';
import { from } from 'rxjs';
import { PessoaBusca } from './pessoaBusca';


@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponet implements OnInit {

  pessoaSelecionado: Pessoa;
  mensagemSucesso: string;
  mensagemErro: string;
  nome: string;
  cpf: string;
  lista: PessoaBusca[];
  message: string;
  // alunoProfessor: AlunoProfessor;

  constructor(
    private service: PessoasService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe( resposta => this.lista = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/pessoa/form'])
  }

  preparaDelecao(pessoa: Pessoa){
    this.pessoaSelecionado = pessoa;
  }

  deletarPessoa  (){
    this.service
      .deletar(this.pessoaSelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Pessoa deletada com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar a pessoa.'  
      )
    
}

consultar(){
  this.service
    .buscar(this.nome, this.cpf)
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
