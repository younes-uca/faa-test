import {Component, OnInit} from '@angular/core';
import {SemanticRelationshipService} from '../../../../../controller/service/SemanticRelationship.service';
import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
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
  selector: 'app-semantic-relationship-list-chercheur',
  templateUrl: './semantic-relationship-list-chercheur.component.html',
  styleUrls: ['./semantic-relationship-list-chercheur.component.css']
})
export class SemanticRelationshipListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'SemanticRelationship';


    constructor(private datePipe: DatePipe, private semanticRelationshipService: SemanticRelationshipService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadSemanticRelationships();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadSemanticRelationships(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SemanticRelationship', 'list');
        isPermistted ? this.semanticRelationshipService.findAll().subscribe(semanticRelationships => this.semanticRelationships = semanticRelationships,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.semanticRelationshipService.findByCriteria(this.searchSemanticRelationship).subscribe(semanticRelationships=>{
            
            this.semanticRelationships = semanticRelationships;
           // this.searchSemanticRelationship = new SemanticRelationshipVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
                            {field: 'niveauExactitude', header: 'Niveau exactitude'},
        ];
    }
    
    public async editSemanticRelationship(semanticRelationship:SemanticRelationshipVo){
        const isPermistted = await this.roleService.isPermitted('SemanticRelationship', 'edit');
         if(isPermistted){
          this.semanticRelationshipService.findByIdWithAssociatedList(semanticRelationship).subscribe(res => {
           this.selectedSemanticRelationship = res;
            this.editSemanticRelationshipDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewSemanticRelationship(semanticRelationship:SemanticRelationshipVo){
        const isPermistted = await this.roleService.isPermitted('SemanticRelationship', 'view');
        if(isPermistted){
           this.semanticRelationshipService.findByIdWithAssociatedList(semanticRelationship).subscribe(res => {
           this.selectedSemanticRelationship = res;
            this.viewSemanticRelationshipDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateSemanticRelationship(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedSemanticRelationship = new SemanticRelationshipVo();
            this.createSemanticRelationshipDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteSemanticRelationship(semanticRelationship:SemanticRelationshipVo){
       const isPermistted = await this.roleService.isPermitted('SemanticRelationship', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Semantic relationship) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.semanticRelationshipService.delete(semanticRelationship).subscribe(status=>{
                          if(status > 0){
                          const position = this.semanticRelationships.indexOf(semanticRelationship);
                          position > -1 ? this.semanticRelationships.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Semantic relationship Supprimé',
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


public async duplicateSemanticRelationship(semanticRelationship: SemanticRelationshipVo) {

     this.semanticRelationshipService.findByIdWithAssociatedList(semanticRelationship).subscribe(
	 res => {
	       this.initDuplicateSemanticRelationship(res);
	       this.selectedSemanticRelationship = res;
	       this.selectedSemanticRelationship.id = null;
            this.createSemanticRelationshipDialog = true;

});

	}

	initDuplicateSemanticRelationship(res: SemanticRelationshipVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.semanticRelationships.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
                    'Niveau exactitude': e.niveauExactitude ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchSemanticRelationship.libelle ? this.searchSemanticRelationship.libelle : environment.emptyForExport ,
            'Code': this.searchSemanticRelationship.code ? this.searchSemanticRelationship.code : environment.emptyForExport ,
            'Niveau exactitude Min': this.searchSemanticRelationship.niveauExactitudeMin ? this.searchSemanticRelationship.niveauExactitudeMin : environment.emptyForExport ,
            'Niveau exactitude Max': this.searchSemanticRelationship.niveauExactitudeMax ? this.searchSemanticRelationship.niveauExactitudeMax : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get semanticRelationships(): Array<SemanticRelationshipVo> {
           return this.semanticRelationshipService.semanticRelationships;
       }
    set semanticRelationships(value: Array<SemanticRelationshipVo>) {
        this.semanticRelationshipService.semanticRelationships = value;
       }

    get semanticRelationshipSelections(): Array<SemanticRelationshipVo> {
           return this.semanticRelationshipService.semanticRelationshipSelections;
       }
    set semanticRelationshipSelections(value: Array<SemanticRelationshipVo>) {
        this.semanticRelationshipService.semanticRelationshipSelections = value;
       }
   
     


    get selectedSemanticRelationship():SemanticRelationshipVo {
           return this.semanticRelationshipService.selectedSemanticRelationship;
       }
    set selectedSemanticRelationship(value: SemanticRelationshipVo) {
        this.semanticRelationshipService.selectedSemanticRelationship = value;
       }
    
    get createSemanticRelationshipDialog():boolean {
           return this.semanticRelationshipService.createSemanticRelationshipDialog;
       }
    set createSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.createSemanticRelationshipDialog= value;
       }
    
    get editSemanticRelationshipDialog():boolean {
           return this.semanticRelationshipService.editSemanticRelationshipDialog;
       }
    set editSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.editSemanticRelationshipDialog= value;
       }
    get viewSemanticRelationshipDialog():boolean {
           return this.semanticRelationshipService.viewSemanticRelationshipDialog;
       }
    set viewSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.viewSemanticRelationshipDialog = value;
       }
       
     get searchSemanticRelationship(): SemanticRelationshipVo {
        return this.semanticRelationshipService.searchSemanticRelationship;
       }
    set searchSemanticRelationship(value: SemanticRelationshipVo) {
        this.semanticRelationshipService.searchSemanticRelationship = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
