import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {CampagneVo} from '../model/Campagne.model';


@Injectable({
  providedIn: 'root'
})
export class CampagneService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/campagne/';
        })
    }
     private _campagnes: Array<CampagneVo> ;
     private _selectedCampagne: CampagneVo;
     private _campagneSelections: Array<CampagneVo>;
     private _createCampagneDialog: boolean;
     private _editCampagneDialog: boolean;
     private _viewCampagneDialog: boolean;
     public editCampagne$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCampagne:CampagneVo ;

    // methods
	public findProgressCampagneByChercheurUsername(username: string): Observable<CampagneVo> {
        return this.http.get<CampagneVo>(this.API + 'searchByChercheurUsername/' + username);
    }

    public findAll(){
     return this.http.get<Array<CampagneVo>>(this.API);
    }

    public save(): Observable<CampagneVo> {
           return this.http.post<CampagneVo>(this.API, {...this.selectedCampagne,dateFin: moment(this.selectedCampagne.dateFin).format("YYYY-MM-DD")});
    }

    delete(campagne: CampagneVo) {
         return this.http.delete<number>(this.API + 'id/' + campagne.id);
    }


    public edit(): Observable<CampagneVo> {
        return this.http.put<CampagneVo>(this.API, this.selectedCampagne);
    }


     public findByCriteria(campagne:CampagneVo):Observable<Array<CampagneVo>>{
           return this.http.post<Array<CampagneVo>>(this.API +'search', campagne);
    }

   public findByIdWithAssociatedList(campagne:CampagneVo):Observable<CampagneVo>{
         return this.http.get<CampagneVo>(this.API + 'detail/id/' +campagne.id);
    }

    // getters and setters


    get campagnes(): Array<CampagneVo> {
    if(this._campagnes==null){
    this._campagnes=new Array<CampagneVo>();
    }
return this._campagnes;
       }

    set campagnes(value: Array<CampagneVo>) {
        this._campagnes = value;
       }

    get selectedCampagne(): CampagneVo {
    if(this._selectedCampagne==null){
    this._selectedCampagne=new CampagneVo();
    }
           return this._selectedCampagne;
       }

    set selectedCampagne(value: CampagneVo) {
        this._selectedCampagne = value;
       }

    get campagneSelections(): Array<CampagneVo> {
    if(this._campagneSelections==null){
    this._campagneSelections=new Array<CampagneVo>();
    }
        return this._campagneSelections;
       }


    set campagneSelections(value: Array<CampagneVo>) {
        this._campagneSelections = value;
       }

    get createCampagneDialog(): boolean {
        return this._createCampagneDialog;
       }

    set createCampagneDialog(value: boolean) {
        this._createCampagneDialog = value;
       }

    get editCampagneDialog(): boolean {
        return this._editCampagneDialog;
       }

    set editCampagneDialog(value: boolean) {
        this._editCampagneDialog = value;
       }

    get viewCampagneDialog(): boolean {
        return this._viewCampagneDialog;
       }

    set viewCampagneDialog(value: boolean) {
        this._viewCampagneDialog = value;
       }

     get searchCampagne(): CampagneVo {
     if(this._searchCampagne==null){
    this._searchCampagne=new CampagneVo();
    }
        return this._searchCampagne;
    }

    set searchCampagne(value: CampagneVo) {
        this._searchCampagne = value;
       }

}
