import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute, Params } from '@angular/router'


import { Pessoa } from '../pessoa'
import { PessoasService} from '../../pessoas.service'
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa;
  success: boolean = false;
  errors: String[];
  id: number;
  
  constructor(
    private service: PessoasService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute 
    ) { 
      this.pessoa = new Pessoa();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
        this.id = urlParams ['id'];
        if(this.id){
          this.service
          .getClienteById(this.id)
          .subscribe( 
            response => this.pessoa = response ,
            errorResponse => this.pessoa = new Pessoa()
          )
        }      
  });
    
    }
  
  voltarParaLista(){
    this.router.navigate(['/pessoa/lista'])
  }

  onSubmit(){

    if(this.id){
      this.service
        .atualizar(this.pessoa)
        .subscribe( response => {
          this.success = true;
           this.errors = null;  
        }, errpResponse => {
            this.errors = ['Erro ao Atualizar a Pessoa.']
        })

      
    }else{
    this.service
      .salvar(this.pessoa) 
      .subscribe(response =>{
        this.success = true;
        this.errors = null;
        this.pessoa = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })

    }

  
  }


}
