import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute, Params } from '@angular/router'


import { Disciplina } from '../disciplina'
import { DisciplinasService} from '../../disciplinas.service'
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplinas-form.component.html',
  styleUrls: ['./disciplinas-form.component.css']
})
export class DisciplinaFormComponent implements OnInit {

  disciplina: Disciplina;
  success: boolean = false;
  errors: String[];
  id: number;
  
  constructor(
    private service: DisciplinasService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute 
    ) { 
      this.disciplina = new Disciplina();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
        this.id = urlParams ['id'];
        if(this.id){
          this.service
          .getDisciplinaById(this.id)
          .subscribe( 
            response => this.disciplina = response ,
            errorResponse => this.disciplina = new Disciplina()
          )
        }      
  });
    
    }
  
  voltarParaLista(){
    this.router.navigate(['/disciplina/lista'])
  }

  onSubmit(){

    if(this.id){
      this.service
        .atualizar(this.disciplina)
        .subscribe( response => {
          this.success = true;
           this.errors = null;  
        }, errpResponse => {
            this.errors = ['Erro ao Atualizar o Disciplina.']
        })

      
    }else{
    this.service
      .salvar(this.disciplina) 
      .subscribe(response =>{
        this.success = true;
        this.errors = null;
        this.disciplina = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })

    }

  
  }


}
