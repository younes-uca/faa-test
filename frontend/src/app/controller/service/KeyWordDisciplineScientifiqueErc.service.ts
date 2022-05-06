import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {KeyWordDisciplineScientifiqueErcVo} from '../model/KeyWordDisciplineScientifiqueErc.model';
import {KeyWordVo} from '../model/KeyWord.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';


@Injectable({
  providedIn: 'root'
})
export class KeyWordDisciplineScientifiqueErcService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/keyWordDisciplineScientifiqueErc/';
        })
    }
     private _keyWordDisciplineScientifiqueErcs: Array<KeyWordDisciplineScientifiqueErcVo> ;
     private _selectedKeyWordDisciplineScientifiqueErc: KeyWordDisciplineScientifiqueErcVo;
     private _keyWordDisciplineScientifiqueErcSelections: Array<KeyWordDisciplineScientifiqueErcVo>;
     private _createKeyWordDisciplineScientifiqueErcDialog: boolean;
     private _editKeyWordDisciplineScientifiqueErcDialog: boolean;
     private _viewKeyWordDisciplineScientifiqueErcDialog: boolean;
     public editKeyWordDisciplineScientifiqueErc$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchKeyWordDisciplineScientifiqueErc:KeyWordDisciplineScientifiqueErcVo ;

    // methods

    public findAll(){
     return this.http.get<Array<KeyWordDisciplineScientifiqueErcVo>>(this.API);
    }

    public save(): Observable<KeyWordDisciplineScientifiqueErcVo> {
         return this.http.post<KeyWordDisciplineScientifiqueErcVo>(this.API, this.selectedKeyWordDisciplineScientifiqueErc);
    }

    delete(keyWordDisciplineScientifiqueErc: KeyWordDisciplineScientifiqueErcVo) {
         return this.http.delete<number>(this.API + 'id/' + keyWordDisciplineScientifiqueErc.id);
    }


    public edit(): Observable<KeyWordDisciplineScientifiqueErcVo> {
        return this.http.put<KeyWordDisciplineScientifiqueErcVo>(this.API, this.selectedKeyWordDisciplineScientifiqueErc);
    }


     public findByCriteria(keyWordDisciplineScientifiqueErc:KeyWordDisciplineScientifiqueErcVo):Observable<Array<KeyWordDisciplineScientifiqueErcVo>>{
           return this.http.post<Array<KeyWordDisciplineScientifiqueErcVo>>(this.API +'search', keyWordDisciplineScientifiqueErc);
    }

   public findByIdWithAssociatedList(keyWordDisciplineScientifiqueErc:KeyWordDisciplineScientifiqueErcVo):Observable<KeyWordDisciplineScientifiqueErcVo>{
         return this.http.get<KeyWordDisciplineScientifiqueErcVo>(this.API + 'detail/id/' +keyWordDisciplineScientifiqueErc.id);
    }

    // getters and setters


    get keyWordDisciplineScientifiqueErcs(): Array<KeyWordDisciplineScientifiqueErcVo> {
    if(this._keyWordDisciplineScientifiqueErcs==null){
    this._keyWordDisciplineScientifiqueErcs=new Array<KeyWordDisciplineScientifiqueErcVo>();
    }
return this._keyWordDisciplineScientifiqueErcs;
       }

    set keyWordDisciplineScientifiqueErcs(value: Array<KeyWordDisciplineScientifiqueErcVo>) {
        this._keyWordDisciplineScientifiqueErcs = value;
       }

    get selectedKeyWordDisciplineScientifiqueErc(): KeyWordDisciplineScientifiqueErcVo {
    if(this._selectedKeyWordDisciplineScientifiqueErc==null){
    this._selectedKeyWordDisciplineScientifiqueErc=new KeyWordDisciplineScientifiqueErcVo();
    }
           return this._selectedKeyWordDisciplineScientifiqueErc;
       }

    set selectedKeyWordDisciplineScientifiqueErc(value: KeyWordDisciplineScientifiqueErcVo) {
        this._selectedKeyWordDisciplineScientifiqueErc = value;
       }

    get keyWordDisciplineScientifiqueErcSelections(): Array<KeyWordDisciplineScientifiqueErcVo> {
    if(this._keyWordDisciplineScientifiqueErcSelections==null){
    this._keyWordDisciplineScientifiqueErcSelections=new Array<KeyWordDisciplineScientifiqueErcVo>();
    }
        return this._keyWordDisciplineScientifiqueErcSelections;
       }


    set keyWordDisciplineScientifiqueErcSelections(value: Array<KeyWordDisciplineScientifiqueErcVo>) {
        this._keyWordDisciplineScientifiqueErcSelections = value;
       }

    get createKeyWordDisciplineScientifiqueErcDialog(): boolean {
        return this._createKeyWordDisciplineScientifiqueErcDialog;
       }

    set createKeyWordDisciplineScientifiqueErcDialog(value: boolean) {
        this._createKeyWordDisciplineScientifiqueErcDialog = value;
       }

    get editKeyWordDisciplineScientifiqueErcDialog(): boolean {
        return this._editKeyWordDisciplineScientifiqueErcDialog;
       }

    set editKeyWordDisciplineScientifiqueErcDialog(value: boolean) {
        this._editKeyWordDisciplineScientifiqueErcDialog = value;
       }

    get viewKeyWordDisciplineScientifiqueErcDialog(): boolean {
        return this._viewKeyWordDisciplineScientifiqueErcDialog;
       }

    set viewKeyWordDisciplineScientifiqueErcDialog(value: boolean) {
        this._viewKeyWordDisciplineScientifiqueErcDialog = value;
       }

     get searchKeyWordDisciplineScientifiqueErc(): KeyWordDisciplineScientifiqueErcVo {
     if(this._searchKeyWordDisciplineScientifiqueErc==null){
    this._searchKeyWordDisciplineScientifiqueErc=new KeyWordDisciplineScientifiqueErcVo();
    }
        return this._searchKeyWordDisciplineScientifiqueErc;
    }

    set searchKeyWordDisciplineScientifiqueErc(value: KeyWordDisciplineScientifiqueErcVo) {
        this._searchKeyWordDisciplineScientifiqueErc = value;
       }

}
