import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token:any;
  constructor() {
    this.token = localStorage.getItem('token');
  }

  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.token != null ? true : false;
}
}
