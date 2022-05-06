import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {SemanticRelationshipVo} from '../model/SemanticRelationship.model';


@Injectable({
  providedIn: 'root'
})
export class SemanticRelationshipService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/semanticRelationship/';
        })
    }
     private _semanticRelationships: Array<SemanticRelationshipVo> ;
     private _selectedSemanticRelationship: SemanticRelationshipVo;
     private _semanticRelationshipSelections: Array<SemanticRelationshipVo>;
     private _createSemanticRelationshipDialog: boolean;
     private _editSemanticRelationshipDialog: boolean;
     private _viewSemanticRelationshipDialog: boolean;
     public editSemanticRelationship$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchSemanticRelationship:SemanticRelationshipVo ;

    // methods

    public findAll(){
     return this.http.get<Array<SemanticRelationshipVo>>(this.API);
    }

    public save(): Observable<SemanticRelationshipVo> {
         return this.http.post<SemanticRelationshipVo>(this.API, this.selectedSemanticRelationship);
    }

    delete(semanticRelationship: SemanticRelationshipVo) {
         return this.http.delete<number>(this.API + 'id/' + semanticRelationship.id);
    }


    public edit(): Observable<SemanticRelationshipVo> {
        return this.http.put<SemanticRelationshipVo>(this.API, this.selectedSemanticRelationship);
    }


     public findByCriteria(semanticRelationship:SemanticRelationshipVo):Observable<Array<SemanticRelationshipVo>>{
           return this.http.post<Array<SemanticRelationshipVo>>(this.API +'search', semanticRelationship);
    }

   public findByIdWithAssociatedList(semanticRelationship:SemanticRelationshipVo):Observable<SemanticRelationshipVo>{
         return this.http.get<SemanticRelationshipVo>(this.API + 'detail/id/' +semanticRelationship.id);
    }

    // getters and setters


    get semanticRelationships(): Array<SemanticRelationshipVo> {
    if(this._semanticRelationships==null){
    this._semanticRelationships=new Array<SemanticRelationshipVo>();
    }
return this._semanticRelationships;
       }

    set semanticRelationships(value: Array<SemanticRelationshipVo>) {
        this._semanticRelationships = value;
       }

    get selectedSemanticRelationship(): SemanticRelationshipVo {
    if(this._selectedSemanticRelationship==null){
    this._selectedSemanticRelationship=new SemanticRelationshipVo();
    }
           return this._selectedSemanticRelationship;
       }

    set selectedSemanticRelationship(value: SemanticRelationshipVo) {
        this._selectedSemanticRelationship = value;
       }

    get semanticRelationshipSelections(): Array<SemanticRelationshipVo> {
    if(this._semanticRelationshipSelections==null){
    this._semanticRelationshipSelections=new Array<SemanticRelationshipVo>();
    }
        return this._semanticRelationshipSelections;
       }


    set semanticRelationshipSelections(value: Array<SemanticRelationshipVo>) {
        this._semanticRelationshipSelections = value;
       }

    get createSemanticRelationshipDialog(): boolean {
        return this._createSemanticRelationshipDialog;
       }

    set createSemanticRelationshipDialog(value: boolean) {
        this._createSemanticRelationshipDialog = value;
       }

    get editSemanticRelationshipDialog(): boolean {
        return this._editSemanticRelationshipDialog;
       }

    set editSemanticRelationshipDialog(value: boolean) {
        this._editSemanticRelationshipDialog = value;
       }

    get viewSemanticRelationshipDialog(): boolean {
        return this._viewSemanticRelationshipDialog;
       }

    set viewSemanticRelationshipDialog(value: boolean) {
        this._viewSemanticRelationshipDialog = value;
       }

     get searchSemanticRelationship(): SemanticRelationshipVo {
     if(this._searchSemanticRelationship==null){
    this._searchSemanticRelationship=new SemanticRelationshipVo();
    }
        return this._searchSemanticRelationship;
    }

    set searchSemanticRelationship(value: SemanticRelationshipVo) {
        this._searchSemanticRelationship = value;
       }

}
