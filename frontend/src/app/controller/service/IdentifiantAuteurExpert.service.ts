import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {IdentifiantAuteurExpertVo} from '../model/IdentifiantAuteurExpert.model';
import {IdentifiantRechercheVo} from '../model/IdentifiantRecherche.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class IdentifiantAuteurExpertService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/identifiantAuteurExpert/';
        })
    }
     private _identifiantAuteurExperts: Array<IdentifiantAuteurExpertVo> ;
     private _selectedIdentifiantAuteurExpert: IdentifiantAuteurExpertVo;
     private _identifiantAuteurExpertSelections: Array<IdentifiantAuteurExpertVo>;
     private _createIdentifiantAuteurExpertDialog: boolean;
     private _editIdentifiantAuteurExpertDialog: boolean;
     private _viewIdentifiantAuteurExpertDialog: boolean;
     public editIdentifiantAuteurExpert$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchIdentifiantAuteurExpert:IdentifiantAuteurExpertVo ;

    // methods

    public findAll(){
     return this.http.get<Array<IdentifiantAuteurExpertVo>>(this.API);
    }

    public save(): Observable<IdentifiantAuteurExpertVo> {
         return this.http.post<IdentifiantAuteurExpertVo>(this.API, this.selectedIdentifiantAuteurExpert);
    }

    delete(identifiantAuteurExpert: IdentifiantAuteurExpertVo) {
         return this.http.delete<number>(this.API + 'id/' + identifiantAuteurExpert.id);
    }


    public edit(): Observable<IdentifiantAuteurExpertVo> {
        return this.http.put<IdentifiantAuteurExpertVo>(this.API, this.selectedIdentifiantAuteurExpert);
    }


     public findByCriteria(identifiantAuteurExpert:IdentifiantAuteurExpertVo):Observable<Array<IdentifiantAuteurExpertVo>>{
           return this.http.post<Array<IdentifiantAuteurExpertVo>>(this.API +'search', identifiantAuteurExpert);
    }

   public findByIdWithAssociatedList(identifiantAuteurExpert:IdentifiantAuteurExpertVo):Observable<IdentifiantAuteurExpertVo>{
         return this.http.get<IdentifiantAuteurExpertVo>(this.API + 'detail/id/' +identifiantAuteurExpert.id);
    }

    // getters and setters


    get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
    if(this._identifiantAuteurExperts==null){
    this._identifiantAuteurExperts=new Array<IdentifiantAuteurExpertVo>();
    }
return this._identifiantAuteurExperts;
       }

    set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this._identifiantAuteurExperts = value;
       }

    get selectedIdentifiantAuteurExpert(): IdentifiantAuteurExpertVo {
    if(this._selectedIdentifiantAuteurExpert==null){
    this._selectedIdentifiantAuteurExpert=new IdentifiantAuteurExpertVo();
    }
           return this._selectedIdentifiantAuteurExpert;
       }

    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this._selectedIdentifiantAuteurExpert = value;
       }

    get identifiantAuteurExpertSelections(): Array<IdentifiantAuteurExpertVo> {
    if(this._identifiantAuteurExpertSelections==null){
    this._identifiantAuteurExpertSelections=new Array<IdentifiantAuteurExpertVo>();
    }
        return this._identifiantAuteurExpertSelections;
       }


    set identifiantAuteurExpertSelections(value: Array<IdentifiantAuteurExpertVo>) {
        this._identifiantAuteurExpertSelections = value;
       }

    get createIdentifiantAuteurExpertDialog(): boolean {
        return this._createIdentifiantAuteurExpertDialog;
       }

    set createIdentifiantAuteurExpertDialog(value: boolean) {
        this._createIdentifiantAuteurExpertDialog = value;
       }

    get editIdentifiantAuteurExpertDialog(): boolean {
        return this._editIdentifiantAuteurExpertDialog;
       }

    set editIdentifiantAuteurExpertDialog(value: boolean) {
        this._editIdentifiantAuteurExpertDialog = value;
       }

    get viewIdentifiantAuteurExpertDialog(): boolean {
        return this._viewIdentifiantAuteurExpertDialog;
       }

    set viewIdentifiantAuteurExpertDialog(value: boolean) {
        this._viewIdentifiantAuteurExpertDialog = value;
       }

     get searchIdentifiantAuteurExpert(): IdentifiantAuteurExpertVo {
     if(this._searchIdentifiantAuteurExpert==null){
    this._searchIdentifiantAuteurExpert=new IdentifiantAuteurExpertVo();
    }
        return this._searchIdentifiantAuteurExpert;
    }

    set searchIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this._searchIdentifiantAuteurExpert = value;
       }

}
