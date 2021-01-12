import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { AppRutasModule} from './app-rutas.module';
import { MenuComponent } from './componentes/menu/menu.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactosComponent,
    NosotrosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
