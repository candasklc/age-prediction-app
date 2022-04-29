import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NameObject } from 'src/app/interfaces/name-object';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url = 'https://api.agify.io?me=';

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
    if (!navigator.onLine) {
      alert('No Internet Connection');
    } else if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Received an error with code ${error.status}, \n`, error.error);
      const errMessage = JSON.stringify(error.error.error);
      alert('Error: \n' + errMessage);
    }
  }
}
