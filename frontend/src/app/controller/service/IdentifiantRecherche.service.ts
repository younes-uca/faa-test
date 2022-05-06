import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {IdentifiantRechercheVo} from '../model/IdentifiantRecherche.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class IdentifiantRechercheService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/identifiantRecherche/';
        })
    }
     private _identifiantRecherches: Array<IdentifiantRechercheVo> ;
     private _selectedIdentifiantRecherche: IdentifiantRechercheVo;
     private _identifiantRechercheSelections: Array<IdentifiantRechercheVo>;
     private _createIdentifiantRechercheDialog: boolean;
     private _editIdentifiantRechercheDialog: boolean;
     private _viewIdentifiantRechercheDialog: boolean;
     public editIdentifiantRecherche$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchIdentifiantRecherche:IdentifiantRechercheVo ;

    // methods
    public archiver(identifiantRecherche: IdentifiantRechercheVo): Observable<IdentifiantRechercheVo> {
        return this.http.put<IdentifiantRechercheVo>(this.API + 'archiver/' ,identifiantRecherche);
    }
    public desarchiver(identifiantRecherche: IdentifiantRechercheVo): Observable<IdentifiantRechercheVo> {
    return this.http.put<IdentifiantRechercheVo>(this.API + 'desarchiver/' ,identifiantRecherche);
    }

    public findAll(){
     return this.http.get<Array<IdentifiantRechercheVo>>(this.API);
    }

    public save(): Observable<IdentifiantRechercheVo> {
           return this.http.post<IdentifiantRechercheVo>(this.API, {...this.selectedIdentifiantRecherche,dateCreation: moment(this.selectedIdentifiantRecherche.dateCreation).format("YYYY-MM-DD")});
    }

    delete(identifiantRecherche: IdentifiantRechercheVo) {
         return this.http.delete<number>(this.API + 'id/' + identifiantRecherche.id);
    }


    public edit(): Observable<IdentifiantRechercheVo> {
        return this.http.put<IdentifiantRechercheVo>(this.API, this.selectedIdentifiantRecherche);
    }


     public findByCriteria(identifiantRecherche:IdentifiantRechercheVo):Observable<Array<IdentifiantRechercheVo>>{
           return this.http.post<Array<IdentifiantRechercheVo>>(this.API +'search', identifiantRecherche);
    }

   public findByIdWithAssociatedList(identifiantRecherche:IdentifiantRechercheVo):Observable<IdentifiantRechercheVo>{
         return this.http.get<IdentifiantRechercheVo>(this.API + 'detail/id/' +identifiantRecherche.id);
    }

    // getters and setters


    get identifiantRecherches(): Array<IdentifiantRechercheVo> {
    if(this._identifiantRecherches==null){
    this._identifiantRecherches=new Array<IdentifiantRechercheVo>();
    }
return this._identifiantRecherches;
       }

    set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this._identifiantRecherches = value;
       }

    get selectedIdentifiantRecherche(): IdentifiantRechercheVo {
    if(this._selectedIdentifiantRecherche==null){
    this._selectedIdentifiantRecherche=new IdentifiantRechercheVo();
    }
           return this._selectedIdentifiantRecherche;
       }

    set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this._selectedIdentifiantRecherche = value;
       }

    get identifiantRechercheSelections(): Array<IdentifiantRechercheVo> {
    if(this._identifiantRechercheSelections==null){
    this._identifiantRechercheSelections=new Array<IdentifiantRechercheVo>();
    }
        return this._identifiantRechercheSelections;
       }


    set identifiantRechercheSelections(value: Array<IdentifiantRechercheVo>) {
        this._identifiantRechercheSelections = value;
       }

    get createIdentifiantRechercheDialog(): boolean {
        return this._createIdentifiantRechercheDialog;
       }

    set createIdentifiantRechercheDialog(value: boolean) {
        this._createIdentifiantRechercheDialog = value;
       }

    get editIdentifiantRechercheDialog(): boolean {
        return this._editIdentifiantRechercheDialog;
       }

    set editIdentifiantRechercheDialog(value: boolean) {
        this._editIdentifiantRechercheDialog = value;
       }

    get viewIdentifiantRechercheDialog(): boolean {
        return this._viewIdentifiantRechercheDialog;
       }

    set viewIdentifiantRechercheDialog(value: boolean) {
        this._viewIdentifiantRechercheDialog = value;
       }

     get searchIdentifiantRecherche(): IdentifiantRechercheVo {
     if(this._searchIdentifiantRecherche==null){
    this._searchIdentifiantRecherche=new IdentifiantRechercheVo();
    }
        return this._searchIdentifiantRecherche;
    }

    set searchIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this._searchIdentifiantRecherche = value;
       }

}
