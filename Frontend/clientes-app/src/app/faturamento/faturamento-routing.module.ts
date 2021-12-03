import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaturamentoListaComponent } from './faturamento-lista/faturamento-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  { path: 'faturamento', component: LayoutComponent, children: [

    { path: 'lista', component: FaturamentoListaComponent },
    { path: '', redirectTo: '/faturamento/lista', pathMatch: 'full'  }
  ]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaturamentoRoutingModule { }
