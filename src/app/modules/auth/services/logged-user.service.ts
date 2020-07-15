import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  
  constructor(private http:HttpClient) { 

  }


  login(data: any): Observable<any> {
    return this.http.post(`${env.apiUrl}/api/login`,data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
