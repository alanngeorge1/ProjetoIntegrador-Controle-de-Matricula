import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculaFormComponent } from './matricula-form/matricula-form.component';
import { MatriculaListaComponent } from './matricula-lista/matricula-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  { path: 'matricula', component: LayoutComponent, children: [
 
    { path: 'form', component: MatriculaFormComponent },
    { path: 'lista', component: MatriculaListaComponent },
    { path: '', redirectTo: '/matricula/lista', pathMatch: 'full'  }
  ]}
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class MatriculaRoutingModule { }
