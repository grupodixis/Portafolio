import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ProductosService} from "../../services/productos.service";
@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'
})
export class PortfolioItemComponent {
  producto:any=undefined;
  cod:string = undefined;

  constructor(private route:ActivatedRoute, private _ps:ProductosService){
    route.params.subscribe(parametros =>{
      _ps.cargar_producto(parametros['id'])
        .subscribe(res =>{
          this.producto = res.json();
          this.cod = parametros['id'];
        })
    })
  }

}
