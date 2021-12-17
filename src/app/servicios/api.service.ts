import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }

  // Se establece la base url del API a consumir
  //apiURL = 'https://jsonplaceholder.typicode.com';
  //192.168.1.123

  // Se establece la base url del API a consumir
    apiURL = 'https://cristobal1111.github.io/'; // cambiar url a la del hosting

  constructor(private http:HttpClient) { }

  getAsignaturas():Observable<any>{
    return this.http.get(this.apiURL+ '/asignaturas ').pipe(
      retry(3)
    );
  }

  getAsignatura(id):Observable<any>{
    return this.http.get(this.apiURL+ '/asignatura ' + id).pipe(
      retry(3)
    );
  }
}
