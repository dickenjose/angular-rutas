import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../servicios/datos.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  datos:any[]=[];
  constructor(private Datos:DatosService) { }

  ngOnInit(): void {
    this.Datos.getNoticia().subscribe((noticia:any[])=>{
      this.datos=noticia;
    })
  }

}
