import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }
   public saveToken(token: string,) {
        localStorage.setItem('token', token);
    }
    public decode(){
      const helper = new JwtHelperService();
      return helper.decodeToken(localStorage.getItem('token') || '{}');
    }
    public removeToken(){
      localStorage.removeItem('token');
    }
    public token(){
      return localStorage.getItem('token')
    }
     public getUsername():string {
        const tokenDecoded = this.decode();
        return tokenDecoded.sub;
    }

}
