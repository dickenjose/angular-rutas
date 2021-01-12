import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';
import { RouterModule, Routes } from '@angular/router'


const routes: Routes =[
  {
    path:'',
    component:NoticiasComponent,
  }
]


@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class NoticiasModule { }
