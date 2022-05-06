import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { DisciplineScientifiqueParentService } from '../../../../../controller/service/DisciplineScientifiqueParent.service';
import { ChercheurService } from '../../../../../controller/service/Chercheur.service';

import {DisciplineScientifiqueParentVo} from '../../../../../controller/model/DisciplineScientifiqueParent.model';
import {DisciplineScientifiqueErcAssociationVo} from '../../../../../controller/model/DisciplineScientifiqueErcAssociation.model';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-discipline-scientifique-list-chercheur',
  templateUrl: './discipline-scientifique-list-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-list-chercheur.component.css']
})
export class DisciplineScientifiqueListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'DisciplineScientifique';
     yesOrNoArchive :any[] =[];
     yesOrNoAdmin :any[] =[];
     yesOrNoVisible :any[] =[];
    disciplineScientifiqueParents :Array<DisciplineScientifiqueParentVo>;
    chercheurs :Array<ChercheurVo>;


    constructor(private datePipe: DatePipe, private disciplineScientifiqueService: DisciplineScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private disciplineScientifiqueParentService: DisciplineScientifiqueParentService
        , private chercheurService: ChercheurService
) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiques();
      this.initExport();
      this.initCol();
      this.loadDisciplineScientifiqueParent();
      this.loadChercheur();
    this.yesOrNoArchive =  [{label: 'Archive', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAdmin =  [{label: 'Admin', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoVisible =  [{label: 'Visible', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadDisciplineScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'list');
        isPermistted ? this.disciplineScientifiqueService.findAll().subscribe(disciplineScientifiques => this.disciplineScientifiques = disciplineScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.disciplineScientifiqueService.findByCriteria(this.searchDisciplineScientifique).subscribe(disciplineScientifiques=>{
            
            this.disciplineScientifiques = disciplineScientifiques;
           // this.searchDisciplineScientifique = new DisciplineScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelleFr', header: 'Libelle fr'},
                            {field: 'libelleEng', header: 'Libelle eng'},
                            {field: 'code', header: 'Code'},
                            {field: 'niveau', header: 'Niveau'},
                        {field: 'disciplineScientifiqueParent?.libelleEng', header: 'Discipline scientifique parent'},
                            {field: 'archive', header: 'Archive'},
                            {field: 'dateArchivage', header: 'Date archivage'},
                            {field: 'dateCreation', header: 'Date creation'},
                            {field: 'admin', header: 'Admin'},
                            {field: 'visible', header: 'Visible'},
                        {field: 'chercheur?.numeroMatricule', header: 'Chercheur'},
        ];
    }
    
    public async editDisciplineScientifique(disciplineScientifique:DisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'edit');
         if(isPermistted){
          this.disciplineScientifiqueService.findByIdWithAssociatedList(disciplineScientifique).subscribe(res => {
           this.selectedDisciplineScientifique = res;
            this.selectedDisciplineScientifique.dateArchivage = new Date(disciplineScientifique.dateArchivage);
            this.selectedDisciplineScientifique.dateCreation = new Date(disciplineScientifique.dateCreation);
            this.editDisciplineScientifiqueDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDisciplineScientifique(disciplineScientifique:DisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'view');
        if(isPermistted){
           this.disciplineScientifiqueService.findByIdWithAssociatedList(disciplineScientifique).subscribe(res => {
           this.selectedDisciplineScientifique = res;
            this.selectedDisciplineScientifique.dateArchivage = new Date(disciplineScientifique.dateArchivage);
            this.selectedDisciplineScientifique.dateCreation = new Date(disciplineScientifique.dateCreation);
            this.viewDisciplineScientifiqueDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDisciplineScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
            this.createDisciplineScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDisciplineScientifique(disciplineScientifique:DisciplineScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Discipline scientifique) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueService.delete(disciplineScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiques.indexOf(disciplineScientifique);
                          position > -1 ? this.disciplineScientifiques.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Discipline scientifique Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }

public async loadDisciplineScientifiqueParent(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'list');
    isPermistted ? this.disciplineScientifiqueParentService.findAll().subscribe(disciplineScientifiqueParents => this.disciplineScientifiqueParents = disciplineScientifiqueParents,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadChercheur(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'list');
    isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateDisciplineScientifique(disciplineScientifique: DisciplineScientifiqueVo) {

     this.disciplineScientifiqueService.findByIdWithAssociatedList(disciplineScientifique).subscribe(
	 res => {
	       this.initDuplicateDisciplineScientifique(res);
	       this.selectedDisciplineScientifique = res;
	       this.selectedDisciplineScientifique.id = null;
            this.createDisciplineScientifiqueDialog = true;

});

	}

	initDuplicateDisciplineScientifique(res: DisciplineScientifiqueVo) {
        if (res.disciplineScientifiqueErcAssociationsVo != null) {
             res.disciplineScientifiqueErcAssociationsVo.forEach(d => { d.disciplineScientifiqueVo = null; d.id = null; });
                }


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.disciplineScientifiques.map(e => {
    return {
                    'Libelle fr': e.libelleFr ,
                    'Libelle eng': e.libelleEng ,
                    'Code': e.code ,
                    'Niveau': e.niveau ,
            'Discipline scientifique parent': e.disciplineScientifiqueParentVo?.libelleEng ,
                    'Archive': e.archive? 'Vrai' : 'Faux' ,
                    'Date archivage': this.datePipe.transform(e.dateArchivage , 'dd-MM-yyyy'),
                    'Date creation': this.datePipe.transform(e.dateCreation , 'dd-MM-yyyy'),
                    'Admin': e.admin? 'Vrai' : 'Faux' ,
                    'Visible': e.visible? 'Vrai' : 'Faux' ,
            'Chercheur': e.chercheurVo?.numeroMatricule ,
     }
      });

      this.criteriaData = [{
            'Libelle fr': this.searchDisciplineScientifique.libelleFr ? this.searchDisciplineScientifique.libelleFr : environment.emptyForExport ,
            'Libelle eng': this.searchDisciplineScientifique.libelleEng ? this.searchDisciplineScientifique.libelleEng : environment.emptyForExport ,
            'Code': this.searchDisciplineScientifique.code ? this.searchDisciplineScientifique.code : environment.emptyForExport ,
            'Niveau Min': this.searchDisciplineScientifique.niveauMin ? this.searchDisciplineScientifique.niveauMin : environment.emptyForExport ,
            'Niveau Max': this.searchDisciplineScientifique.niveauMax ? this.searchDisciplineScientifique.niveauMax : environment.emptyForExport ,
        'Discipline scientifique parent': this.searchDisciplineScientifique.disciplineScientifiqueParentVo?.libelleEng ? this.searchDisciplineScientifique.disciplineScientifiqueParentVo?.libelleEng : environment.emptyForExport ,
            'Archive': this.searchDisciplineScientifique.archive ? (this.searchDisciplineScientifique.archive ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date archivage Min': this.searchDisciplineScientifique.dateArchivageMin ? this.datePipe.transform(this.searchDisciplineScientifique.dateArchivageMin , this.dateFormat) : environment.emptyForExport ,
            'Date archivage Max': this.searchDisciplineScientifique.dateArchivageMax ? this.datePipe.transform(this.searchDisciplineScientifique.dateArchivageMax , this.dateFormat) : environment.emptyForExport ,
            'Date creation Min': this.searchDisciplineScientifique.dateCreationMin ? this.datePipe.transform(this.searchDisciplineScientifique.dateCreationMin , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.searchDisciplineScientifique.dateCreationMax ? this.datePipe.transform(this.searchDisciplineScientifique.dateCreationMax , this.dateFormat) : environment.emptyForExport ,
            'Admin': this.searchDisciplineScientifique.admin ? (this.searchDisciplineScientifique.admin ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Visible': this.searchDisciplineScientifique.visible ? (this.searchDisciplineScientifique.visible ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        'Chercheur': this.searchDisciplineScientifique.chercheurVo?.numeroMatricule ? this.searchDisciplineScientifique.chercheurVo?.numeroMatricule : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueService.disciplineScientifiques;
       }
    set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       }

    get disciplineScientifiqueSelections(): Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueService.disciplineScientifiqueSelections;
       }
    set disciplineScientifiqueSelections(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiqueSelections = value;
       }
   
     


    get selectedDisciplineScientifique():DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }
    
    get createDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.createDisciplineScientifiqueDialog;
       }
    set createDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.createDisciplineScientifiqueDialog= value;
       }
    
    get editDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.editDisciplineScientifiqueDialog;
       }
    set editDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.editDisciplineScientifiqueDialog= value;
       }
    get viewDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog;
       }
    set viewDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog = value;
       }
       
     get searchDisciplineScientifique(): DisciplineScientifiqueVo {
        return this.disciplineScientifiqueService.searchDisciplineScientifique;
       }
    set searchDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.searchDisciplineScientifique = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
