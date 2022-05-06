import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdChercheurService} from '../../../../../controller/service/EnjeuxIrdChercheur.service';
import {EnjeuxIrdChercheurVo} from '../../../../../controller/model/EnjeuxIrdChercheur.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { EnjeuxIrdService } from '../../../../../controller/service/EnjeuxIrd.service';
import { ChercheurService } from '../../../../../controller/service/Chercheur.service';

import {EnjeuxIrdVo} from '../../../../../controller/model/EnjeuxIrd.model';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-enjeux-ird-chercheur-list-chercheur',
  templateUrl: './enjeux-ird-chercheur-list-chercheur.component.html',
  styleUrls: ['./enjeux-ird-chercheur-list-chercheur.component.css']
})
export class EnjeuxIrdChercheurListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'EnjeuxIrdChercheur';
    enjeuxIrds :Array<EnjeuxIrdVo>;
    chercheurs :Array<ChercheurVo>;


    constructor(private datePipe: DatePipe, private enjeuxIrdChercheurService: EnjeuxIrdChercheurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private enjeuxIrdService: EnjeuxIrdService
        , private chercheurService: ChercheurService
) { }

    ngOnInit(): void {
      this.loadEnjeuxIrdChercheurs();
      this.initExport();
      this.initCol();
      this.loadEnjeuxIrd();
      this.loadChercheur();
    }
    
    // methods
      public async loadEnjeuxIrdChercheurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EnjeuxIrdChercheur', 'list');
        isPermistted ? this.enjeuxIrdChercheurService.findAll().subscribe(enjeuxIrdChercheurs => this.enjeuxIrdChercheurs = enjeuxIrdChercheurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.enjeuxIrdChercheurService.findByCriteria(this.searchEnjeuxIrdChercheur).subscribe(enjeuxIrdChercheurs=>{
            
            this.enjeuxIrdChercheurs = enjeuxIrdChercheurs;
           // this.searchEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                        {field: 'enjeuxIrd?.libelle', header: 'Enjeux ird'},
                        {field: 'chercheur?.numeroMatricule', header: 'Chercheur'},
        ];
    }
    
    public async editEnjeuxIrdChercheur(enjeuxIrdChercheur:EnjeuxIrdChercheurVo){
        const isPermistted = await this.roleService.isPermitted('EnjeuxIrdChercheur', 'edit');
         if(isPermistted){
          this.enjeuxIrdChercheurService.findByIdWithAssociatedList(enjeuxIrdChercheur).subscribe(res => {
           this.selectedEnjeuxIrdChercheur = res;
            this.editEnjeuxIrdChercheurDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewEnjeuxIrdChercheur(enjeuxIrdChercheur:EnjeuxIrdChercheurVo){
        const isPermistted = await this.roleService.isPermitted('EnjeuxIrdChercheur', 'view');
        if(isPermistted){
           this.enjeuxIrdChercheurService.findByIdWithAssociatedList(enjeuxIrdChercheur).subscribe(res => {
           this.selectedEnjeuxIrdChercheur = res;
            this.viewEnjeuxIrdChercheurDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateEnjeuxIrdChercheur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
            this.createEnjeuxIrdChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteEnjeuxIrdChercheur(enjeuxIrdChercheur:EnjeuxIrdChercheurVo){
       const isPermistted = await this.roleService.isPermitted('EnjeuxIrdChercheur', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Enjeux ird chercheur) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.enjeuxIrdChercheurService.delete(enjeuxIrdChercheur).subscribe(status=>{
                          if(status > 0){
                          const position = this.enjeuxIrdChercheurs.indexOf(enjeuxIrdChercheur);
                          position > -1 ? this.enjeuxIrdChercheurs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Enjeux ird chercheur Supprimé',
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

public async loadEnjeuxIrd(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('EnjeuxIrdChercheur', 'list');
    isPermistted ? this.enjeuxIrdService.findAll().subscribe(enjeuxIrds => this.enjeuxIrds = enjeuxIrds,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadChercheur(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('EnjeuxIrdChercheur', 'list');
    isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateEnjeuxIrdChercheur(enjeuxIrdChercheur: EnjeuxIrdChercheurVo) {

     this.enjeuxIrdChercheurService.findByIdWithAssociatedList(enjeuxIrdChercheur).subscribe(
	 res => {
	       this.initDuplicateEnjeuxIrdChercheur(res);
	       this.selectedEnjeuxIrdChercheur = res;
	       this.selectedEnjeuxIrdChercheur.id = null;
            this.createEnjeuxIrdChercheurDialog = true;

});

	}

	initDuplicateEnjeuxIrdChercheur(res: EnjeuxIrdChercheurVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.enjeuxIrdChercheurs.map(e => {
    return {
            'Enjeux ird': e.enjeuxIrdVo?.libelle ,
            'Chercheur': e.chercheurVo?.numeroMatricule ,
     }
      });

      this.criteriaData = [{
        'Enjeux ird': this.searchEnjeuxIrdChercheur.enjeuxIrdVo?.libelle ? this.searchEnjeuxIrdChercheur.enjeuxIrdVo?.libelle : environment.emptyForExport ,
        'Chercheur': this.searchEnjeuxIrdChercheur.chercheurVo?.numeroMatricule ? this.searchEnjeuxIrdChercheur.chercheurVo?.numeroMatricule : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
           return this.enjeuxIrdChercheurService.enjeuxIrdChercheurs;
       }
    set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurs = value;
       }

    get enjeuxIrdChercheurSelections(): Array<EnjeuxIrdChercheurVo> {
           return this.enjeuxIrdChercheurService.enjeuxIrdChercheurSelections;
       }
    set enjeuxIrdChercheurSelections(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurSelections = value;
       }
   
     


    get selectedEnjeuxIrdChercheur():EnjeuxIrdChercheurVo {
           return this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur;
       }
    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur = value;
       }
    
    get createEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.createEnjeuxIrdChercheurDialog;
       }
    set createEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.createEnjeuxIrdChercheurDialog= value;
       }
    
    get editEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog;
       }
    set editEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog= value;
       }
    get viewEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog;
       }
    set viewEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog = value;
       }
       
     get searchEnjeuxIrdChercheur(): EnjeuxIrdChercheurVo {
        return this.enjeuxIrdChercheurService.searchEnjeuxIrdChercheur;
       }
    set searchEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.searchEnjeuxIrdChercheur = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
