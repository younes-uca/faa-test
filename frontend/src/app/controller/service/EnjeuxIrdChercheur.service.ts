import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {EnjeuxIrdChercheurVo} from '../model/EnjeuxIrdChercheur.model';
import {EnjeuxIrdVo} from '../model/EnjeuxIrd.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class EnjeuxIrdChercheurService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/enjeuxIrdChercheur/';
        })
    }
     private _enjeuxIrdChercheurs: Array<EnjeuxIrdChercheurVo> ;
     private _selectedEnjeuxIrdChercheur: EnjeuxIrdChercheurVo;
     private _enjeuxIrdChercheurSelections: Array<EnjeuxIrdChercheurVo>;
     private _createEnjeuxIrdChercheurDialog: boolean;
     private _editEnjeuxIrdChercheurDialog: boolean;
     private _viewEnjeuxIrdChercheurDialog: boolean;
     public editEnjeuxIrdChercheur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEnjeuxIrdChercheur:EnjeuxIrdChercheurVo ;

    // methods

    public findAll(){
     return this.http.get<Array<EnjeuxIrdChercheurVo>>(this.API);
    }

    public save(): Observable<EnjeuxIrdChercheurVo> {
         return this.http.post<EnjeuxIrdChercheurVo>(this.API, this.selectedEnjeuxIrdChercheur);
    }

    delete(enjeuxIrdChercheur: EnjeuxIrdChercheurVo) {
         return this.http.delete<number>(this.API + 'id/' + enjeuxIrdChercheur.id);
    }


    public edit(): Observable<EnjeuxIrdChercheurVo> {
        return this.http.put<EnjeuxIrdChercheurVo>(this.API, this.selectedEnjeuxIrdChercheur);
    }


     public findByCriteria(enjeuxIrdChercheur:EnjeuxIrdChercheurVo):Observable<Array<EnjeuxIrdChercheurVo>>{
           return this.http.post<Array<EnjeuxIrdChercheurVo>>(this.API +'search', enjeuxIrdChercheur);
    }

   public findByIdWithAssociatedList(enjeuxIrdChercheur:EnjeuxIrdChercheurVo):Observable<EnjeuxIrdChercheurVo>{
         return this.http.get<EnjeuxIrdChercheurVo>(this.API + 'detail/id/' +enjeuxIrdChercheur.id);
    }

    // getters and setters


    get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
    if(this._enjeuxIrdChercheurs==null){
    this._enjeuxIrdChercheurs=new Array<EnjeuxIrdChercheurVo>();
    }
return this._enjeuxIrdChercheurs;
       }

    set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this._enjeuxIrdChercheurs = value;
       }

    get selectedEnjeuxIrdChercheur(): EnjeuxIrdChercheurVo {
    if(this._selectedEnjeuxIrdChercheur==null){
    this._selectedEnjeuxIrdChercheur=new EnjeuxIrdChercheurVo();
    }
           return this._selectedEnjeuxIrdChercheur;
       }

    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this._selectedEnjeuxIrdChercheur = value;
       }

    get enjeuxIrdChercheurSelections(): Array<EnjeuxIrdChercheurVo> {
    if(this._enjeuxIrdChercheurSelections==null){
    this._enjeuxIrdChercheurSelections=new Array<EnjeuxIrdChercheurVo>();
    }
        return this._enjeuxIrdChercheurSelections;
       }


    set enjeuxIrdChercheurSelections(value: Array<EnjeuxIrdChercheurVo>) {
        this._enjeuxIrdChercheurSelections = value;
       }

    get createEnjeuxIrdChercheurDialog(): boolean {
        return this._createEnjeuxIrdChercheurDialog;
       }

    set createEnjeuxIrdChercheurDialog(value: boolean) {
        this._createEnjeuxIrdChercheurDialog = value;
       }

    get editEnjeuxIrdChercheurDialog(): boolean {
        return this._editEnjeuxIrdChercheurDialog;
       }

    set editEnjeuxIrdChercheurDialog(value: boolean) {
        this._editEnjeuxIrdChercheurDialog = value;
       }

    get viewEnjeuxIrdChercheurDialog(): boolean {
        return this._viewEnjeuxIrdChercheurDialog;
       }

    set viewEnjeuxIrdChercheurDialog(value: boolean) {
        this._viewEnjeuxIrdChercheurDialog = value;
       }

     get searchEnjeuxIrdChercheur(): EnjeuxIrdChercheurVo {
     if(this._searchEnjeuxIrdChercheur==null){
    this._searchEnjeuxIrdChercheur=new EnjeuxIrdChercheurVo();
    }
        return this._searchEnjeuxIrdChercheur;
    }

    set searchEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this._searchEnjeuxIrdChercheur = value;
       }

}
