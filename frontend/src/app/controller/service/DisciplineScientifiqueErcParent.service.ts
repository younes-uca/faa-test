import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DisciplineScientifiqueErcParentVo} from '../model/DisciplineScientifiqueErcParent.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueErcParentService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/disciplineScientifiqueErcParent/';
        })
    }
     private _disciplineScientifiqueErcParents: Array<DisciplineScientifiqueErcParentVo> ;
     private _selectedDisciplineScientifiqueErcParent: DisciplineScientifiqueErcParentVo;
     private _disciplineScientifiqueErcParentSelections: Array<DisciplineScientifiqueErcParentVo>;
     private _createDisciplineScientifiqueErcParentDialog: boolean;
     private _editDisciplineScientifiqueErcParentDialog: boolean;
     private _viewDisciplineScientifiqueErcParentDialog: boolean;
     public editDisciplineScientifiqueErcParent$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueErcParent:DisciplineScientifiqueErcParentVo ;

    // methods
    public archiver(disciplineScientifiqueErcParent: DisciplineScientifiqueErcParentVo): Observable<DisciplineScientifiqueErcParentVo> {
        return this.http.put<DisciplineScientifiqueErcParentVo>(this.API + 'archiver/' ,disciplineScientifiqueErcParent);
    }
    public desarchiver(disciplineScientifiqueErcParent: DisciplineScientifiqueErcParentVo): Observable<DisciplineScientifiqueErcParentVo> {
    return this.http.put<DisciplineScientifiqueErcParentVo>(this.API + 'desarchiver/' ,disciplineScientifiqueErcParent);
    }

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueErcParentVo>>(this.API);
    }

    public save(): Observable<DisciplineScientifiqueErcParentVo> {
           return this.http.post<DisciplineScientifiqueErcParentVo>(this.API, {...this.selectedDisciplineScientifiqueErcParent,dateCreation: moment(this.selectedDisciplineScientifiqueErcParent.dateCreation).format("YYYY-MM-DD")});
    }

    delete(disciplineScientifiqueErcParent: DisciplineScientifiqueErcParentVo) {
         return this.http.delete<number>(this.API + 'id/' + disciplineScientifiqueErcParent.id);
    }


    public edit(): Observable<DisciplineScientifiqueErcParentVo> {
        return this.http.put<DisciplineScientifiqueErcParentVo>(this.API, this.selectedDisciplineScientifiqueErcParent);
    }


     public findByCriteria(disciplineScientifiqueErcParent:DisciplineScientifiqueErcParentVo):Observable<Array<DisciplineScientifiqueErcParentVo>>{
           return this.http.post<Array<DisciplineScientifiqueErcParentVo>>(this.API +'search', disciplineScientifiqueErcParent);
    }

   public findByIdWithAssociatedList(disciplineScientifiqueErcParent:DisciplineScientifiqueErcParentVo):Observable<DisciplineScientifiqueErcParentVo>{
         return this.http.get<DisciplineScientifiqueErcParentVo>(this.API + 'detail/id/' +disciplineScientifiqueErcParent.id);
    }

    // getters and setters


    get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcParentVo> {
    if(this._disciplineScientifiqueErcParents==null){
    this._disciplineScientifiqueErcParents=new Array<DisciplineScientifiqueErcParentVo>();
    }
return this._disciplineScientifiqueErcParents;
       }

    set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcParentVo>) {
        this._disciplineScientifiqueErcParents = value;
       }

    get selectedDisciplineScientifiqueErcParent(): DisciplineScientifiqueErcParentVo {
    if(this._selectedDisciplineScientifiqueErcParent==null){
    this._selectedDisciplineScientifiqueErcParent=new DisciplineScientifiqueErcParentVo();
    }
           return this._selectedDisciplineScientifiqueErcParent;
       }

    set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this._selectedDisciplineScientifiqueErcParent = value;
       }

    get disciplineScientifiqueErcParentSelections(): Array<DisciplineScientifiqueErcParentVo> {
    if(this._disciplineScientifiqueErcParentSelections==null){
    this._disciplineScientifiqueErcParentSelections=new Array<DisciplineScientifiqueErcParentVo>();
    }
        return this._disciplineScientifiqueErcParentSelections;
       }


    set disciplineScientifiqueErcParentSelections(value: Array<DisciplineScientifiqueErcParentVo>) {
        this._disciplineScientifiqueErcParentSelections = value;
       }

    get createDisciplineScientifiqueErcParentDialog(): boolean {
        return this._createDisciplineScientifiqueErcParentDialog;
       }

    set createDisciplineScientifiqueErcParentDialog(value: boolean) {
        this._createDisciplineScientifiqueErcParentDialog = value;
       }

    get editDisciplineScientifiqueErcParentDialog(): boolean {
        return this._editDisciplineScientifiqueErcParentDialog;
       }

    set editDisciplineScientifiqueErcParentDialog(value: boolean) {
        this._editDisciplineScientifiqueErcParentDialog = value;
       }

    get viewDisciplineScientifiqueErcParentDialog(): boolean {
        return this._viewDisciplineScientifiqueErcParentDialog;
       }

    set viewDisciplineScientifiqueErcParentDialog(value: boolean) {
        this._viewDisciplineScientifiqueErcParentDialog = value;
       }

     get searchDisciplineScientifiqueErcParent(): DisciplineScientifiqueErcParentVo {
     if(this._searchDisciplineScientifiqueErcParent==null){
    this._searchDisciplineScientifiqueErcParent=new DisciplineScientifiqueErcParentVo();
    }
        return this._searchDisciplineScientifiqueErcParent;
    }

    set searchDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this._searchDisciplineScientifiqueErcParent = value;
       }

}
