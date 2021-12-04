import { Component, OnInit } from '@angular/core';
import { MatriculaBusca } from './matriculaBusca';
import { MatriculaService } from '../../matricula.service'


@Component({
  selector: 'app-matricula-lista',
  templateUrl: './matricula-lista.component.html',
  styleUrls: ['./matricula-lista.component.css']
})
export class MatriculaListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: MatriculaBusca[];
  message: string;

  constructor(
    private service: MatriculaService
  ) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  consultar(){
    this.service
      .buscar(this.nome, this.mes)
      .subscribe(response => {
        console.log (response);
        this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      });
  }
}