import {Component, OnInit} from '@angular/core';
import {IdentifiantRechercheService} from '../../../../../controller/service/IdentifiantRecherche.service';
import {IdentifiantRechercheVo} from '../../../../../controller/model/IdentifiantRecherche.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { ChercheurService } from '../../../../../controller/service/Chercheur.service';

import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-identifiant-recherche-list-admin',
  templateUrl: './identifiant-recherche-list-admin.component.html',
  styleUrls: ['./identifiant-recherche-list-admin.component.css']
})
export class IdentifiantRechercheListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'IdentifiantRecherche';
     yesOrNoArchive :any[] =[];
     yesOrNoAdmin :any[] =[];
     yesOrNoVisible :any[] =[];
    chercheurs :Array<ChercheurVo>;


    constructor(private datePipe: DatePipe, private identifiantRechercheService: IdentifiantRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private chercheurService: ChercheurService
) { }

    ngOnInit(): void {
      this.loadIdentifiantRecherches();
      this.initExport();
      this.initCol();
      this.loadChercheur();
    this.yesOrNoArchive =  [{label: 'Archive', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAdmin =  [{label: 'Admin', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoVisible =  [{label: 'Visible', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadIdentifiantRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'list');
        isPermistted ? this.identifiantRechercheService.findAll().subscribe(identifiantRecherches => this.identifiantRecherches = identifiantRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.identifiantRechercheService.findByCriteria(this.searchIdentifiantRecherche).subscribe(identifiantRecherches=>{
            
            this.identifiantRecherches = identifiantRecherches;
           // this.searchIdentifiantRecherche = new IdentifiantRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
                            {field: 'archive', header: 'Archive'},
                            {field: 'dateArchivage', header: 'Date archivage'},
                            {field: 'dateCreation', header: 'Date creation'},
                            {field: 'admin', header: 'Admin'},
                            {field: 'visible', header: 'Visible'},
                        {field: 'chercheur?.numeroMatricule', header: 'Chercheur'},
        ];
    }
    
    public async editIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
        const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'edit');
         if(isPermistted){
          this.identifiantRechercheService.findByIdWithAssociatedList(identifiantRecherche).subscribe(res => {
           this.selectedIdentifiantRecherche = res;
            this.selectedIdentifiantRecherche.dateArchivage = new Date(identifiantRecherche.dateArchivage);
            this.selectedIdentifiantRecherche.dateCreation = new Date(identifiantRecherche.dateCreation);
            this.editIdentifiantRechercheDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
        const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'view');
        if(isPermistted){
           this.identifiantRechercheService.findByIdWithAssociatedList(identifiantRecherche).subscribe(res => {
           this.selectedIdentifiantRecherche = res;
            this.selectedIdentifiantRecherche.dateArchivage = new Date(identifiantRecherche.dateArchivage);
            this.selectedIdentifiantRecherche.dateCreation = new Date(identifiantRecherche.dateCreation);
            this.viewIdentifiantRechercheDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateIdentifiantRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
            this.createIdentifiantRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }
public async archiverIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'delete');
if(isPermistted){
this.confirmationService.confirm({
message: 'Voulez-vous archiver cet élément (Identifiant recherche) ?',
header: 'Confirmation',
icon: 'pi pi-exclamation-triangle',
accept: () => {
this.identifiantRechercheService.archiver(identifiantRecherche).subscribe(status=>{
const myIndex = this.identifiantRecherches.indexOf(identifiantRecherche);
this.identifiantRecherches[myIndex] = status;
this.messageService.add({
severity: 'success',
summary: 'Succès',
detail: 'Identifiant recherche archivé',
life: 3000
});
},error=>console.log(error))
 }
});
}else{
this.messageService.add({
severity: 'error', summary: 'erreur', detail: 'Problème de permission'
});
}
}

public async desarchiverIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'delete');
if(isPermistted){
this.confirmationService.confirm({
message: 'Voulez-vous désarchiver cet élément (Identifiant recherche) ?',
header: 'Confirmation',
icon: 'pi pi-exclamation-triangle',
accept: () => {
this.identifiantRechercheService.desarchiver(identifiantRecherche).subscribe(status=>{
const myIndex = this.identifiantRecherches.indexOf(identifiantRecherche);
this.identifiantRecherches[myIndex] = status;
this.messageService.add({
severity: 'success',
summary: 'Succès',
detail: 'Identifiant recherche désarchivé',
life: 3000
});
},error=>console.log(error))
 }
});
}else{
this.messageService.add({
severity: 'error', summary: 'erreur', detail: 'Problème de permission'
});
}
}


    public async deleteIdentifiantRecherche(identifiantRecherche:IdentifiantRechercheVo){
       const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Identifiant recherche) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.identifiantRechercheService.delete(identifiantRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.identifiantRecherches.indexOf(identifiantRecherche);
                          position > -1 ? this.identifiantRecherches.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Identifiant recherche Supprimé',
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

public async loadChercheur(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'list');
    isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateIdentifiantRecherche(identifiantRecherche: IdentifiantRechercheVo) {

     this.identifiantRechercheService.findByIdWithAssociatedList(identifiantRecherche).subscribe(
	 res => {
	       this.initDuplicateIdentifiantRecherche(res);
	       this.selectedIdentifiantRecherche = res;
	       this.selectedIdentifiantRecherche.id = null;
            this.createIdentifiantRechercheDialog = true;

});

	}

	initDuplicateIdentifiantRecherche(res: IdentifiantRechercheVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.identifiantRecherches.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
                    'Description': e.description ,
                    'Archive': e.archive? 'Vrai' : 'Faux' ,
                    'Date archivage': this.datePipe.transform(e.dateArchivage , 'dd-MM-yyyy'),
                    'Date creation': this.datePipe.transform(e.dateCreation , 'dd-MM-yyyy'),
                    'Admin': e.admin? 'Vrai' : 'Faux' ,
                    'Visible': e.visible? 'Vrai' : 'Faux' ,
            'Chercheur': e.chercheurVo?.numeroMatricule ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchIdentifiantRecherche.libelle ? this.searchIdentifiantRecherche.libelle : environment.emptyForExport ,
            'Code': this.searchIdentifiantRecherche.code ? this.searchIdentifiantRecherche.code : environment.emptyForExport ,
            'Description': this.searchIdentifiantRecherche.description ? this.searchIdentifiantRecherche.description : environment.emptyForExport ,
            'Archive': this.searchIdentifiantRecherche.archive ? (this.searchIdentifiantRecherche.archive ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date archivage Min': this.searchIdentifiantRecherche.dateArchivageMin ? this.datePipe.transform(this.searchIdentifiantRecherche.dateArchivageMin , this.dateFormat) : environment.emptyForExport ,
            'Date archivage Max': this.searchIdentifiantRecherche.dateArchivageMax ? this.datePipe.transform(this.searchIdentifiantRecherche.dateArchivageMax , this.dateFormat) : environment.emptyForExport ,
            'Date creation Min': this.searchIdentifiantRecherche.dateCreationMin ? this.datePipe.transform(this.searchIdentifiantRecherche.dateCreationMin , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.searchIdentifiantRecherche.dateCreationMax ? this.datePipe.transform(this.searchIdentifiantRecherche.dateCreationMax , this.dateFormat) : environment.emptyForExport ,
            'Admin': this.searchIdentifiantRecherche.admin ? (this.searchIdentifiantRecherche.admin ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Visible': this.searchIdentifiantRecherche.visible ? (this.searchIdentifiantRecherche.visible ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        'Chercheur': this.searchIdentifiantRecherche.chercheurVo?.numeroMatricule ? this.searchIdentifiantRecherche.chercheurVo?.numeroMatricule : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get identifiantRecherches(): Array<IdentifiantRechercheVo> {
           return this.identifiantRechercheService.identifiantRecherches;
       }
    set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       }

    get identifiantRechercheSelections(): Array<IdentifiantRechercheVo> {
           return this.identifiantRechercheService.identifiantRechercheSelections;
       }
    set identifiantRechercheSelections(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRechercheSelections = value;
       }
   
     


    get selectedIdentifiantRecherche():IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
    set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }
    
    get createIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.createIdentifiantRechercheDialog;
       }
    set createIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.createIdentifiantRechercheDialog= value;
       }
    
    get editIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.editIdentifiantRechercheDialog;
       }
    set editIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.editIdentifiantRechercheDialog= value;
       }
    get viewIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.viewIdentifiantRechercheDialog;
       }
    set viewIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.viewIdentifiantRechercheDialog = value;
       }
       
     get searchIdentifiantRecherche(): IdentifiantRechercheVo {
        return this.identifiantRechercheService.searchIdentifiantRecherche;
       }
    set searchIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.searchIdentifiantRecherche = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
