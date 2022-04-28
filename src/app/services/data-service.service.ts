import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonInfo } from 'src/app/interfaces/person-info';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url = 'https://api.agify.io?name=';
  constructor(private http: HttpClient,) { }
  getAgeResults(name: string): Observable<PersonInfo> {
    return this.http.get<PersonInfo>(`${this.url}${name}`);
  }
}
