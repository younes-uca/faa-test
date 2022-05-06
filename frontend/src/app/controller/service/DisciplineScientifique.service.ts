import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DisciplineScientifiqueVo} from '../model/DisciplineScientifique.model';
import {DisciplineScientifiqueParentVo} from '../model/DisciplineScientifiqueParent.model';
import {DisciplineScientifiqueErcAssociationVo} from '../model/DisciplineScientifiqueErcAssociation.model';
import {ChercheurVo} from '../model/Chercheur.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplineScientifiqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/disciplineScientifique/';
        })
    }
     private _disciplineScientifiques: Array<DisciplineScientifiqueVo> ;
     private _selectedDisciplineScientifique: DisciplineScientifiqueVo;
     private _disciplineScientifiqueSelections: Array<DisciplineScientifiqueVo>;
     private _createDisciplineScientifiqueDialog: boolean;
     private _editDisciplineScientifiqueDialog: boolean;
     private _viewDisciplineScientifiqueDialog: boolean;
     public editDisciplineScientifique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDisciplineScientifique:DisciplineScientifiqueVo ;

    // methods
    public archiver(disciplineScientifique: DisciplineScientifiqueVo): Observable<DisciplineScientifiqueVo> {
        return this.http.put<DisciplineScientifiqueVo>(this.API + 'archiver/' ,disciplineScientifique);
    }
    public desarchiver(disciplineScientifique: DisciplineScientifiqueVo): Observable<DisciplineScientifiqueVo> {
    return this.http.put<DisciplineScientifiqueVo>(this.API + 'desarchiver/' ,disciplineScientifique);
    }

    public findAll(){
     return this.http.get<Array<DisciplineScientifiqueVo>>(this.API);
    }

    public save(): Observable<DisciplineScientifiqueVo> {
           return this.http.post<DisciplineScientifiqueVo>(this.API, {...this.selectedDisciplineScientifique,dateCreation: moment(this.selectedDisciplineScientifique.dateCreation).format("YYYY-MM-DD")});
    }

    delete(disciplineScientifique: DisciplineScientifiqueVo) {
         return this.http.delete<number>(this.API + 'id/' + disciplineScientifique.id);
    }


    public edit(): Observable<DisciplineScientifiqueVo> {
        return this.http.put<DisciplineScientifiqueVo>(this.API, this.selectedDisciplineScientifique);
    }


     public findByCriteria(disciplineScientifique:DisciplineScientifiqueVo):Observable<Array<DisciplineScientifiqueVo>>{
           return this.http.post<Array<DisciplineScientifiqueVo>>(this.API +'search', disciplineScientifique);
    }

   public findByIdWithAssociatedList(disciplineScientifique:DisciplineScientifiqueVo):Observable<DisciplineScientifiqueVo>{
         return this.http.get<DisciplineScientifiqueVo>(this.API + 'detail/id/' +disciplineScientifique.id);
    }

    // getters and setters


    get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
    if(this._disciplineScientifiques==null){
    this._disciplineScientifiques=new Array<DisciplineScientifiqueVo>();
    }
return this._disciplineScientifiques;
       }

    set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this._disciplineScientifiques = value;
       }

    get selectedDisciplineScientifique(): DisciplineScientifiqueVo {
    if(this._selectedDisciplineScientifique==null){
    this._selectedDisciplineScientifique=new DisciplineScientifiqueVo();
    }
           return this._selectedDisciplineScientifique;
       }

    set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this._selectedDisciplineScientifique = value;
       }

    get disciplineScientifiqueSelections(): Array<DisciplineScientifiqueVo> {
    if(this._disciplineScientifiqueSelections==null){
    this._disciplineScientifiqueSelections=new Array<DisciplineScientifiqueVo>();
    }
        return this._disciplineScientifiqueSelections;
       }


    set disciplineScientifiqueSelections(value: Array<DisciplineScientifiqueVo>) {
        this._disciplineScientifiqueSelections = value;
       }

    get createDisciplineScientifiqueDialog(): boolean {
        return this._createDisciplineScientifiqueDialog;
       }

    set createDisciplineScientifiqueDialog(value: boolean) {
        this._createDisciplineScientifiqueDialog = value;
       }

    get editDisciplineScientifiqueDialog(): boolean {
        return this._editDisciplineScientifiqueDialog;
       }

    set editDisciplineScientifiqueDialog(value: boolean) {
        this._editDisciplineScientifiqueDialog = value;
       }

    get viewDisciplineScientifiqueDialog(): boolean {
        return this._viewDisciplineScientifiqueDialog;
       }

    set viewDisciplineScientifiqueDialog(value: boolean) {
        this._viewDisciplineScientifiqueDialog = value;
       }

     get searchDisciplineScientifique(): DisciplineScientifiqueVo {
     if(this._searchDisciplineScientifique==null){
    this._searchDisciplineScientifique=new DisciplineScientifiqueVo();
    }
        return this._searchDisciplineScientifique;
    }

    set searchDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this._searchDisciplineScientifique = value;
       }

}
