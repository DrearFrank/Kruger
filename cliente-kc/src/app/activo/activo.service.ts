
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { Datos } from './activo-model'

import { HttpErrorHandler, HandleError } from '../http-error-handler.service'
@Injectable()
export class ActivoService {
  /**Los servicios estan estandarizon la cada metodo realizado para que exista una mayor facilidad
   * de entendimiento durante el desarrollo de la aplicacion.
   * 
   * La palabra atributo no es necesario cambiarle ya que es propia de la clase
   */
  private handleError: HandleError

  api_url = 'http://localhost:3000/actividad'
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ActivoService')
  }

  getSdatoActivo(id: number): Observable<{}> {
    const url = `actividad/list/${id}`
    return this.http
      .get(url)
      .pipe(catchError(this.handleError('getDatoActivo', [])))
  }

  getSDatos(): Observable<Datos[]> {
    return this.http
      .get<Datos[]>(this.api_url + '/list')
      .pipe(catchError(this.handleError('getDato', [])))
  }




  addSdatoActivo(atributo: Datos): Observable<Datos> {
    return this.http
      .post<Datos>(this.api_url + '/add', atributo)
      .pipe(catchError(this.handleError('addDatoActivo', atributo)))
  }

  deleteSdatoActivo(id: number): Observable<{}> {
    const url = this.api_url + `/deleted/${id}`
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError('deleteDatoActivo')))
  }

  updateSdatoActivo(atributo: Datos): Observable<Datos> {
    return this.http
      .put<Datos>(this.api_url + `/updated/${atributo.ida}`, atributo)
      .pipe(catchError(this.handleError('updateDatoActivo', atributo)))
  }
}