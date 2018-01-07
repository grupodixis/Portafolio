import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html'

})
export class SerchComponent {
  termino:string = undefined;
  constructor(private route:ActivatedRoute,
              private _ps:ProductosService) {
    route.params.subscribe(parametros =>{
        this.termino = parametros['termino'];
        _ps.buscar_producto(this.termino);
    });
   }


}
