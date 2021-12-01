import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
 
import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaFormComponent } from './matricula-form/matricula-form.component';
import { MatriculaListaComponent } from './matricula-lista/matricula-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MatriculaFormComponent, 
    MatriculaListaComponent
  ],
  
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    FormsModule,
    RouterModule
  ], exports : [
    MatriculaFormComponent, 
    MatriculaListaComponent
  ]
})
export class MatriculaModule { }
