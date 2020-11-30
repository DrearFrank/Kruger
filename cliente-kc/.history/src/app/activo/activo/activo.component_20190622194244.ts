
import { Component, OnInit } from '@angular/core';
/**comoponentes para traer los datos desde mi otro componente */
import {CatActivosService} from '../../cat-activos/cat-activos.service';
import {CDatos} from '../../cat-activos/cat-activos-model';
/**cierre de componentes  */
import { DatosActivo } from '../activo-model';
import {ActivoService } from '../activo.service';
@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css'],
  providers: [ActivoService, CatActivosService]
})
export class ActivoComponent implements OnInit {
  atributos: DatosActivo[]; // atributos proviene de los servicios
  editAtrib: DatosActivo; // variale de
  atributocategorias: CDatos[];

  credenciales: DatosActivo; /*= {
    id_activos: 0,
    id_categoria_ac: null,
    nombre: '',
    descripcion: '',
    serie: '',
    cod_utn: '',
    estado: '',
    cantidad: ''
  };*/


  constructor(private serviService: ActivoService, private categoriaService: CatActivosService) {}
  ngOnInit() {
    this.credenciales = new DatosActivo();

    this.getDatosActivo();
    this.getDatosCategoriActivo();
  }

  public cargando:boolean;

  getDatosCategoriActivo(): void {
    this.cargando = true;
    this.categoriaService.getSdatos().subscribe(atributocategorias => {
      (this.atributocategorias = atributocategorias);
      this.serviService.getSDatosActivo().subscribe(atributos => {
        (this.atributos = atributos);
        this.cargando =  false;
      });
    });
  }

  getNombre(idCategoria): string{
    let categoria = this.atributocategorias.find(cat => cat.id_categoria = idCategoria);
    if(categoria)
      return categoria.nombre;
    else return "No aplica";
  }

  getDatosActivo(): void {
      }

    addActivo() {
    this.serviService.addSdatoActivo(this.credenciales).subscribe(
      atributo => this.atributos.push(atributo),
      err => {
        console.error(err);
      }
    );
  }

  deleteActivo(atributo: DatosActivo): void {
    this.atributos = this.atributos.filter(h => h !== atributo);
    this.serviService.deleteSdatoActivo(atributo.id_activos).subscribe();
  }

  editActivo(atributo) {
    this.editAtrib = atributo;
  }

  updateActivo() {
    if (this.editAtrib) {
      this.serviService.updateSdatoActivo(this.editAtrib).subscribe(atributo => {
        const ix = atributo ? this.atributos.findIndex(h => h.id_activos === atributo.id_activos) : -1;
        if (ix > -1) {
          this.atributos[ix] = atributo;
        }
      });
      this.editAtrib = undefined;
    }
  }
}


