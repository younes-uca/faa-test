import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DisciplineScientifiqueParentVo} from '../model/DisciplineScientifiqueParent.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueParentService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/disciplineScientifiqueParent/';
        })
    }
     private _disciplineScientifiqueParents: Array<DisciplineScientifiqueParentVo> ;
     private _selectedDisciplineScientifiqueParent: DisciplineScientifiqueParentVo;
     private _disciplineScientifiqueParentSelections: Array<DisciplineScientifiqueParentVo>;
     private _createDisciplineScientifiqueParentDialog: boolean;
     private _editDisciplineScientifiqueParentDialog: boolean;
     private _viewDisciplineScientifiqueParentDialog: boolean;
     public editDisciplineScientifiqueParent$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueParent:DisciplineScientifiqueParentVo ;

    // methods
    public archiver(disciplineScientifiqueParent: DisciplineScientifiqueParentVo): Observable<DisciplineScientifiqueParentVo> {
        return this.http.put<DisciplineScientifiqueParentVo>(this.API + 'archiver/' ,disciplineScientifiqueParent);
    }
    public desarchiver(disciplineScientifiqueParent: DisciplineScientifiqueParentVo): Observable<DisciplineScientifiqueParentVo> {
    return this.http.put<DisciplineScientifiqueParentVo>(this.API + 'desarchiver/' ,disciplineScientifiqueParent);
    }

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueParentVo>>(this.API);
    }

    public save(): Observable<DisciplineScientifiqueParentVo> {
           return this.http.post<DisciplineScientifiqueParentVo>(this.API, {...this.selectedDisciplineScientifiqueParent,dateCreation: moment(this.selectedDisciplineScientifiqueParent.dateCreation).format("YYYY-MM-DD")});
    }

    delete(disciplineScientifiqueParent: DisciplineScientifiqueParentVo) {
         return this.http.delete<number>(this.API + 'id/' + disciplineScientifiqueParent.id);
    }


    public edit(): Observable<DisciplineScientifiqueParentVo> {
        return this.http.put<DisciplineScientifiqueParentVo>(this.API, this.selectedDisciplineScientifiqueParent);
    }


     public findByCriteria(disciplineScientifiqueParent:DisciplineScientifiqueParentVo):Observable<Array<DisciplineScientifiqueParentVo>>{
           return this.http.post<Array<DisciplineScientifiqueParentVo>>(this.API +'search', disciplineScientifiqueParent);
    }

   public findByIdWithAssociatedList(disciplineScientifiqueParent:DisciplineScientifiqueParentVo):Observable<DisciplineScientifiqueParentVo>{
         return this.http.get<DisciplineScientifiqueParentVo>(this.API + 'detail/id/' +disciplineScientifiqueParent.id);
    }

    // getters and setters


    get disciplineScientifiqueParents(): Array<DisciplineScientifiqueParentVo> {
    if(this._disciplineScientifiqueParents==null){
    this._disciplineScientifiqueParents=new Array<DisciplineScientifiqueParentVo>();
    }
return this._disciplineScientifiqueParents;
       }

    set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueParentVo>) {
        this._disciplineScientifiqueParents = value;
       }

    get selectedDisciplineScientifiqueParent(): DisciplineScientifiqueParentVo {
    if(this._selectedDisciplineScientifiqueParent==null){
    this._selectedDisciplineScientifiqueParent=new DisciplineScientifiqueParentVo();
    }
           return this._selectedDisciplineScientifiqueParent;
       }

    set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueParentVo) {
        this._selectedDisciplineScientifiqueParent = value;
       }

    get disciplineScientifiqueParentSelections(): Array<DisciplineScientifiqueParentVo> {
    if(this._disciplineScientifiqueParentSelections==null){
    this._disciplineScientifiqueParentSelections=new Array<DisciplineScientifiqueParentVo>();
    }
        return this._disciplineScientifiqueParentSelections;
       }


    set disciplineScientifiqueParentSelections(value: Array<DisciplineScientifiqueParentVo>) {
        this._disciplineScientifiqueParentSelections = value;
       }

    get createDisciplineScientifiqueParentDialog(): boolean {
        return this._createDisciplineScientifiqueParentDialog;
       }

    set createDisciplineScientifiqueParentDialog(value: boolean) {
        this._createDisciplineScientifiqueParentDialog = value;
       }

    get editDisciplineScientifiqueParentDialog(): boolean {
        return this._editDisciplineScientifiqueParentDialog;
       }

    set editDisciplineScientifiqueParentDialog(value: boolean) {
        this._editDisciplineScientifiqueParentDialog = value;
       }

    get viewDisciplineScientifiqueParentDialog(): boolean {
        return this._viewDisciplineScientifiqueParentDialog;
       }

    set viewDisciplineScientifiqueParentDialog(value: boolean) {
        this._viewDisciplineScientifiqueParentDialog = value;
       }

     get searchDisciplineScientifiqueParent(): DisciplineScientifiqueParentVo {
     if(this._searchDisciplineScientifiqueParent==null){
    this._searchDisciplineScientifiqueParent=new DisciplineScientifiqueParentVo();
    }
        return this._searchDisciplineScientifiqueParent;
    }

    set searchDisciplineScientifiqueParent(value: DisciplineScientifiqueParentVo) {
        this._searchDisciplineScientifiqueParent = value;
       }

}
