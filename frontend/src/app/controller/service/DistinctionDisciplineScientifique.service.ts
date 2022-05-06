import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DistinctionDisciplineScientifiqueVo} from '../model/DistinctionDisciplineScientifique.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';
import {DistinctionVo} from '../model/Distinction.model';


@Injectable({
  providedIn: 'root'
})
export class DistinctionDisciplineScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/distinctionDisciplineScientifique/';
        })
    }
     private _distinctionDisciplineScientifiques: Array<DistinctionDisciplineScientifiqueVo> ;
     private _selectedDistinctionDisciplineScientifique: DistinctionDisciplineScientifiqueVo;
     private _distinctionDisciplineScientifiqueSelections: Array<DistinctionDisciplineScientifiqueVo>;
     private _createDistinctionDisciplineScientifiqueDialog: boolean;
     private _editDistinctionDisciplineScientifiqueDialog: boolean;
     private _viewDistinctionDisciplineScientifiqueDialog: boolean;
     public editDistinctionDisciplineScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDistinctionDisciplineScientifique:DistinctionDisciplineScientifiqueVo ;

    // methods

    public findAll(){
     return this.http.get<Array<DistinctionDisciplineScientifiqueVo>>(this.API);
    }

    public save(): Observable<DistinctionDisciplineScientifiqueVo> {
         return this.http.post<DistinctionDisciplineScientifiqueVo>(this.API, this.selectedDistinctionDisciplineScientifique);
    }

    delete(distinctionDisciplineScientifique: DistinctionDisciplineScientifiqueVo) {
         return this.http.delete<number>(this.API + 'id/' + distinctionDisciplineScientifique.id);
    }


    public edit(): Observable<DistinctionDisciplineScientifiqueVo> {
        return this.http.put<DistinctionDisciplineScientifiqueVo>(this.API, this.selectedDistinctionDisciplineScientifique);
    }


     public findByCriteria(distinctionDisciplineScientifique:DistinctionDisciplineScientifiqueVo):Observable<Array<DistinctionDisciplineScientifiqueVo>>{
           return this.http.post<Array<DistinctionDisciplineScientifiqueVo>>(this.API +'search', distinctionDisciplineScientifique);
    }

   public findByIdWithAssociatedList(distinctionDisciplineScientifique:DistinctionDisciplineScientifiqueVo):Observable<DistinctionDisciplineScientifiqueVo>{
         return this.http.get<DistinctionDisciplineScientifiqueVo>(this.API + 'detail/id/' +distinctionDisciplineScientifique.id);
    }

    // getters and setters


    get distinctionDisciplineScientifiques(): Array<DistinctionDisciplineScientifiqueVo> {
    if(this._distinctionDisciplineScientifiques==null){
    this._distinctionDisciplineScientifiques=new Array<DistinctionDisciplineScientifiqueVo>();
    }
return this._distinctionDisciplineScientifiques;
       }

    set distinctionDisciplineScientifiques(value: Array<DistinctionDisciplineScientifiqueVo>) {
        this._distinctionDisciplineScientifiques = value;
       }

    get selectedDistinctionDisciplineScientifique(): DistinctionDisciplineScientifiqueVo {
    if(this._selectedDistinctionDisciplineScientifique==null){
    this._selectedDistinctionDisciplineScientifique=new DistinctionDisciplineScientifiqueVo();
    }
           return this._selectedDistinctionDisciplineScientifique;
       }

    set selectedDistinctionDisciplineScientifique(value: DistinctionDisciplineScientifiqueVo) {
        this._selectedDistinctionDisciplineScientifique = value;
       }

    get distinctionDisciplineScientifiqueSelections(): Array<DistinctionDisciplineScientifiqueVo> {
    if(this._distinctionDisciplineScientifiqueSelections==null){
    this._distinctionDisciplineScientifiqueSelections=new Array<DistinctionDisciplineScientifiqueVo>();
    }
        return this._distinctionDisciplineScientifiqueSelections;
       }


    set distinctionDisciplineScientifiqueSelections(value: Array<DistinctionDisciplineScientifiqueVo>) {
        this._distinctionDisciplineScientifiqueSelections = value;
       }

    get createDistinctionDisciplineScientifiqueDialog(): boolean {
        return this._createDistinctionDisciplineScientifiqueDialog;
       }

    set createDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this._createDistinctionDisciplineScientifiqueDialog = value;
       }

    get editDistinctionDisciplineScientifiqueDialog(): boolean {
        return this._editDistinctionDisciplineScientifiqueDialog;
       }

    set editDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this._editDistinctionDisciplineScientifiqueDialog = value;
       }

    get viewDistinctionDisciplineScientifiqueDialog(): boolean {
        return this._viewDistinctionDisciplineScientifiqueDialog;
       }

    set viewDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this._viewDistinctionDisciplineScientifiqueDialog = value;
       }

     get searchDistinctionDisciplineScientifique(): DistinctionDisciplineScientifiqueVo {
     if(this._searchDistinctionDisciplineScientifique==null){
    this._searchDistinctionDisciplineScientifique=new DistinctionDisciplineScientifiqueVo();
    }
        return this._searchDistinctionDisciplineScientifique;
    }

    set searchDistinctionDisciplineScientifique(value: DistinctionDisciplineScientifiqueVo) {
        this._searchDistinctionDisciplineScientifique = value;
       }

}
