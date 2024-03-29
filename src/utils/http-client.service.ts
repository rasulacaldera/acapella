import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, payload: any) {
    return this.http.post(url, payload);
  }
}
