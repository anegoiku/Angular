import { Component } from '@angular/core';
import listaDePostres from 'src/assets/json/postres.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Postres : any = listaDePostres;
  title = 'appJsonPostres';
}
