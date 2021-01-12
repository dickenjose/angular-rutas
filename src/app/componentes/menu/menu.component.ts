import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas=[
    {
      nombre:'Inicio',
      path:'/inicio',
    },
    {
      nombre:'Nosotros',
      path:'/nosotros',
    },
    {
      nombre:'Contactos',
      path:'/contactos',
    },
    {
      nombre:'Noticias',
      path:'/noticias'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
