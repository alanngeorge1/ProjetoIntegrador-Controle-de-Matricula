import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponet } from './pessoas-lista/pessoas-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [

  {  path : 'pessoa' , component: LayoutComponent, children: [
     
    { path: 'form', component: PessoaFormComponent },
      { path: 'form/:id', component: PessoaFormComponent },
      { path: 'lista', component: PessoasListaComponet },
      { path: '', redirectTo: '/pessoa/lista', pathMatch: 'full' }
 ]}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
