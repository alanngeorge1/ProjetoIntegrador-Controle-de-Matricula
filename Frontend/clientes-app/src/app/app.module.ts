import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import {PessoasModule} from './pessoa/pessoas.module';
import {PessoasService} from './pessoas.service';
import { ServicoPrestadoService} from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import {DisciplinasService } from './disciplinas.service';
import {DisciplinasModule} from './disciplina/disciplinas.module'
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    PessoasModule,
    ServicoPrestadoModule,
    DisciplinasModule,
    
  ],
  
  providers: [
    PessoasService,
    ServicoPrestadoService,
    DisciplinasService,
 
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
