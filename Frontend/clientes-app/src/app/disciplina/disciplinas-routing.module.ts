import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaFormComponent } from './disciplinas-form/disciplinas-form.component';
import { DisciplinasListaComponet } from './disciplinas-lista/disciplinas-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [

  {  path : 'disciplina' , component: LayoutComponent, children: [
     
    { path: 'form', component: DisciplinaFormComponent },
      { path: 'form/:id', component: DisciplinaFormComponent },
      { path: 'lista', component: DisciplinasListaComponet },
      { path: '', redirectTo: '/disciplina/lista', pathMatch: 'full' }
 ]}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinasRoutingModule { }
