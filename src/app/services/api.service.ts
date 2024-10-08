import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getCats(limit: string): Observable<any> {
    const params = new HttpParams().set('limit', limit);
    return this.httpClient.get<any>(this.apiUrl, { params });
  }

  getCat(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
