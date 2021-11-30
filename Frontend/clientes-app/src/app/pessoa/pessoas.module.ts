import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import {PessoasRoutingModule} from './pessoas-routing.module';
import { PessoaFormComponent} from './pessoas-form/pessoas-form.component';
import { PessoasListaComponet } from './pessoas-lista/pessoas-lista.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    PessoaFormComponent,
    PessoasListaComponet
  ],
  
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule
  ], 
  exports:[
    PessoaFormComponent,
    PessoasListaComponet
  ]

})
export class PessoasModule { }
