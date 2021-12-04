import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';

import { FaturamentoRoutingModule } from './faturamento-routing.module';
import { FaturamentoListaComponent } from './faturamento-lista/faturamento-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FaturamentoListaComponent
  ],

  imports: [
    CommonModule,
    FaturamentoRoutingModule,
    FormsModule,
    RouterModule
  ], exports : [

    FaturamentoListaComponent
  ]
})
export class FaturamentoModule { }
