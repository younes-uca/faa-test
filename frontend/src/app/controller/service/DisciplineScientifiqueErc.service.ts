import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DisciplineScientifiqueErcVo} from '../model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcParentVo} from '../model/DisciplineScientifiqueErcParent.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueErcService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/disciplineScientifiqueErc/';
        })
    }
     private _disciplineScientifiqueErcs: Array<DisciplineScientifiqueErcVo> ;
     private _selectedDisciplineScientifiqueErc: DisciplineScientifiqueErcVo;
     private _disciplineScientifiqueErcSelections: Array<DisciplineScientifiqueErcVo>;
     private _createDisciplineScientifiqueErcDialog: boolean;
     private _editDisciplineScientifiqueErcDialog: boolean;
     private _viewDisciplineScientifiqueErcDialog: boolean;
     public editDisciplineScientifiqueErc$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueErc:DisciplineScientifiqueErcVo ;

    // methods
    public archiver(disciplineScientifiqueErc: DisciplineScientifiqueErcVo): Observable<DisciplineScientifiqueErcVo> {
        return this.http.put<DisciplineScientifiqueErcVo>(this.API + 'archiver/' ,disciplineScientifiqueErc);
    }
    public desarchiver(disciplineScientifiqueErc: DisciplineScientifiqueErcVo): Observable<DisciplineScientifiqueErcVo> {
    return this.http.put<DisciplineScientifiqueErcVo>(this.API + 'desarchiver/' ,disciplineScientifiqueErc);
    }

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueErcVo>>(this.API);
    }

    public save(): Observable<DisciplineScientifiqueErcVo> {
           return this.http.post<DisciplineScientifiqueErcVo>(this.API, {...this.selectedDisciplineScientifiqueErc,dateCreation: moment(this.selectedDisciplineScientifiqueErc.dateCreation).format("YYYY-MM-DD")});
    }

    delete(disciplineScientifiqueErc: DisciplineScientifiqueErcVo) {
         return this.http.delete<number>(this.API + 'id/' + disciplineScientifiqueErc.id);
    }


    public edit(): Observable<DisciplineScientifiqueErcVo> {
        return this.http.put<DisciplineScientifiqueErcVo>(this.API, this.selectedDisciplineScientifiqueErc);
    }


     public findByCriteria(disciplineScientifiqueErc:DisciplineScientifiqueErcVo):Observable<Array<DisciplineScientifiqueErcVo>>{
           return this.http.post<Array<DisciplineScientifiqueErcVo>>(this.API +'search', disciplineScientifiqueErc);
    }

   public findByIdWithAssociatedList(disciplineScientifiqueErc:DisciplineScientifiqueErcVo):Observable<DisciplineScientifiqueErcVo>{
         return this.http.get<DisciplineScientifiqueErcVo>(this.API + 'detail/id/' +disciplineScientifiqueErc.id);
    }

    // getters and setters


    get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
    if(this._disciplineScientifiqueErcs==null){
    this._disciplineScientifiqueErcs=new Array<DisciplineScientifiqueErcVo>();
    }
return this._disciplineScientifiqueErcs;
       }

    set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this._disciplineScientifiqueErcs = value;
       }

    get selectedDisciplineScientifiqueErc(): DisciplineScientifiqueErcVo {
    if(this._selectedDisciplineScientifiqueErc==null){
    this._selectedDisciplineScientifiqueErc=new DisciplineScientifiqueErcVo();
    }
           return this._selectedDisciplineScientifiqueErc;
       }

    set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this._selectedDisciplineScientifiqueErc = value;
       }

    get disciplineScientifiqueErcSelections(): Array<DisciplineScientifiqueErcVo> {
    if(this._disciplineScientifiqueErcSelections==null){
    this._disciplineScientifiqueErcSelections=new Array<DisciplineScientifiqueErcVo>();
    }
        return this._disciplineScientifiqueErcSelections;
       }


    set disciplineScientifiqueErcSelections(value: Array<DisciplineScientifiqueErcVo>) {
        this._disciplineScientifiqueErcSelections = value;
       }

    get createDisciplineScientifiqueErcDialog(): boolean {
        return this._createDisciplineScientifiqueErcDialog;
       }

    set createDisciplineScientifiqueErcDialog(value: boolean) {
        this._createDisciplineScientifiqueErcDialog = value;
       }

    get editDisciplineScientifiqueErcDialog(): boolean {
        return this._editDisciplineScientifiqueErcDialog;
       }

    set editDisciplineScientifiqueErcDialog(value: boolean) {
        this._editDisciplineScientifiqueErcDialog = value;
       }

    get viewDisciplineScientifiqueErcDialog(): boolean {
        return this._viewDisciplineScientifiqueErcDialog;
       }

    set viewDisciplineScientifiqueErcDialog(value: boolean) {
        this._viewDisciplineScientifiqueErcDialog = value;
       }

     get searchDisciplineScientifiqueErc(): DisciplineScientifiqueErcVo {
     if(this._searchDisciplineScientifiqueErc==null){
    this._searchDisciplineScientifiqueErc=new DisciplineScientifiqueErcVo();
    }
        return this._searchDisciplineScientifiqueErc;
    }

    set searchDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this._searchDisciplineScientifiqueErc = value;
       }

}
