import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NameObject } from 'src/app/interfaces/name-object';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url = 'https://api.agify.io?name=';

  constructor(private http: HttpClient,) { }

  public getAgeResults(name: string): Observable<NameObject> {
    return this.http.get<NameObject>(`${this.url}${name}`)
      .pipe(
        catchError((err) => {
          this.handleError(err);
          return throwError(() => new Error('OOPS! Caught an error :/ '));
        }));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Received an error with code ${error.status}, \n`, error.error);
    }
  }
}
