import {Component, OnInit} from '@angular/core';
import {CampagneService} from '../../../../../controller/service/Campagne.service';
import {CampagneVo} from '../../../../../controller/model/Campagne.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';


import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-campagne-list-admin',
  templateUrl: './campagne-list-admin.component.html',
  styleUrls: ['./campagne-list-admin.component.css']
})
export class CampagneListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Campagne';


    constructor(private datePipe: DatePipe, private campagneService: CampagneService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadCampagnes();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadCampagnes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Campagne', 'list');
        isPermistted ? this.campagneService.findAll().subscribe(campagnes => this.campagnes = campagnes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.campagneService.findByCriteria(this.searchCampagne).subscribe(campagnes=>{
            
            this.campagnes = campagnes;
           // this.searchCampagne = new CampagneVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
                            {field: 'annee', header: 'Annee'},
                            {field: 'dateDepart', header: 'Date depart'},
                            {field: 'dateFin', header: 'Date fin'},
        ];
    }
    
    public async editCampagne(campagne:CampagneVo){
        const isPermistted = await this.roleService.isPermitted('Campagne', 'edit');
         if(isPermistted){
          this.campagneService.findByIdWithAssociatedList(campagne).subscribe(res => {
           this.selectedCampagne = res;
            this.selectedCampagne.dateDepart = new Date(campagne.dateDepart);
            this.selectedCampagne.dateFin = new Date(campagne.dateFin);
            this.editCampagneDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewCampagne(campagne:CampagneVo){
        const isPermistted = await this.roleService.isPermitted('Campagne', 'view');
        if(isPermistted){
           this.campagneService.findByIdWithAssociatedList(campagne).subscribe(res => {
           this.selectedCampagne = res;
            this.selectedCampagne.dateDepart = new Date(campagne.dateDepart);
            this.selectedCampagne.dateFin = new Date(campagne.dateFin);
            this.viewCampagneDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateCampagne(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedCampagne = new CampagneVo();
            this.createCampagneDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteCampagne(campagne:CampagneVo){
       const isPermistted = await this.roleService.isPermitted('Campagne', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Campagne) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.campagneService.delete(campagne).subscribe(status=>{
                          if(status > 0){
                          const position = this.campagnes.indexOf(campagne);
                          position > -1 ? this.campagnes.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Campagne Supprimé',
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


public async duplicateCampagne(campagne: CampagneVo) {

     this.campagneService.findByIdWithAssociatedList(campagne).subscribe(
	 res => {
	       this.initDuplicateCampagne(res);
	       this.selectedCampagne = res;
	       this.selectedCampagne.id = null;
            this.createCampagneDialog = true;

});

	}

	initDuplicateCampagne(res: CampagneVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.campagnes.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
                    'Annee': e.annee ,
                    'Date depart': this.datePipe.transform(e.dateDepart , 'dd-MM-yyyy'),
                    'Date fin': this.datePipe.transform(e.dateFin , 'dd-MM-yyyy'),
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchCampagne.libelle ? this.searchCampagne.libelle : environment.emptyForExport ,
            'Code': this.searchCampagne.code ? this.searchCampagne.code : environment.emptyForExport ,
            'Annee Min': this.searchCampagne.anneeMin ? this.searchCampagne.anneeMin : environment.emptyForExport ,
            'Annee Max': this.searchCampagne.anneeMax ? this.searchCampagne.anneeMax : environment.emptyForExport ,
            'Date depart Min': this.searchCampagne.dateDepartMin ? this.datePipe.transform(this.searchCampagne.dateDepartMin , this.dateFormat) : environment.emptyForExport ,
            'Date depart Max': this.searchCampagne.dateDepartMax ? this.datePipe.transform(this.searchCampagne.dateDepartMax , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.searchCampagne.dateFinMin ? this.datePipe.transform(this.searchCampagne.dateFinMin , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.searchCampagne.dateFinMax ? this.datePipe.transform(this.searchCampagne.dateFinMax , this.dateFormat) : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get campagnes(): Array<CampagneVo> {
           return this.campagneService.campagnes;
       }
    set campagnes(value: Array<CampagneVo>) {
        this.campagneService.campagnes = value;
       }

    get campagneSelections(): Array<CampagneVo> {
           return this.campagneService.campagneSelections;
       }
    set campagneSelections(value: Array<CampagneVo>) {
        this.campagneService.campagneSelections = value;
       }
   
     


    get selectedCampagne():CampagneVo {
           return this.campagneService.selectedCampagne;
       }
    set selectedCampagne(value: CampagneVo) {
        this.campagneService.selectedCampagne = value;
       }
    
    get createCampagneDialog():boolean {
           return this.campagneService.createCampagneDialog;
       }
    set createCampagneDialog(value: boolean) {
        this.campagneService.createCampagneDialog= value;
       }
    
    get editCampagneDialog():boolean {
           return this.campagneService.editCampagneDialog;
       }
    set editCampagneDialog(value: boolean) {
        this.campagneService.editCampagneDialog= value;
       }
    get viewCampagneDialog():boolean {
           return this.campagneService.viewCampagneDialog;
       }
    set viewCampagneDialog(value: boolean) {
        this.campagneService.viewCampagneDialog = value;
       }
       
     get searchCampagne(): CampagneVo {
        return this.campagneService.searchCampagne;
       }
    set searchCampagne(value: CampagneVo) {
        this.campagneService.searchCampagne = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
