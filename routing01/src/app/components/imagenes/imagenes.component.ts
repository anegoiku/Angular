import { ImagenesService } from './../../services/imagenes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent {
  title = 'imagenes';
  opcion : boolean = false;
  public rutaHijo: boolean= false;
  private routerSubscription: Subscription | null = null;;

  constructor(private router:Router, public imagenesService: ImagenesService){}

  ngOnInit(){}

  onLoadDiferencias(){
    this.router.navigate(['imagenes/diferencias']);
  }

  onLoadPeliculas(){
    this.router.navigate(['imagenes/peliculas']);
  }
}
