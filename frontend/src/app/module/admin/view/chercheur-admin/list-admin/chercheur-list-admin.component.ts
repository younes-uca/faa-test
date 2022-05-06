import {Component, OnInit} from '@angular/core';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';


import {IdentifiantAuteurExpertVo} from '../../../../../controller/model/IdentifiantAuteurExpert.model';
import {EnjeuxIrdChercheurVo} from '../../../../../controller/model/EnjeuxIrdChercheur.model';
import {DisciplineScientifiqueChercheurVo} from '../../../../../controller/model/DisciplineScientifiqueChercheur.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-chercheur-list-admin',
  templateUrl: './chercheur-list-admin.component.html',
  styleUrls: ['./chercheur-list-admin.component.css']
})
export class ChercheurListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Chercheur';
     yesOrNoConsentementRgpd :any[] =[];
     yesOrNoFormationEnManagement :any[] =[];
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];


    constructor(private datePipe: DatePipe, private chercheurService: ChercheurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadChercheurs();
      this.initExport();
      this.initCol();
    this.yesOrNoConsentementRgpd =  [{label: 'ConsentementRgpd', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoFormationEnManagement =  [{label: 'FormationEnManagement', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadChercheurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Chercheur', 'list');
        isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.chercheurService.findByCriteria(this.searchChercheur).subscribe(chercheurs=>{
            
            this.chercheurs = chercheurs;
           // this.searchChercheur = new ChercheurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'consentementRgpd', header: 'Consentement rgpd'},
                            {field: 'numeroMatricule', header: 'Numero matricule'},
                            {field: 'emailPrincipale', header: 'Email principale'},
                            {field: 'natureImplication', header: 'Nature implication'},
                            {field: 'formationEnManagement', header: 'Formation en management'},
                            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
                            {field: 'enabled', header: 'Enabled'},
                            {field: 'accountNonExpired', header: 'Account non expired'},
                            {field: 'accountNonLocked', header: 'Account non locked'},
                            {field: 'passwordChanged', header: 'Password changed'},
                            {field: 'createdAt', header: 'Created at'},
                            {field: 'updatedAt', header: 'Updated at'},
                            {field: 'username', header: 'Username'},
                            {field: 'password', header: 'Password'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'nom', header: 'Nom'},
                            {field: 'baseHorizon', header: 'Base horizon'},
                            {field: 'role', header: 'Role'},
        ];
    }
    
    public async editChercheur(chercheur:ChercheurVo){
        const isPermistted = await this.roleService.isPermitted('Chercheur', 'edit');
         if(isPermistted){
          this.chercheurService.findByIdWithAssociatedList(chercheur).subscribe(res => {
           this.selectedChercheur = res;
            this.selectedChercheur.createdAt = new Date(chercheur.createdAt);
            this.selectedChercheur.updatedAt = new Date(chercheur.updatedAt);
            this.editChercheurDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewChercheur(chercheur:ChercheurVo){
        const isPermistted = await this.roleService.isPermitted('Chercheur', 'view');
        if(isPermistted){
           this.chercheurService.findByIdWithAssociatedList(chercheur).subscribe(res => {
           this.selectedChercheur = res;
            this.selectedChercheur.createdAt = new Date(chercheur.createdAt);
            this.selectedChercheur.updatedAt = new Date(chercheur.updatedAt);
            this.viewChercheurDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateChercheur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedChercheur = new ChercheurVo();
            this.createChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteChercheur(chercheur:ChercheurVo){
       const isPermistted = await this.roleService.isPermitted('Chercheur', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Chercheur) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.chercheurService.delete(chercheur).subscribe(status=>{
                          if(status > 0){
                          const position = this.chercheurs.indexOf(chercheur);
                          position > -1 ? this.chercheurs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Chercheur Supprimé',
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


public async duplicateChercheur(chercheur: ChercheurVo) {

     this.chercheurService.findByIdWithAssociatedList(chercheur).subscribe(
	 res => {
	       this.initDuplicateChercheur(res);
	       this.selectedChercheur = res;
	       this.selectedChercheur.id = null;
            this.createChercheurDialog = true;

});

	}

	initDuplicateChercheur(res: ChercheurVo) {
        if (res.disciplineScientifiqueChercheursVo != null) {
             res.disciplineScientifiqueChercheursVo.forEach(d => { d.chercheurVo = null; d.id = null; });
                }
        if (res.enjeuxIrdChercheursVo != null) {
             res.enjeuxIrdChercheursVo.forEach(d => { d.chercheurVo = null; d.id = null; });
                }
        if (res.identifiantAuteurExpertsVo != null) {
             res.identifiantAuteurExpertsVo.forEach(d => { d.chercheurVo = null; d.id = null; });
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
    this.exportData = this.chercheurs.map(e => {
    return {
                    'Consentement rgpd': e.consentementRgpd? 'Vrai' : 'Faux' ,
                    'Numero matricule': e.numeroMatricule ,
                    'Email principale': e.emailPrincipale ,
                    'Resume': e.resume ,
                    'Nature implication': e.natureImplication ,
                    'Formation en management': e.formationEnManagement? 'Vrai' : 'Faux' ,
                    'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                    'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                    'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                    'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                    'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                    'Created at': this.datePipe.transform(e.createdAt , 'dd-MM-yyyy'),
                    'Updated at': this.datePipe.transform(e.updatedAt , 'dd-MM-yyyy'),
                    'Username': e.username ,
                    'Password': e.password ,
                    'Prenom': e.prenom ,
                    'Nom': e.nom ,
                    'Base horizon': e.baseHorizon ,
                    'Role': e.role ,
     }
      });

      this.criteriaData = [{
            'Consentement rgpd': this.searchChercheur.consentementRgpd ? (this.searchChercheur.consentementRgpd ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Numero matricule': this.searchChercheur.numeroMatricule ? this.searchChercheur.numeroMatricule : environment.emptyForExport ,
            'Email principale': this.searchChercheur.emailPrincipale ? this.searchChercheur.emailPrincipale : environment.emptyForExport ,
            'Resume': this.searchChercheur.resume ? this.searchChercheur.resume : environment.emptyForExport ,
            'Nature implication': this.searchChercheur.natureImplication ? this.searchChercheur.natureImplication : environment.emptyForExport ,
            'Formation en management': this.searchChercheur.formationEnManagement ? (this.searchChercheur.formationEnManagement ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Credentials non expired': this.searchChercheur.credentialsNonExpired ? (this.searchChercheur.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchChercheur.enabled ? (this.searchChercheur.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchChercheur.accountNonExpired ? (this.searchChercheur.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchChercheur.accountNonLocked ? (this.searchChercheur.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchChercheur.passwordChanged ? (this.searchChercheur.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Created at Min': this.searchChercheur.createdAtMin ? this.datePipe.transform(this.searchChercheur.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchChercheur.createdAtMax ? this.datePipe.transform(this.searchChercheur.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchChercheur.updatedAtMin ? this.datePipe.transform(this.searchChercheur.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchChercheur.updatedAtMax ? this.datePipe.transform(this.searchChercheur.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchChercheur.username ? this.searchChercheur.username : environment.emptyForExport ,
            'Password': this.searchChercheur.password ? this.searchChercheur.password : environment.emptyForExport ,
            'Prenom': this.searchChercheur.prenom ? this.searchChercheur.prenom : environment.emptyForExport ,
            'Nom': this.searchChercheur.nom ? this.searchChercheur.nom : environment.emptyForExport ,
            'Base horizon': this.searchChercheur.baseHorizon ? this.searchChercheur.baseHorizon : environment.emptyForExport ,
            'Role': this.searchChercheur.role ? this.searchChercheur.role : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get chercheurs(): Array<ChercheurVo> {
           return this.chercheurService.chercheurs;
       }
    set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       }

    get chercheurSelections(): Array<ChercheurVo> {
           return this.chercheurService.chercheurSelections;
       }
    set chercheurSelections(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurSelections = value;
       }
   
     


    get selectedChercheur():ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
    set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }
    
    get createChercheurDialog():boolean {
           return this.chercheurService.createChercheurDialog;
       }
    set createChercheurDialog(value: boolean) {
        this.chercheurService.createChercheurDialog= value;
       }
    
    get editChercheurDialog():boolean {
           return this.chercheurService.editChercheurDialog;
       }
    set editChercheurDialog(value: boolean) {
        this.chercheurService.editChercheurDialog= value;
       }
    get viewChercheurDialog():boolean {
           return this.chercheurService.viewChercheurDialog;
       }
    set viewChercheurDialog(value: boolean) {
        this.chercheurService.viewChercheurDialog = value;
       }
       
     get searchChercheur(): ChercheurVo {
        return this.chercheurService.searchChercheur;
       }
    set searchChercheur(value: ChercheurVo) {
        this.chercheurService.searchChercheur = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
