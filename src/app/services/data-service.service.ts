import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NameObject } from 'src/app/interfaces/name-object';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url = 'https://api.agify.io?name=';
  constructor(private http: HttpClient,) { }
  getAgeResults(name: string): Observable<NameObject> {
    return this.http.get<NameObject>(`${this.url}${name}`);
  }
}
