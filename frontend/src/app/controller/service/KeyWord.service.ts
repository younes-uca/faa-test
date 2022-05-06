import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {KeyWordVo} from '../model/KeyWord.model';


@Injectable({
  providedIn: 'root'
})
export class KeyWordService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/keyWord/';
        })
    }
     private _keyWords: Array<KeyWordVo> ;
     private _selectedKeyWord: KeyWordVo;
     private _keyWordSelections: Array<KeyWordVo>;
     private _createKeyWordDialog: boolean;
     private _editKeyWordDialog: boolean;
     private _viewKeyWordDialog: boolean;
     public editKeyWord$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchKeyWord:KeyWordVo ;

    // methods

    public findAll(){
     return this.http.get<Array<KeyWordVo>>(this.API);
    }

    public save(): Observable<KeyWordVo> {
         return this.http.post<KeyWordVo>(this.API, this.selectedKeyWord);
    }

    delete(keyWord: KeyWordVo) {
         return this.http.delete<number>(this.API + 'id/' + keyWord.id);
    }


    public edit(): Observable<KeyWordVo> {
        return this.http.put<KeyWordVo>(this.API, this.selectedKeyWord);
    }


     public findByCriteria(keyWord:KeyWordVo):Observable<Array<KeyWordVo>>{
           return this.http.post<Array<KeyWordVo>>(this.API +'search', keyWord);
    }

   public findByIdWithAssociatedList(keyWord:KeyWordVo):Observable<KeyWordVo>{
         return this.http.get<KeyWordVo>(this.API + 'detail/id/' +keyWord.id);
    }

    // getters and setters


    get keyWords(): Array<KeyWordVo> {
    if(this._keyWords==null){
    this._keyWords=new Array<KeyWordVo>();
    }
return this._keyWords;
       }

    set keyWords(value: Array<KeyWordVo>) {
        this._keyWords = value;
       }

    get selectedKeyWord(): KeyWordVo {
    if(this._selectedKeyWord==null){
    this._selectedKeyWord=new KeyWordVo();
    }
           return this._selectedKeyWord;
       }

    set selectedKeyWord(value: KeyWordVo) {
        this._selectedKeyWord = value;
       }

    get keyWordSelections(): Array<KeyWordVo> {
    if(this._keyWordSelections==null){
    this._keyWordSelections=new Array<KeyWordVo>();
    }
        return this._keyWordSelections;
       }


    set keyWordSelections(value: Array<KeyWordVo>) {
        this._keyWordSelections = value;
       }

    get createKeyWordDialog(): boolean {
        return this._createKeyWordDialog;
       }

    set createKeyWordDialog(value: boolean) {
        this._createKeyWordDialog = value;
       }

    get editKeyWordDialog(): boolean {
        return this._editKeyWordDialog;
       }

    set editKeyWordDialog(value: boolean) {
        this._editKeyWordDialog = value;
       }

    get viewKeyWordDialog(): boolean {
        return this._viewKeyWordDialog;
       }

    set viewKeyWordDialog(value: boolean) {
        this._viewKeyWordDialog = value;
       }

     get searchKeyWord(): KeyWordVo {
     if(this._searchKeyWord==null){
    this._searchKeyWord=new KeyWordVo();
    }
        return this._searchKeyWord;
    }

    set searchKeyWord(value: KeyWordVo) {
        this._searchKeyWord = value;
       }

}
