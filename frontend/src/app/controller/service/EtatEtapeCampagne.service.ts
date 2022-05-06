import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {EtatEtapeCampagneVo} from '../model/EtatEtapeCampagne.model';


@Injectable({
  providedIn: 'root'
})
export class EtatEtapeCampagneService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/etatEtapeCampagne/';
        })
    }
     private _etatEtapeCampagnes: Array<EtatEtapeCampagneVo> ;
     private _selectedEtatEtapeCampagne: EtatEtapeCampagneVo;
     private _etatEtapeCampagneSelections: Array<EtatEtapeCampagneVo>;
     private _createEtatEtapeCampagneDialog: boolean;
     private _editEtatEtapeCampagneDialog: boolean;
     private _viewEtatEtapeCampagneDialog: boolean;
     public editEtatEtapeCampagne$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEtatEtapeCampagne:EtatEtapeCampagneVo ;

    // methods

    public findAll(){
     return this.http.get<Array<EtatEtapeCampagneVo>>(this.API);
    }

    public save(): Observable<EtatEtapeCampagneVo> {
         return this.http.post<EtatEtapeCampagneVo>(this.API, this.selectedEtatEtapeCampagne);
    }

    delete(etatEtapeCampagne: EtatEtapeCampagneVo) {
         return this.http.delete<number>(this.API + 'id/' + etatEtapeCampagne.id);
    }


    public edit(): Observable<EtatEtapeCampagneVo> {
        return this.http.put<EtatEtapeCampagneVo>(this.API, this.selectedEtatEtapeCampagne);
    }


     public findByCriteria(etatEtapeCampagne:EtatEtapeCampagneVo):Observable<Array<EtatEtapeCampagneVo>>{
           return this.http.post<Array<EtatEtapeCampagneVo>>(this.API +'search', etatEtapeCampagne);
    }

   public findByIdWithAssociatedList(etatEtapeCampagne:EtatEtapeCampagneVo):Observable<EtatEtapeCampagneVo>{
         return this.http.get<EtatEtapeCampagneVo>(this.API + 'detail/id/' +etatEtapeCampagne.id);
    }

    // getters and setters


    get etatEtapeCampagnes(): Array<EtatEtapeCampagneVo> {
    if(this._etatEtapeCampagnes==null){
    this._etatEtapeCampagnes=new Array<EtatEtapeCampagneVo>();
    }
return this._etatEtapeCampagnes;
       }

    set etatEtapeCampagnes(value: Array<EtatEtapeCampagneVo>) {
        this._etatEtapeCampagnes = value;
       }

    get selectedEtatEtapeCampagne(): EtatEtapeCampagneVo {
    if(this._selectedEtatEtapeCampagne==null){
    this._selectedEtatEtapeCampagne=new EtatEtapeCampagneVo();
    }
           return this._selectedEtatEtapeCampagne;
       }

    set selectedEtatEtapeCampagne(value: EtatEtapeCampagneVo) {
        this._selectedEtatEtapeCampagne = value;
       }

    get etatEtapeCampagneSelections(): Array<EtatEtapeCampagneVo> {
    if(this._etatEtapeCampagneSelections==null){
    this._etatEtapeCampagneSelections=new Array<EtatEtapeCampagneVo>();
    }
        return this._etatEtapeCampagneSelections;
       }


    set etatEtapeCampagneSelections(value: Array<EtatEtapeCampagneVo>) {
        this._etatEtapeCampagneSelections = value;
       }

    get createEtatEtapeCampagneDialog(): boolean {
        return this._createEtatEtapeCampagneDialog;
       }

    set createEtatEtapeCampagneDialog(value: boolean) {
        this._createEtatEtapeCampagneDialog = value;
       }

    get editEtatEtapeCampagneDialog(): boolean {
        return this._editEtatEtapeCampagneDialog;
       }

    set editEtatEtapeCampagneDialog(value: boolean) {
        this._editEtatEtapeCampagneDialog = value;
       }

    get viewEtatEtapeCampagneDialog(): boolean {
        return this._viewEtatEtapeCampagneDialog;
       }

    set viewEtatEtapeCampagneDialog(value: boolean) {
        this._viewEtatEtapeCampagneDialog = value;
       }

     get searchEtatEtapeCampagne(): EtatEtapeCampagneVo {
     if(this._searchEtatEtapeCampagne==null){
    this._searchEtatEtapeCampagne=new EtatEtapeCampagneVo();
    }
        return this._searchEtatEtapeCampagne;
    }

    set searchEtatEtapeCampagne(value: EtatEtapeCampagneVo) {
        this._searchEtatEtapeCampagne = value;
       }

}
