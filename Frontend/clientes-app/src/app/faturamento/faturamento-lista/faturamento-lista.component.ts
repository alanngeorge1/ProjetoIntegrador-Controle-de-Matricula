import { Component, OnInit } from '@angular/core';
import { FaturamentoBusca } from './faturamentoBusca';
import { FaturamentoService } from '../../faturamento.service'


@Component({
  selector: 'app-faturamento-lista',
  templateUrl: './faturamento-lista.component.html',
  styleUrls: ['./faturamento-lista.component.css']
})
export class FaturamentoListaComponent implements OnInit {

  nomeDisciplina: string;
  message: string;
  lista: FaturamentoBusca[];
  periodoInicial: string;
  periodoFinal: string;

  constructor(
    private service: FaturamentoService
  ) {

  }

  ngOnInit(): void {
  }

  consultar(){
    this.service
      .buscar(this.periodoInicial, this.periodoFinal, this.nomeDisciplina)
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
