import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {ChercheurVo} from '../model/Chercheur.model';
import {IdentifiantAuteurExpertVo} from '../model/IdentifiantAuteurExpert.model';
import {EnjeuxIrdChercheurVo} from '../model/EnjeuxIrdChercheur.model';
import {DisciplineScientifiqueChercheurVo} from '../model/DisciplineScientifiqueChercheur.model';


@Injectable({
  providedIn: 'root'
})
export class ChercheurService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/chercheur/';
        })
    }
     private _chercheurs: Array<ChercheurVo> ;
     private _selectedChercheur: ChercheurVo;
     private _chercheurSelections: Array<ChercheurVo>;
     private _createChercheurDialog: boolean;
     private _editChercheurDialog: boolean;
     private _viewChercheurDialog: boolean;
     public editChercheur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchChercheur:ChercheurVo ;
     private _switchChercheurDialog: boolean;

    // methods

    public findAll(){
     return this.http.get<Array<ChercheurVo>>(this.API);
    }

    public save(): Observable<ChercheurVo> {
           return this.http.post<ChercheurVo>(this.API, {...this.selectedChercheur,updatedAt: moment(this.selectedChercheur.updatedAt).format("YYYY-MM-DD")});
    }

    delete(chercheur: ChercheurVo) {
         return this.http.delete<number>(this.API + 'id/' + chercheur.id);
    }


    public edit(): Observable<ChercheurVo> {
        return this.http.put<ChercheurVo>(this.API, this.selectedChercheur);
    }


     public findByCriteria(chercheur:ChercheurVo):Observable<Array<ChercheurVo>>{
           return this.http.post<Array<ChercheurVo>>(this.API +'search', chercheur);
    }

   public findByIdWithAssociatedList(chercheur:ChercheurVo):Observable<ChercheurVo>{
         return this.http.get<ChercheurVo>(this.API + 'detail/id/' +chercheur.id);
    }

    // getters and setters


    get chercheurs(): Array<ChercheurVo> {
    if(this._chercheurs==null){
    this._chercheurs=new Array<ChercheurVo>();
    }
return this._chercheurs;
       }

    set chercheurs(value: Array<ChercheurVo>) {
        this._chercheurs = value;
       }

    get selectedChercheur(): ChercheurVo {
    if(this._selectedChercheur==null){
    this._selectedChercheur=new ChercheurVo();
    }
           return this._selectedChercheur;
       }

    set selectedChercheur(value: ChercheurVo) {
        this._selectedChercheur = value;
       }

    get chercheurSelections(): Array<ChercheurVo> {
    if(this._chercheurSelections==null){
    this._chercheurSelections=new Array<ChercheurVo>();
    }
        return this._chercheurSelections;
       }


    set chercheurSelections(value: Array<ChercheurVo>) {
        this._chercheurSelections = value;
       }

    get createChercheurDialog(): boolean {
        return this._createChercheurDialog;
       }

    set createChercheurDialog(value: boolean) {
        this._createChercheurDialog = value;
       }

    get editChercheurDialog(): boolean {
        return this._editChercheurDialog;
       }

    set editChercheurDialog(value: boolean) {
        this._editChercheurDialog = value;
       }

    get viewChercheurDialog(): boolean {
        return this._viewChercheurDialog;
       }

    set viewChercheurDialog(value: boolean) {
        this._viewChercheurDialog = value;
       }

     get searchChercheur(): ChercheurVo {
     if(this._searchChercheur==null){
    this._searchChercheur=new ChercheurVo();
    }
        return this._searchChercheur;
    }

    set searchChercheur(value: ChercheurVo) {
        this._searchChercheur = value;
       }

   get switchChercheurDialog(): boolean {
    return this._switchChercheurDialog;
    }

    set switchChercheurDialog(value: boolean) {
    this._switchChercheurDialog = value;
    }
}
