import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Role } from '../model/Role.model';
import { User } from '../model/User.model';
import { TokenService } from './Token.service';
import {environment} from '../../../environments/environment';
import {ChercheurVo} from '../model/Chercheur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    readonly API = environment.loginUrl;
    public _user = new User();
    private _authenticatedUser = new User();
    private _authenticated = <boolean>JSON.parse(localStorage.getItem('autenticated')) || false;
    public _loggedIn = new BehaviorSubject<boolean>(false);
    public loggedIn$ = this._loggedIn.asObservable();
    public error: string = null;
    private  connectedChercheur = 'connectedChercheur';


    constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) { }
         public loginChercheur(username: string, password: string) {
       this.http.post<any>(this.API + 'login', { username, password }, { observe: 'response' }).subscribe(
            resp => {
                this.error = null;
                const jwt = resp.headers.get('Authorization');
                jwt != null ? this.tokenService.saveToken(jwt) : false;
                this.loadInfos();
                console.log('you are logged in successfully');
                this.router.navigate(['/' + environment.rootAppUrl + '/chercheur']);
            }, (error: HttpErrorResponse) => {
                this.error = error.error;
                console.log(error);
            }
        );
    }
       public loginAdmin(username: string, password: string) {
       this.http.post<any>(this.API + 'login', { username, password }, { observe: 'response' }).subscribe(
            resp => {
                this.error = null;
                const jwt = resp.headers.get('Authorization');
                jwt != null ? this.tokenService.saveToken(jwt) : false;
                this.loadInfos();
                console.log('you are logged in successfully');
                this.router.navigate(['/' + environment.rootAppUrl + '/admin']);
            }, (error: HttpErrorResponse) => {
                this.error = error.error;
                console.log(error);
            }
        );
    }

       public loadInfos() {
        const tokenDecoded = this.tokenService.decode();
        const username = tokenDecoded.sub;
        const roles = tokenDecoded.roles;
        const email = tokenDecoded.email;
        const prenom = tokenDecoded.prenom;
        const nom = tokenDecoded.nom;
        const passwordChanged = tokenDecoded.passwordChanged;
        this._authenticatedUser.passwordChanged = passwordChanged;
        this._authenticatedUser.username = username;
        this._authenticatedUser.nom = nom;
        this._authenticatedUser.prenom = prenom;
        this._authenticatedUser.email = email;
        this._authenticatedUser.roles = roles;
        localStorage.setItem('autenticated', JSON.stringify(true));
        this.authenticated = true;
        this._loggedIn.next(true);

    }

     public hasRole(role:Role): boolean {
       const index = this._authenticatedUser.roles.findIndex(r=>r.authority == role.authority);
       return  index > -1 ? true : false;
    }
        public register() {
        console.log(this.user)
        this.http.post<any>(this.API+'api/users/save', this.user, {observe: 'response'}).subscribe(
            resp => {
                this.router.navigate(['/login']);

            }, (error:HttpErrorResponse) => {
               console.log(error.error)
            }
        );
    }
    public logout() {
        this.tokenService.removeToken();
        this.unregisterConnectedChercheur();
        localStorage.setItem('autenticated', JSON.stringify(false));
        this.authenticated = false;
        this._loggedIn.next(false);
        this._authenticatedUser = new User();
        this.router.navigate(['']);
    }
     get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
    get authenticated(): boolean {
        return this._authenticated;
    }

    set authenticated(value: boolean) {
        this._authenticated = value;
    }
        get authenticatedUser(): User {
        return this._authenticatedUser;
    }

    set authenticatedUser(value: User) {
        this._authenticatedUser = value;
    }


    public authenticatedUserByAdmin(): ChercheurVo {
    if (localStorage.getItem(this.connectedChercheur) !== null){
    return JSON.parse(localStorage.getItem(this.connectedChercheur));
    }
    return null;
    }

    public registerConnectedChercheur(chercheur: ChercheurVo): void{
    localStorage.setItem(this.connectedChercheur, JSON.stringify(chercheur));
    }
    public unregisterConnectedChercheur(): void{
    localStorage.removeItem(this.connectedChercheur);
    }
}
