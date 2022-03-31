import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Pasó por el interceptor')

    const headers = new HttpHeaders({
      'token': 'ABDC'
    });
  
    const requestClone = req.clone({
      headers: headers
    })

    return next.handle( requestClone ).pipe(
      catchError( this.manejarError )
    );
  }

  manejarError( error: HttpErrorResponse ) {
    console.log('Sucedio un error')
    console.log('Registro en el log file')

    console.log(error)
    return throwError('Error personalizado')
  }
}
