import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import {DisciplinasRoutingModule} from './disciplinas-routing.module';
import { DisciplinaFormComponent} from './disciplinas-form/disciplinas-form.component';
import { DisciplinasListaComponet } from './disciplinas-lista/disciplinas-lista.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    DisciplinaFormComponent,
    DisciplinasListaComponet
  ],
  
  imports: [
    CommonModule,
    DisciplinasRoutingModule,
    FormsModule
  ], 
  exports:[
    DisciplinaFormComponent,
    DisciplinasListaComponet
  ]

})
export class DisciplinasModule { }
