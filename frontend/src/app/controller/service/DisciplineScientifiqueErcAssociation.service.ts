import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DisciplineScientifiqueErcAssociationVo} from '../model/DisciplineScientifiqueErcAssociation.model';
import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';
import {SemanticRelationshipVo} from '../model/SemanticRelationship.model';
import {DisciplineScientifiqueErcVo} from '../model/DisciplineScientifiqueErc.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueErcAssociationService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/disciplineScientifiqueErcAssociation/';
        })
    }
     private _disciplineScientifiqueErcAssociations: Array<DisciplineScientifiqueErcAssociationVo> ;
     private _selectedDisciplineScientifiqueErcAssociation: DisciplineScientifiqueErcAssociationVo;
     private _disciplineScientifiqueErcAssociationSelections: Array<DisciplineScientifiqueErcAssociationVo>;
     private _createDisciplineScientifiqueErcAssociationDialog: boolean;
     private _editDisciplineScientifiqueErcAssociationDialog: boolean;
     private _viewDisciplineScientifiqueErcAssociationDialog: boolean;
     public editDisciplineScientifiqueErcAssociation$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifiqueErcAssociation:DisciplineScientifiqueErcAssociationVo ;

    // methods

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueErcAssociationVo>>(this.API);
    }

    public save(): Observable<DisciplineScientifiqueErcAssociationVo> {
         return this.http.post<DisciplineScientifiqueErcAssociationVo>(this.API, this.selectedDisciplineScientifiqueErcAssociation);
    }

    delete(disciplineScientifiqueErcAssociation: DisciplineScientifiqueErcAssociationVo) {
         return this.http.delete<number>(this.API + 'id/' + disciplineScientifiqueErcAssociation.id);
    }


    public edit(): Observable<DisciplineScientifiqueErcAssociationVo> {
        return this.http.put<DisciplineScientifiqueErcAssociationVo>(this.API, this.selectedDisciplineScientifiqueErcAssociation);
    }


     public findByCriteria(disciplineScientifiqueErcAssociation:DisciplineScientifiqueErcAssociationVo):Observable<Array<DisciplineScientifiqueErcAssociationVo>>{
           return this.http.post<Array<DisciplineScientifiqueErcAssociationVo>>(this.API +'search', disciplineScientifiqueErcAssociation);
    }

   public findByIdWithAssociatedList(disciplineScientifiqueErcAssociation:DisciplineScientifiqueErcAssociationVo):Observable<DisciplineScientifiqueErcAssociationVo>{
         return this.http.get<DisciplineScientifiqueErcAssociationVo>(this.API + 'detail/id/' +disciplineScientifiqueErcAssociation.id);
    }

    // getters and setters


    get disciplineScientifiqueErcAssociations(): Array<DisciplineScientifiqueErcAssociationVo> {
    if(this._disciplineScientifiqueErcAssociations==null){
    this._disciplineScientifiqueErcAssociations=new Array<DisciplineScientifiqueErcAssociationVo>();
    }
return this._disciplineScientifiqueErcAssociations;
       }

    set disciplineScientifiqueErcAssociations(value: Array<DisciplineScientifiqueErcAssociationVo>) {
        this._disciplineScientifiqueErcAssociations = value;
       }

    get selectedDisciplineScientifiqueErcAssociation(): DisciplineScientifiqueErcAssociationVo {
    if(this._selectedDisciplineScientifiqueErcAssociation==null){
    this._selectedDisciplineScientifiqueErcAssociation=new DisciplineScientifiqueErcAssociationVo();
    }
           return this._selectedDisciplineScientifiqueErcAssociation;
       }

    set selectedDisciplineScientifiqueErcAssociation(value: DisciplineScientifiqueErcAssociationVo) {
        this._selectedDisciplineScientifiqueErcAssociation = value;
       }

    get disciplineScientifiqueErcAssociationSelections(): Array<DisciplineScientifiqueErcAssociationVo> {
    if(this._disciplineScientifiqueErcAssociationSelections==null){
    this._disciplineScientifiqueErcAssociationSelections=new Array<DisciplineScientifiqueErcAssociationVo>();
    }
        return this._disciplineScientifiqueErcAssociationSelections;
       }


    set disciplineScientifiqueErcAssociationSelections(value: Array<DisciplineScientifiqueErcAssociationVo>) {
        this._disciplineScientifiqueErcAssociationSelections = value;
       }

    get createDisciplineScientifiqueErcAssociationDialog(): boolean {
        return this._createDisciplineScientifiqueErcAssociationDialog;
       }

    set createDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this._createDisciplineScientifiqueErcAssociationDialog = value;
       }

    get editDisciplineScientifiqueErcAssociationDialog(): boolean {
        return this._editDisciplineScientifiqueErcAssociationDialog;
       }

    set editDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this._editDisciplineScientifiqueErcAssociationDialog = value;
       }

    get viewDisciplineScientifiqueErcAssociationDialog(): boolean {
        return this._viewDisciplineScientifiqueErcAssociationDialog;
       }

    set viewDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this._viewDisciplineScientifiqueErcAssociationDialog = value;
       }

     get searchDisciplineScientifiqueErcAssociation(): DisciplineScientifiqueErcAssociationVo {
     if(this._searchDisciplineScientifiqueErcAssociation==null){
    this._searchDisciplineScientifiqueErcAssociation=new DisciplineScientifiqueErcAssociationVo();
    }
        return this._searchDisciplineScientifiqueErcAssociation;
    }

    set searchDisciplineScientifiqueErcAssociation(value: DisciplineScientifiqueErcAssociationVo) {
        this._searchDisciplineScientifiqueErcAssociation = value;
       }

}
