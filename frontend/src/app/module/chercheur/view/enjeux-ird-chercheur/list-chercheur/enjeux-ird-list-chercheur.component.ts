import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdService} from '../../../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../../../controller/model/EnjeuxIrd.model';
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
  selector: 'app-enjeux-ird-list-chercheur',
  templateUrl: './enjeux-ird-list-chercheur.component.html',
  styleUrls: ['./enjeux-ird-list-chercheur.component.css']
})
export class EnjeuxIrdListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'EnjeuxIrd';
     yesOrNoArchive :any[] =[];
     yesOrNoAdmin :any[] =[];
     yesOrNoVisible :any[] =[];
    chercheurs :Array<ChercheurVo>;


    constructor(private datePipe: DatePipe, private enjeuxIrdService: EnjeuxIrdService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private chercheurService: ChercheurService
) { }

    ngOnInit(): void {
      this.loadEnjeuxIrds();
      this.initExport();
      this.initCol();
      this.loadChercheur();
    this.yesOrNoArchive =  [{label: 'Archive', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAdmin =  [{label: 'Admin', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoVisible =  [{label: 'Visible', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadEnjeuxIrds(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EnjeuxIrd', 'list');
        isPermistted ? this.enjeuxIrdService.findAll().subscribe(enjeuxIrds => this.enjeuxIrds = enjeuxIrds,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.enjeuxIrdService.findByCriteria(this.searchEnjeuxIrd).subscribe(enjeuxIrds=>{
            
            this.enjeuxIrds = enjeuxIrds;
           // this.searchEnjeuxIrd = new EnjeuxIrdVo();
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
    
    public async editEnjeuxIrd(enjeuxIrd:EnjeuxIrdVo){
        const isPermistted = await this.roleService.isPermitted('EnjeuxIrd', 'edit');
         if(isPermistted){
          this.enjeuxIrdService.findByIdWithAssociatedList(enjeuxIrd).subscribe(res => {
           this.selectedEnjeuxIrd = res;
            this.selectedEnjeuxIrd.dateArchivage = new Date(enjeuxIrd.dateArchivage);
            this.selectedEnjeuxIrd.dateCreation = new Date(enjeuxIrd.dateCreation);
            this.editEnjeuxIrdDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewEnjeuxIrd(enjeuxIrd:EnjeuxIrdVo){
        const isPermistted = await this.roleService.isPermitted('EnjeuxIrd', 'view');
        if(isPermistted){
           this.enjeuxIrdService.findByIdWithAssociatedList(enjeuxIrd).subscribe(res => {
           this.selectedEnjeuxIrd = res;
            this.selectedEnjeuxIrd.dateArchivage = new Date(enjeuxIrd.dateArchivage);
            this.selectedEnjeuxIrd.dateCreation = new Date(enjeuxIrd.dateCreation);
            this.viewEnjeuxIrdDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateEnjeuxIrd(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedEnjeuxIrd = new EnjeuxIrdVo();
            this.createEnjeuxIrdDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteEnjeuxIrd(enjeuxIrd:EnjeuxIrdVo){
       const isPermistted = await this.roleService.isPermitted('EnjeuxIrd', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Enjeux ird) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.enjeuxIrdService.delete(enjeuxIrd).subscribe(status=>{
                          if(status > 0){
                          const position = this.enjeuxIrds.indexOf(enjeuxIrd);
                          position > -1 ? this.enjeuxIrds.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Enjeux ird Supprimé',
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
    const isPermistted = await this.roleService.isPermitted('EnjeuxIrd', 'list');
    isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateEnjeuxIrd(enjeuxIrd: EnjeuxIrdVo) {

     this.enjeuxIrdService.findByIdWithAssociatedList(enjeuxIrd).subscribe(
	 res => {
	       this.initDuplicateEnjeuxIrd(res);
	       this.selectedEnjeuxIrd = res;
	       this.selectedEnjeuxIrd.id = null;
            this.createEnjeuxIrdDialog = true;

});

	}

	initDuplicateEnjeuxIrd(res: EnjeuxIrdVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.enjeuxIrds.map(e => {
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
            'Libelle': this.searchEnjeuxIrd.libelle ? this.searchEnjeuxIrd.libelle : environment.emptyForExport ,
            'Code': this.searchEnjeuxIrd.code ? this.searchEnjeuxIrd.code : environment.emptyForExport ,
            'Description': this.searchEnjeuxIrd.description ? this.searchEnjeuxIrd.description : environment.emptyForExport ,
            'Archive': this.searchEnjeuxIrd.archive ? (this.searchEnjeuxIrd.archive ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date archivage Min': this.searchEnjeuxIrd.dateArchivageMin ? this.datePipe.transform(this.searchEnjeuxIrd.dateArchivageMin , this.dateFormat) : environment.emptyForExport ,
            'Date archivage Max': this.searchEnjeuxIrd.dateArchivageMax ? this.datePipe.transform(this.searchEnjeuxIrd.dateArchivageMax , this.dateFormat) : environment.emptyForExport ,
            'Date creation Min': this.searchEnjeuxIrd.dateCreationMin ? this.datePipe.transform(this.searchEnjeuxIrd.dateCreationMin , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.searchEnjeuxIrd.dateCreationMax ? this.datePipe.transform(this.searchEnjeuxIrd.dateCreationMax , this.dateFormat) : environment.emptyForExport ,
            'Admin': this.searchEnjeuxIrd.admin ? (this.searchEnjeuxIrd.admin ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Visible': this.searchEnjeuxIrd.visible ? (this.searchEnjeuxIrd.visible ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        'Chercheur': this.searchEnjeuxIrd.chercheurVo?.numeroMatricule ? this.searchEnjeuxIrd.chercheurVo?.numeroMatricule : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get enjeuxIrds(): Array<EnjeuxIrdVo> {
           return this.enjeuxIrdService.enjeuxIrds;
       }
    set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       }

    get enjeuxIrdSelections(): Array<EnjeuxIrdVo> {
           return this.enjeuxIrdService.enjeuxIrdSelections;
       }
    set enjeuxIrdSelections(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrdSelections = value;
       }
   
     


    get selectedEnjeuxIrd():EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
    set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }
    
    get createEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.createEnjeuxIrdDialog;
       }
    set createEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.createEnjeuxIrdDialog= value;
       }
    
    get editEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.editEnjeuxIrdDialog;
       }
    set editEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.editEnjeuxIrdDialog= value;
       }
    get viewEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.viewEnjeuxIrdDialog;
       }
    set viewEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.viewEnjeuxIrdDialog = value;
       }
       
     get searchEnjeuxIrd(): EnjeuxIrdVo {
        return this.enjeuxIrdService.searchEnjeuxIrd;
       }
    set searchEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.searchEnjeuxIrd = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
