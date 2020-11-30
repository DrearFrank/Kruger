import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { DatosReservas } from './reservas-model'
import { HttpErrorHandler, HandleError } from '../http-error-handler.service'
//import {AuthService} from '../core/auth/auth.service';
import {from, Observable, Subject} from 'rxjs';
//import {MyCalenderEvent} from '../admin-view/admin-view.component'; es lomismo que el model

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private handleError: HandleError

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CarreraService')
  }
  /*getSdatodocente(id:number): Observable<{}> {
    const url = `rest-docentes/list/${id}`
    return this.http
    .get(url)
    .pipe(catchError(this.handleError('getDatoDocente', [])))
  }*/

addSdatoreserva(atributo: DatosReservas): Observable<DatosReservas> {
  return this.http
    .post<DatosReservas>('rest-registro-reservacion/add', atributo)
    .pipe(catchError(this.handleError('addDatoDocente', atributo)))
}
/**
 * 
 */
}
