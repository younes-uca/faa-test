import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DisciplineScientifiqueChercheurVo} from '../model/DisciplineScientifiqueChercheur.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';
import {DisciplineScientifiqueErcVo} from '../model/DisciplineScientifiqueErc.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueChercheurService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/disciplineScientifiqueChercheur/';
        })
    }
     private _disciplineScientifiqueChercheurs: Array<DisciplineScientifiqueChercheurVo> ;
     private _selectedDisciplineScientifiqueChercheur: DisciplineScientifiqueChercheurVo;
     private _disciplineScientifiqueChercheurSelections: Array<DisciplineScientifiqueChercheurVo>;
     private _createDisciplineScientifiqueChercheurDialog: boolean;
     private _editDisciplineScientifiqueChercheurDialog: boolean;
     private _viewDisciplineScientifiqueChercheurDialog: boolean;
     public editDisciplineScientifiqueChercheur$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueChercheur:DisciplineScientifiqueChercheurVo ;

    // methods

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueChercheurVo>>(this.API);
    }

    public save(): Observable<DisciplineScientifiqueChercheurVo> {
         return this.http.post<DisciplineScientifiqueChercheurVo>(this.API, this.selectedDisciplineScientifiqueChercheur);
    }

    delete(disciplineScientifiqueChercheur: DisciplineScientifiqueChercheurVo) {
         return this.http.delete<number>(this.API + 'id/' + disciplineScientifiqueChercheur.id);
    }


    public edit(): Observable<DisciplineScientifiqueChercheurVo> {
        return this.http.put<DisciplineScientifiqueChercheurVo>(this.API, this.selectedDisciplineScientifiqueChercheur);
    }


     public findByCriteria(disciplineScientifiqueChercheur:DisciplineScientifiqueChercheurVo):Observable<Array<DisciplineScientifiqueChercheurVo>>{
           return this.http.post<Array<DisciplineScientifiqueChercheurVo>>(this.API +'search', disciplineScientifiqueChercheur);
    }

   public findByIdWithAssociatedList(disciplineScientifiqueChercheur:DisciplineScientifiqueChercheurVo):Observable<DisciplineScientifiqueChercheurVo>{
         return this.http.get<DisciplineScientifiqueChercheurVo>(this.API + 'detail/id/' +disciplineScientifiqueChercheur.id);
    }

    // getters and setters


    get disciplineScientifiqueChercheurs(): Array<DisciplineScientifiqueChercheurVo> {
    if(this._disciplineScientifiqueChercheurs==null){
    this._disciplineScientifiqueChercheurs=new Array<DisciplineScientifiqueChercheurVo>();
    }
return this._disciplineScientifiqueChercheurs;
       }

    set disciplineScientifiqueChercheurs(value: Array<DisciplineScientifiqueChercheurVo>) {
        this._disciplineScientifiqueChercheurs = value;
       }

    get selectedDisciplineScientifiqueChercheur(): DisciplineScientifiqueChercheurVo {
    if(this._selectedDisciplineScientifiqueChercheur==null){
    this._selectedDisciplineScientifiqueChercheur=new DisciplineScientifiqueChercheurVo();
    }
           return this._selectedDisciplineScientifiqueChercheur;
       }

    set selectedDisciplineScientifiqueChercheur(value: DisciplineScientifiqueChercheurVo) {
        this._selectedDisciplineScientifiqueChercheur = value;
       }

    get disciplineScientifiqueChercheurSelections(): Array<DisciplineScientifiqueChercheurVo> {
    if(this._disciplineScientifiqueChercheurSelections==null){
    this._disciplineScientifiqueChercheurSelections=new Array<DisciplineScientifiqueChercheurVo>();
    }
        return this._disciplineScientifiqueChercheurSelections;
       }


    set disciplineScientifiqueChercheurSelections(value: Array<DisciplineScientifiqueChercheurVo>) {
        this._disciplineScientifiqueChercheurSelections = value;
       }

    get createDisciplineScientifiqueChercheurDialog(): boolean {
        return this._createDisciplineScientifiqueChercheurDialog;
       }

    set createDisciplineScientifiqueChercheurDialog(value: boolean) {
        this._createDisciplineScientifiqueChercheurDialog = value;
       }

    get editDisciplineScientifiqueChercheurDialog(): boolean {
        return this._editDisciplineScientifiqueChercheurDialog;
       }

    set editDisciplineScientifiqueChercheurDialog(value: boolean) {
        this._editDisciplineScientifiqueChercheurDialog = value;
       }

    get viewDisciplineScientifiqueChercheurDialog(): boolean {
        return this._viewDisciplineScientifiqueChercheurDialog;
       }

    set viewDisciplineScientifiqueChercheurDialog(value: boolean) {
        this._viewDisciplineScientifiqueChercheurDialog = value;
       }

     get searchDisciplineScientifiqueChercheur(): DisciplineScientifiqueChercheurVo {
     if(this._searchDisciplineScientifiqueChercheur==null){
    this._searchDisciplineScientifiqueChercheur=new DisciplineScientifiqueChercheurVo();
    }
        return this._searchDisciplineScientifiqueChercheur;
    }

    set searchDisciplineScientifiqueChercheur(value: DisciplineScientifiqueChercheurVo) {
        this._searchDisciplineScientifiqueChercheur = value;
       }

}
