import {Component, OnInit} from '@angular/core';
import {DistinctionService} from '../../../../../controller/service/Distinction.service';
import {DistinctionVo} from '../../../../../controller/model/Distinction.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { ChercheurService } from '../../../../../controller/service/Chercheur.service';
import { CampagneService } from '../../../../../controller/service/Campagne.service';
import { EtatEtapeCampagneService } from '../../../../../controller/service/EtatEtapeCampagne.service';

import {EtatEtapeCampagneVo} from '../../../../../controller/model/EtatEtapeCampagne.model';
import {CampagneVo} from '../../../../../controller/model/Campagne.model';
import {DistinctionDisciplineScientifiqueVo} from '../../../../../controller/model/DistinctionDisciplineScientifique.model';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-distinction-list-admin',
  templateUrl: './distinction-list-admin.component.html',
  styleUrls: ['./distinction-list-admin.component.css']
})
export class DistinctionListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Distinction';
    chercheurs :Array<ChercheurVo>;
    campagnes :Array<CampagneVo>;
    etatEtapeCampagnes :Array<EtatEtapeCampagneVo>;


    constructor(private datePipe: DatePipe, private distinctionService: DistinctionService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private chercheurService: ChercheurService
        , private campagneService: CampagneService
        , private etatEtapeCampagneService: EtatEtapeCampagneService
) { }

    ngOnInit(): void {
      this.loadDistinctions();
      this.initExport();
      this.initCol();
      this.loadChercheur();
      this.loadCampagne();
      this.loadEtatEtapeCampagne();
    }
    
    // methods
    public async loadDistinctions(){
       const chercheur = this.authService.authenticatedUserByAdmin();
        await this.roleService.findAll();
        if (chercheur !== null){
            const isPermistted = await this.roleService.isPermitted('Distinction', 'list');
            isPermistted ? this.distinctionService.findByChercheurId(chercheur.id).subscribe(distinctions => this.distinctions = distinctions,error => console.log(error))
                : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});}
        else{
            const isPermistted = await this.roleService.isPermitted('Distinction', 'list');
            isPermistted ? this.distinctionService.findAll().subscribe(distinctions => this.distinctions = distinctions,error=>console.log(error))
                : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
        }
    }


  public searchRequest(){
        this.distinctionService.findByCriteria(this.searchDistinction).subscribe(distinctions=>{
            
            this.distinctions = distinctions;
           // this.searchDistinction = new DistinctionVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateObtention', header: 'Date obtention'},
                            {field: 'intitule', header: 'Intitule'},
                        {field: 'chercheur?.numeroMatricule', header: 'Chercheur'},
                        {field: 'campagne?.libelle', header: 'Campagne'},
                        {field: 'etatEtapeCampagne?.libelle', header: 'Etat etape campagne'},
        ];
    }
    
    public async editDistinction(distinction:DistinctionVo){
        const isPermistted = await this.roleService.isPermitted('Distinction', 'edit');
         if(isPermistted){
          this.distinctionService.findByIdWithAssociatedList(distinction).subscribe(res => {
           this.selectedDistinction = res;
            this.selectedDistinction.dateObtention = new Date(distinction.dateObtention);
            this.editDistinctionDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDistinction(distinction:DistinctionVo){
        const isPermistted = await this.roleService.isPermitted('Distinction', 'view');
        if(isPermistted){
           this.distinctionService.findByIdWithAssociatedList(distinction).subscribe(res => {
           this.selectedDistinction = res;
            this.selectedDistinction.dateObtention = new Date(distinction.dateObtention);
            this.viewDistinctionDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDistinction(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDistinction = new DistinctionVo();
            this.createDistinctionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDistinction(distinction:DistinctionVo){
       const isPermistted = await this.roleService.isPermitted('Distinction', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Distinction) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.distinctionService.delete(distinction).subscribe(status=>{
                          if(status > 0){
                          const position = this.distinctions.indexOf(distinction);
                          position > -1 ? this.distinctions.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Distinction Supprimé',
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
    const isPermistted = await this.roleService.isPermitted('Distinction', 'list');
    isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadCampagne(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Distinction', 'list');
    isPermistted ? this.campagneService.findAll().subscribe(campagnes => this.campagnes = campagnes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadEtatEtapeCampagne(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Distinction', 'list');
    isPermistted ? this.etatEtapeCampagneService.findAll().subscribe(etatEtapeCampagnes => this.etatEtapeCampagnes = etatEtapeCampagnes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateDistinction(distinction: DistinctionVo) {

     this.distinctionService.findByIdWithAssociatedList(distinction).subscribe(
	 res => {
	       this.initDuplicateDistinction(res);
	       this.selectedDistinction = res;
	       this.selectedDistinction.id = null;
            this.createDistinctionDialog = true;

});

	}

	initDuplicateDistinction(res: DistinctionVo) {
        if (res.distinctionDisciplineScientifiquesVo != null) {
             res.distinctionDisciplineScientifiquesVo.forEach(d => { d.distinctionVo = null; d.id = null; });
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
    this.exportData = this.distinctions.map(e => {
    return {
                    'Date obtention': this.datePipe.transform(e.dateObtention , 'dd-MM-yyyy'),
                    'Intitule': e.intitule ,
            'Chercheur': e.chercheurVo?.numeroMatricule ,
            'Campagne': e.campagneVo?.libelle ,
            'Etat etape campagne': e.etatEtapeCampagneVo?.libelle ,
     }
      });

      this.criteriaData = [{
            'Date obtention Min': this.searchDistinction.dateObtentionMin ? this.datePipe.transform(this.searchDistinction.dateObtentionMin , this.dateFormat) : environment.emptyForExport ,
            'Date obtention Max': this.searchDistinction.dateObtentionMax ? this.datePipe.transform(this.searchDistinction.dateObtentionMax , this.dateFormat) : environment.emptyForExport ,
            'Intitule': this.searchDistinction.intitule ? this.searchDistinction.intitule : environment.emptyForExport ,
        'Chercheur': this.searchDistinction.chercheurVo?.numeroMatricule ? this.searchDistinction.chercheurVo?.numeroMatricule : environment.emptyForExport ,
        'Campagne': this.searchDistinction.campagneVo?.libelle ? this.searchDistinction.campagneVo?.libelle : environment.emptyForExport ,
        'Etat etape campagne': this.searchDistinction.etatEtapeCampagneVo?.libelle ? this.searchDistinction.etatEtapeCampagneVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get distinctions(): Array<DistinctionVo> {
           return this.distinctionService.distinctions;
       }
    set distinctions(value: Array<DistinctionVo>) {
        this.distinctionService.distinctions = value;
       }

    get distinctionSelections(): Array<DistinctionVo> {
           return this.distinctionService.distinctionSelections;
       }
    set distinctionSelections(value: Array<DistinctionVo>) {
        this.distinctionService.distinctionSelections = value;
       }
   
     


    get selectedDistinction():DistinctionVo {
           return this.distinctionService.selectedDistinction;
       }
    set selectedDistinction(value: DistinctionVo) {
        this.distinctionService.selectedDistinction = value;
       }
    
    get createDistinctionDialog():boolean {
           return this.distinctionService.createDistinctionDialog;
       }
    set createDistinctionDialog(value: boolean) {
        this.distinctionService.createDistinctionDialog= value;
       }
    
    get editDistinctionDialog():boolean {
           return this.distinctionService.editDistinctionDialog;
       }
    set editDistinctionDialog(value: boolean) {
        this.distinctionService.editDistinctionDialog= value;
       }
    get viewDistinctionDialog():boolean {
           return this.distinctionService.viewDistinctionDialog;
       }
    set viewDistinctionDialog(value: boolean) {
        this.distinctionService.viewDistinctionDialog = value;
       }
       
     get searchDistinction(): DistinctionVo {
        return this.distinctionService.searchDistinction;
       }
    set searchDistinction(value: DistinctionVo) {
        this.distinctionService.searchDistinction = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
