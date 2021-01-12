import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';

const rutas:Routes=[
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'contactos',
    component:ContactosComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'noticias',
    loadChildren:()=>import('./paginas/noticias/noticias.module').then(m=>m.NoticiasModule)
  },
  {
    path:'**',
    component:InicioComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRutasModule { }
