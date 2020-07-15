import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }
  getDummyData(){
    return this.http.get(`${env.apiUrl}/api/users`);
  }
}
