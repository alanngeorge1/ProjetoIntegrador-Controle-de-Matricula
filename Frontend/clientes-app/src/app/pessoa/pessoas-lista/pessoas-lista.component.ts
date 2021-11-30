import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Pessoa } from '../pessoa';
import {PessoasService } from '../../pessoas.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponet implements OnInit {

 
 pessoa: Pessoa[] = [];
  pessoaSelecionado: Pessoa;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: PessoasService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe( resposta => this.pessoa = resposta );
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
          this.mensagemSucesso = 'Pessoa deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o pessoa.'  
      )
    
}

}
