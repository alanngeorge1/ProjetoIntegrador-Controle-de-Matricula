import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../pessoa/pessoa';
import { PessoasService } from '../../pessoas.service'
import { Matricula } from '../Matricula';
import { MatriculaService } from '../../matricula.service';
  import { from } from 'rxjs';
import { PessoaBusca } from 'src/app/pessoa/pessoas-lista/pessoaBusca';
import { DisciplinasService } from 'src/app/disciplinas.service';
import { DisciplinaBusca } from 'src/app/disciplina/disciplinas-lista/disciplinaBusca';
@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit {
  matricula: Matricula;
  pessoa : PessoaBusca[] = [];
  success: boolean = false;
  errors: String[];
  disciplina: DisciplinaBusca[] = [];

  constructor(
    private pessoaService: PessoasService,
    private service: MatriculaService,
    private  disciplinaService: DisciplinasService  
  ){ 
    this.matricula = new Matricula();
  }

  ngOnInit(): void {
    this.pessoaService
      .getClientes()
      .subscribe(response => this.pessoa = response)

      this.disciplinaService
      .getDisciplinas()
      .subscribe(response => this.disciplina = response);
  }

  onSubmit(){
    this.service
    .salvar(this.matricula)
    .subscribe(response =>{
      this.success = true;
      this.errors = null;
      this.matricula = new Matricula();
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    })

}

}