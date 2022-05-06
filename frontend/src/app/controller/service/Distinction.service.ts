import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DistinctionVo} from '../model/Distinction.model';
import {EtatEtapeCampagneVo} from '../model/EtatEtapeCampagne.model';
import {CampagneVo} from '../model/Campagne.model';
import {DistinctionDisciplineScientifiqueVo} from '../model/DistinctionDisciplineScientifique.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class DistinctionService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/distinction/';
        })
    }
     private _distinctions: Array<DistinctionVo> ;
     private _selectedDistinction: DistinctionVo;
     private _distinctionSelections: Array<DistinctionVo>;
     private _createDistinctionDialog: boolean;
     private _editDistinctionDialog: boolean;
     private _viewDistinctionDialog: boolean;
     public editDistinction$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDistinction:DistinctionVo ;

    // methods

    public findByChercheurUsernameAndCampagneId(username: string, compagneId: number): Observable<DistinctionVo>{
        return this.http.get<DistinctionVo>(this.API + 'username/' +username+ '/id/' +compagneId);
        }

    public findByChercheurId(id: string): Observable<Array<DistinctionVo>>{
        return this.http.get<Array<DistinctionVo>>(this.API + 'chercheur/id/' +id);
         }

    public findAll(){
     return this.http.get<Array<DistinctionVo>>(this.API);
    }

    public save(): Observable<DistinctionVo> {
           return this.http.post<DistinctionVo>(this.API, {...this.selectedDistinction,dateObtention: moment(this.selectedDistinction.dateObtention).format("YYYY-MM-DD")});
    }

    delete(distinction: DistinctionVo) {
         return this.http.delete<number>(this.API + 'id/' + distinction.id);
    }


    public edit(): Observable<DistinctionVo> {
        return this.http.put<DistinctionVo>(this.API, this.selectedDistinction);
    }


     public findByCriteria(distinction:DistinctionVo):Observable<Array<DistinctionVo>>{
           return this.http.post<Array<DistinctionVo>>(this.API +'search', distinction);
    }

   public findByIdWithAssociatedList(distinction:DistinctionVo):Observable<DistinctionVo>{
         return this.http.get<DistinctionVo>(this.API + 'detail/id/' +distinction.id);
    }

    // getters and setters


    get distinctions(): Array<DistinctionVo> {
    if(this._distinctions==null){
    this._distinctions=new Array<DistinctionVo>();
    }
return this._distinctions;
       }

    set distinctions(value: Array<DistinctionVo>) {
        this._distinctions = value;
       }

    get selectedDistinction(): DistinctionVo {
    if(this._selectedDistinction==null){
    this._selectedDistinction=new DistinctionVo();
    }
           return this._selectedDistinction;
       }

    set selectedDistinction(value: DistinctionVo) {
        this._selectedDistinction = value;
       }

    get distinctionSelections(): Array<DistinctionVo> {
    if(this._distinctionSelections==null){
    this._distinctionSelections=new Array<DistinctionVo>();
    }
        return this._distinctionSelections;
       }


    set distinctionSelections(value: Array<DistinctionVo>) {
        this._distinctionSelections = value;
       }

    get createDistinctionDialog(): boolean {
        return this._createDistinctionDialog;
       }

    set createDistinctionDialog(value: boolean) {
        this._createDistinctionDialog = value;
       }

    get editDistinctionDialog(): boolean {
        return this._editDistinctionDialog;
       }

    set editDistinctionDialog(value: boolean) {
        this._editDistinctionDialog = value;
       }

    get viewDistinctionDialog(): boolean {
        return this._viewDistinctionDialog;
       }

    set viewDistinctionDialog(value: boolean) {
        this._viewDistinctionDialog = value;
       }

     get searchDistinction(): DistinctionVo {
     if(this._searchDistinction==null){
    this._searchDistinction=new DistinctionVo();
    }
        return this._searchDistinction;
    }

    set searchDistinction(value: DistinctionVo) {
        this._searchDistinction = value;
       }

}
