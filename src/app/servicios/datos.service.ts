import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient ) { }
    getNoticia(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
}
