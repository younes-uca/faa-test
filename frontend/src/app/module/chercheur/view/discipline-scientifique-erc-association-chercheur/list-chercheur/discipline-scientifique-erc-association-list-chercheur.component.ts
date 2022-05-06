import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueErcAssociationService} from '../../../../../controller/service/DisciplineScientifiqueErcAssociation.service';
import {DisciplineScientifiqueErcAssociationVo} from '../../../../../controller/model/DisciplineScientifiqueErcAssociation.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { DisciplineScientifiqueErcService } from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import { DisciplineScientifiqueService } from '../../../../../controller/service/DisciplineScientifique.service';
import { SemanticRelationshipService } from '../../../../../controller/service/SemanticRelationship.service';

import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-discipline-scientifique-erc-association-list-chercheur',
  templateUrl: './discipline-scientifique-erc-association-list-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-association-list-chercheur.component.css']
})
export class DisciplineScientifiqueErcAssociationListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'DisciplineScientifiqueErcAssociation';
    disciplineScientifiqueErcs :Array<DisciplineScientifiqueErcVo>;
    disciplineScientifiques :Array<DisciplineScientifiqueVo>;
    semanticRelationships :Array<SemanticRelationshipVo>;


    constructor(private datePipe: DatePipe, private disciplineScientifiqueErcAssociationService: DisciplineScientifiqueErcAssociationService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
        , private disciplineScientifiqueService: DisciplineScientifiqueService
        , private semanticRelationshipService: SemanticRelationshipService
) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiqueErcAssociations();
      this.initExport();
      this.initCol();
      this.loadDisciplineScientifiqueErc();
      this.loadDisciplineScientifique();
      this.loadSemanticRelationship();
    }
    
    // methods
      public async loadDisciplineScientifiqueErcAssociations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcAssociation', 'list');
        isPermistted ? this.disciplineScientifiqueErcAssociationService.findAll().subscribe(disciplineScientifiqueErcAssociations => this.disciplineScientifiqueErcAssociations = disciplineScientifiqueErcAssociations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.disciplineScientifiqueErcAssociationService.findByCriteria(this.searchDisciplineScientifiqueErcAssociation).subscribe(disciplineScientifiqueErcAssociations=>{
            
            this.disciplineScientifiqueErcAssociations = disciplineScientifiqueErcAssociations;
           // this.searchDisciplineScientifiqueErcAssociation = new DisciplineScientifiqueErcAssociationVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                        {field: 'disciplineScientifiqueErc?.libelleEng', header: 'Discipline scientifique erc'},
                        {field: 'disciplineScientifique?.libelleEng', header: 'Discipline scientifique'},
                        {field: 'semanticRelationship?.libelle', header: 'Semantic relationship'},
        ];
    }
    
    public async editDisciplineScientifiqueErcAssociation(disciplineScientifiqueErcAssociation:DisciplineScientifiqueErcAssociationVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcAssociation', 'edit');
         if(isPermistted){
          this.disciplineScientifiqueErcAssociationService.findByIdWithAssociatedList(disciplineScientifiqueErcAssociation).subscribe(res => {
           this.selectedDisciplineScientifiqueErcAssociation = res;
            this.editDisciplineScientifiqueErcAssociationDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDisciplineScientifiqueErcAssociation(disciplineScientifiqueErcAssociation:DisciplineScientifiqueErcAssociationVo){
        const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcAssociation', 'view');
        if(isPermistted){
           this.disciplineScientifiqueErcAssociationService.findByIdWithAssociatedList(disciplineScientifiqueErcAssociation).subscribe(res => {
           this.selectedDisciplineScientifiqueErcAssociation = res;
            this.viewDisciplineScientifiqueErcAssociationDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueErcAssociation(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDisciplineScientifiqueErcAssociation = new DisciplineScientifiqueErcAssociationVo();
            this.createDisciplineScientifiqueErcAssociationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDisciplineScientifiqueErcAssociation(disciplineScientifiqueErcAssociation:DisciplineScientifiqueErcAssociationVo){
       const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcAssociation', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Discipline scientifique erc association) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueErcAssociationService.delete(disciplineScientifiqueErcAssociation).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueErcAssociations.indexOf(disciplineScientifiqueErcAssociation);
                          position > -1 ? this.disciplineScientifiqueErcAssociations.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Discipline scientifique erc association Supprimé',
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

public async loadDisciplineScientifiqueErc(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcAssociation', 'list');
    isPermistted ? this.disciplineScientifiqueErcService.findAll().subscribe(disciplineScientifiqueErcs => this.disciplineScientifiqueErcs = disciplineScientifiqueErcs,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadDisciplineScientifique(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcAssociation', 'list');
    isPermistted ? this.disciplineScientifiqueService.findAll().subscribe(disciplineScientifiques => this.disciplineScientifiques = disciplineScientifiques,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadSemanticRelationship(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcAssociation', 'list');
    isPermistted ? this.semanticRelationshipService.findAll().subscribe(semanticRelationships => this.semanticRelationships = semanticRelationships,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateDisciplineScientifiqueErcAssociation(disciplineScientifiqueErcAssociation: DisciplineScientifiqueErcAssociationVo) {

     this.disciplineScientifiqueErcAssociationService.findByIdWithAssociatedList(disciplineScientifiqueErcAssociation).subscribe(
	 res => {
	       this.initDuplicateDisciplineScientifiqueErcAssociation(res);
	       this.selectedDisciplineScientifiqueErcAssociation = res;
	       this.selectedDisciplineScientifiqueErcAssociation.id = null;
            this.createDisciplineScientifiqueErcAssociationDialog = true;

});

	}

	initDuplicateDisciplineScientifiqueErcAssociation(res: DisciplineScientifiqueErcAssociationVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.disciplineScientifiqueErcAssociations.map(e => {
    return {
            'Discipline scientifique erc': e.disciplineScientifiqueErcVo?.libelleEng ,
            'Discipline scientifique': e.disciplineScientifiqueVo?.libelleEng ,
            'Semantic relationship': e.semanticRelationshipVo?.libelle ,
     }
      });

      this.criteriaData = [{
        'Discipline scientifique erc': this.searchDisciplineScientifiqueErcAssociation.disciplineScientifiqueErcVo?.libelleEng ? this.searchDisciplineScientifiqueErcAssociation.disciplineScientifiqueErcVo?.libelleEng : environment.emptyForExport ,
        'Discipline scientifique': this.searchDisciplineScientifiqueErcAssociation.disciplineScientifiqueVo?.libelleEng ? this.searchDisciplineScientifiqueErcAssociation.disciplineScientifiqueVo?.libelleEng : environment.emptyForExport ,
        'Semantic relationship': this.searchDisciplineScientifiqueErcAssociation.semanticRelationshipVo?.libelle ? this.searchDisciplineScientifiqueErcAssociation.semanticRelationshipVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get disciplineScientifiqueErcAssociations(): Array<DisciplineScientifiqueErcAssociationVo> {
           return this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociations;
       }
    set disciplineScientifiqueErcAssociations(value: Array<DisciplineScientifiqueErcAssociationVo>) {
        this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociations = value;
       }

    get disciplineScientifiqueErcAssociationSelections(): Array<DisciplineScientifiqueErcAssociationVo> {
           return this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociationSelections;
       }
    set disciplineScientifiqueErcAssociationSelections(value: Array<DisciplineScientifiqueErcAssociationVo>) {
        this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociationSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueErcAssociation():DisciplineScientifiqueErcAssociationVo {
           return this.disciplineScientifiqueErcAssociationService.selectedDisciplineScientifiqueErcAssociation;
       }
    set selectedDisciplineScientifiqueErcAssociation(value: DisciplineScientifiqueErcAssociationVo) {
        this.disciplineScientifiqueErcAssociationService.selectedDisciplineScientifiqueErcAssociation = value;
       }
    
    get createDisciplineScientifiqueErcAssociationDialog():boolean {
           return this.disciplineScientifiqueErcAssociationService.createDisciplineScientifiqueErcAssociationDialog;
       }
    set createDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this.disciplineScientifiqueErcAssociationService.createDisciplineScientifiqueErcAssociationDialog= value;
       }
    
    get editDisciplineScientifiqueErcAssociationDialog():boolean {
           return this.disciplineScientifiqueErcAssociationService.editDisciplineScientifiqueErcAssociationDialog;
       }
    set editDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this.disciplineScientifiqueErcAssociationService.editDisciplineScientifiqueErcAssociationDialog= value;
       }
    get viewDisciplineScientifiqueErcAssociationDialog():boolean {
           return this.disciplineScientifiqueErcAssociationService.viewDisciplineScientifiqueErcAssociationDialog;
       }
    set viewDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this.disciplineScientifiqueErcAssociationService.viewDisciplineScientifiqueErcAssociationDialog = value;
       }
       
     get searchDisciplineScientifiqueErcAssociation(): DisciplineScientifiqueErcAssociationVo {
        return this.disciplineScientifiqueErcAssociationService.searchDisciplineScientifiqueErcAssociation;
       }
    set searchDisciplineScientifiqueErcAssociation(value: DisciplineScientifiqueErcAssociationVo) {
        this.disciplineScientifiqueErcAssociationService.searchDisciplineScientifiqueErcAssociation = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
