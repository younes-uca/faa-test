import {Component, OnInit} from '@angular/core';
import {IdentifiantAuteurExpertService} from '../../../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../../../controller/model/IdentifiantAuteurExpert.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { IdentifiantRechercheService } from '../../../../../controller/service/IdentifiantRecherche.service';
import { ChercheurService } from '../../../../../controller/service/Chercheur.service';

import {IdentifiantRechercheVo} from '../../../../../controller/model/IdentifiantRecherche.model';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-identifiant-auteur-expert-list-admin',
  templateUrl: './identifiant-auteur-expert-list-admin.component.html',
  styleUrls: ['./identifiant-auteur-expert-list-admin.component.css']
})
export class IdentifiantAuteurExpertListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'IdentifiantAuteurExpert';
    identifiantRecherches :Array<IdentifiantRechercheVo>;
    chercheurs :Array<ChercheurVo>;


    constructor(private datePipe: DatePipe, private identifiantAuteurExpertService: IdentifiantAuteurExpertService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private identifiantRechercheService: IdentifiantRechercheService
        , private chercheurService: ChercheurService
) { }

    ngOnInit(): void {
      this.loadIdentifiantAuteurExperts();
      this.initExport();
      this.initCol();
      this.loadIdentifiantRecherche();
      this.loadChercheur();
    }
    
    // methods
      public async loadIdentifiantAuteurExperts(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('IdentifiantAuteurExpert', 'list');
        isPermistted ? this.identifiantAuteurExpertService.findAll().subscribe(identifiantAuteurExperts => this.identifiantAuteurExperts = identifiantAuteurExperts,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.identifiantAuteurExpertService.findByCriteria(this.searchIdentifiantAuteurExpert).subscribe(identifiantAuteurExperts=>{
            
            this.identifiantAuteurExperts = identifiantAuteurExperts;
           // this.searchIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                        {field: 'identifiantRecherche?.libelle', header: 'Identifiant recherche'},
                        {field: 'chercheur?.numeroMatricule', header: 'Chercheur'},
                            {field: 'valeur', header: 'Valeur'},
        ];
    }
    
    public async editIdentifiantAuteurExpert(identifiantAuteurExpert:IdentifiantAuteurExpertVo){
        const isPermistted = await this.roleService.isPermitted('IdentifiantAuteurExpert', 'edit');
         if(isPermistted){
          this.identifiantAuteurExpertService.findByIdWithAssociatedList(identifiantAuteurExpert).subscribe(res => {
           this.selectedIdentifiantAuteurExpert = res;
            this.editIdentifiantAuteurExpertDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewIdentifiantAuteurExpert(identifiantAuteurExpert:IdentifiantAuteurExpertVo){
        const isPermistted = await this.roleService.isPermitted('IdentifiantAuteurExpert', 'view');
        if(isPermistted){
           this.identifiantAuteurExpertService.findByIdWithAssociatedList(identifiantAuteurExpert).subscribe(res => {
           this.selectedIdentifiantAuteurExpert = res;
            this.viewIdentifiantAuteurExpertDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateIdentifiantAuteurExpert(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
            this.createIdentifiantAuteurExpertDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteIdentifiantAuteurExpert(identifiantAuteurExpert:IdentifiantAuteurExpertVo){
       const isPermistted = await this.roleService.isPermitted('IdentifiantAuteurExpert', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Identifiant auteur expert) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.identifiantAuteurExpertService.delete(identifiantAuteurExpert).subscribe(status=>{
                          if(status > 0){
                          const position = this.identifiantAuteurExperts.indexOf(identifiantAuteurExpert);
                          position > -1 ? this.identifiantAuteurExperts.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Identifiant auteur expert Supprimé',
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

public async loadIdentifiantRecherche(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('IdentifiantAuteurExpert', 'list');
    isPermistted ? this.identifiantRechercheService.findAll().subscribe(identifiantRecherches => this.identifiantRecherches = identifiantRecherches,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadChercheur(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('IdentifiantAuteurExpert', 'list');
    isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateIdentifiantAuteurExpert(identifiantAuteurExpert: IdentifiantAuteurExpertVo) {

     this.identifiantAuteurExpertService.findByIdWithAssociatedList(identifiantAuteurExpert).subscribe(
	 res => {
	       this.initDuplicateIdentifiantAuteurExpert(res);
	       this.selectedIdentifiantAuteurExpert = res;
	       this.selectedIdentifiantAuteurExpert.id = null;
            this.createIdentifiantAuteurExpertDialog = true;

});

	}

	initDuplicateIdentifiantAuteurExpert(res: IdentifiantAuteurExpertVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.identifiantAuteurExperts.map(e => {
    return {
            'Identifiant recherche': e.identifiantRechercheVo?.libelle ,
            'Chercheur': e.chercheurVo?.numeroMatricule ,
                    'Valeur': e.valeur ,
     }
      });

      this.criteriaData = [{
        'Identifiant recherche': this.searchIdentifiantAuteurExpert.identifiantRechercheVo?.libelle ? this.searchIdentifiantAuteurExpert.identifiantRechercheVo?.libelle : environment.emptyForExport ,
        'Chercheur': this.searchIdentifiantAuteurExpert.chercheurVo?.numeroMatricule ? this.searchIdentifiantAuteurExpert.chercheurVo?.numeroMatricule : environment.emptyForExport ,
            'Valeur': this.searchIdentifiantAuteurExpert.valeur ? this.searchIdentifiantAuteurExpert.valeur : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
           return this.identifiantAuteurExpertService.identifiantAuteurExperts;
       }
    set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExperts = value;
       }

    get identifiantAuteurExpertSelections(): Array<IdentifiantAuteurExpertVo> {
           return this.identifiantAuteurExpertService.identifiantAuteurExpertSelections;
       }
    set identifiantAuteurExpertSelections(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExpertSelections = value;
       }
   
     


    get selectedIdentifiantAuteurExpert():IdentifiantAuteurExpertVo {
           return this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert;
       }
    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert = value;
       }
    
    get createIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog;
       }
    set createIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog= value;
       }
    
    get editIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog;
       }
    set editIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog= value;
       }
    get viewIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog;
       }
    set viewIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog = value;
       }
       
     get searchIdentifiantAuteurExpert(): IdentifiantAuteurExpertVo {
        return this.identifiantAuteurExpertService.searchIdentifiantAuteurExpert;
       }
    set searchIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.searchIdentifiantAuteurExpert = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
