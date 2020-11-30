
import { Component, OnInit } from '@angular/core';

import { Datos } from '../activo-model';
import { ActivoService } from '../activo.service';
@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css'],
  providers: [ActivoService]
})
export class ActivoComponent implements OnInit {
  atributos: Datos[]; // atributos proviene de los servicios
  editAtrib: Datos; // varial

  credenciales: Datos;


  constructor(private serviService: ActivoService) { }
  ngOnInit() {
    this.credenciales = new Datos();

    this.getDatos();
  }

  public cargando: boolean;


  getDatos(): void {
    this.serviService.getSDatos().subscribe(atributos => {

      this.atributos = atributos
    }
    )
  }

  getEstado(estado): string {
    let activos = this.atributos.find(act => act.estado == estado);
    if (activos) {
      if (Boolean(activos.estado) == true) {
        return "Terminado";
      }
      else
        return "Pendiente";
    }
  }


  addActivo() {
    this.serviService.addSdatoActivo(this.credenciales).subscribe(
      atributo => this.atributos.push(atributo),
      err => {
        console.error(err);
      }
    );
  }

  deleteActivo(atributo: Datos): void {
    this.atributos = this.atributos.filter(h => h !== atributo);
    this.serviService.deleteSdatoActivo(atributo.ida).subscribe();
  }

  editActivo(atributo) {
    this.editAtrib = atributo;
  }

  updateActivo() {
    if (this.editAtrib) {
      this.serviService.updateSdatoActivo(this.editAtrib).subscribe(atributo => {
        const ix = atributo ? this.atributos.findIndex(h => h.ida === atributo.ida) : -1;
        if (ix > -1) {
          this.atributos[ix] = atributo;
        }
      });
      this.editAtrib = undefined;
    }
  }
}


