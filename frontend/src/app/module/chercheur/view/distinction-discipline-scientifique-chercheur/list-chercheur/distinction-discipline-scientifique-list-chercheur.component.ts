import {Component, OnInit} from '@angular/core';
import {DistinctionDisciplineScientifiqueService} from '../../../../../controller/service/DistinctionDisciplineScientifique.service';
import {DistinctionDisciplineScientifiqueVo} from '../../../../../controller/model/DistinctionDisciplineScientifique.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { DistinctionService } from '../../../../../controller/service/Distinction.service';
import { DisciplineScientifiqueService } from '../../../../../controller/service/DisciplineScientifique.service';

import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DistinctionVo} from '../../../../../controller/model/Distinction.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-distinction-discipline-scientifique-list-chercheur',
  templateUrl: './distinction-discipline-scientifique-list-chercheur.component.html',
  styleUrls: ['./distinction-discipline-scientifique-list-chercheur.component.css']
})
export class DistinctionDisciplineScientifiqueListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'DistinctionDisciplineScientifique';
    distinctions :Array<DistinctionVo>;
    disciplineScientifiques :Array<DisciplineScientifiqueVo>;


    constructor(private datePipe: DatePipe, private distinctionDisciplineScientifiqueService: DistinctionDisciplineScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private distinctionService: DistinctionService
        , private disciplineScientifiqueService: DisciplineScientifiqueService
) { }

    ngOnInit(): void {
      this.loadDistinctionDisciplineScientifiques();
      this.initExport();
      this.initCol();
      this.loadDistinction();
      this.loadDisciplineScientifique();
    }
    
    // methods
      public async loadDistinctionDisciplineScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DistinctionDisciplineScientifique', 'list');
        isPermistted ? this.distinctionDisciplineScientifiqueService.findAll().subscribe(distinctionDisciplineScientifiques => this.distinctionDisciplineScientifiques = distinctionDisciplineScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.distinctionDisciplineScientifiqueService.findByCriteria(this.searchDistinctionDisciplineScientifique).subscribe(distinctionDisciplineScientifiques=>{
            
            this.distinctionDisciplineScientifiques = distinctionDisciplineScientifiques;
           // this.searchDistinctionDisciplineScientifique = new DistinctionDisciplineScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                        {field: 'distinction?.id', header: 'Distinction'},
                        {field: 'disciplineScientifique?.libelleEng', header: 'Discipline scientifique'},
        ];
    }
    
    public async editDistinctionDisciplineScientifique(distinctionDisciplineScientifique:DistinctionDisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted('DistinctionDisciplineScientifique', 'edit');
         if(isPermistted){
          this.distinctionDisciplineScientifiqueService.findByIdWithAssociatedList(distinctionDisciplineScientifique).subscribe(res => {
           this.selectedDistinctionDisciplineScientifique = res;
            this.editDistinctionDisciplineScientifiqueDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDistinctionDisciplineScientifique(distinctionDisciplineScientifique:DistinctionDisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted('DistinctionDisciplineScientifique', 'view');
        if(isPermistted){
           this.distinctionDisciplineScientifiqueService.findByIdWithAssociatedList(distinctionDisciplineScientifique).subscribe(res => {
           this.selectedDistinctionDisciplineScientifique = res;
            this.viewDistinctionDisciplineScientifiqueDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDistinctionDisciplineScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDistinctionDisciplineScientifique = new DistinctionDisciplineScientifiqueVo();
            this.createDistinctionDisciplineScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDistinctionDisciplineScientifique(distinctionDisciplineScientifique:DistinctionDisciplineScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted('DistinctionDisciplineScientifique', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Distinction discipline scientifique) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.distinctionDisciplineScientifiqueService.delete(distinctionDisciplineScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.distinctionDisciplineScientifiques.indexOf(distinctionDisciplineScientifique);
                          position > -1 ? this.distinctionDisciplineScientifiques.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Distinction discipline scientifique Supprimé',
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

public async loadDistinction(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DistinctionDisciplineScientifique', 'list');
    isPermistted ? this.distinctionService.findAll().subscribe(distinctions => this.distinctions = distinctions,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadDisciplineScientifique(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DistinctionDisciplineScientifique', 'list');
    isPermistted ? this.disciplineScientifiqueService.findAll().subscribe(disciplineScientifiques => this.disciplineScientifiques = disciplineScientifiques,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateDistinctionDisciplineScientifique(distinctionDisciplineScientifique: DistinctionDisciplineScientifiqueVo) {

     this.distinctionDisciplineScientifiqueService.findByIdWithAssociatedList(distinctionDisciplineScientifique).subscribe(
	 res => {
	       this.initDuplicateDistinctionDisciplineScientifique(res);
	       this.selectedDistinctionDisciplineScientifique = res;
	       this.selectedDistinctionDisciplineScientifique.id = null;
            this.createDistinctionDisciplineScientifiqueDialog = true;

});

	}

	initDuplicateDistinctionDisciplineScientifique(res: DistinctionDisciplineScientifiqueVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.distinctionDisciplineScientifiques.map(e => {
    return {
            'Distinction': e.distinctionVo?.id ,
            'Discipline scientifique': e.disciplineScientifiqueVo?.libelleEng ,
     }
      });

      this.criteriaData = [{
        'Distinction': this.searchDistinctionDisciplineScientifique.distinctionVo?.id ? this.searchDistinctionDisciplineScientifique.distinctionVo?.id : environment.emptyForExport ,
        'Discipline scientifique': this.searchDistinctionDisciplineScientifique.disciplineScientifiqueVo?.libelleEng ? this.searchDistinctionDisciplineScientifique.disciplineScientifiqueVo?.libelleEng : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get distinctionDisciplineScientifiques(): Array<DistinctionDisciplineScientifiqueVo> {
           return this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiques;
       }
    set distinctionDisciplineScientifiques(value: Array<DistinctionDisciplineScientifiqueVo>) {
        this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiques = value;
       }

    get distinctionDisciplineScientifiqueSelections(): Array<DistinctionDisciplineScientifiqueVo> {
           return this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiqueSelections;
       }
    set distinctionDisciplineScientifiqueSelections(value: Array<DistinctionDisciplineScientifiqueVo>) {
        this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiqueSelections = value;
       }
   
     


    get selectedDistinctionDisciplineScientifique():DistinctionDisciplineScientifiqueVo {
           return this.distinctionDisciplineScientifiqueService.selectedDistinctionDisciplineScientifique;
       }
    set selectedDistinctionDisciplineScientifique(value: DistinctionDisciplineScientifiqueVo) {
        this.distinctionDisciplineScientifiqueService.selectedDistinctionDisciplineScientifique = value;
       }
    
    get createDistinctionDisciplineScientifiqueDialog():boolean {
           return this.distinctionDisciplineScientifiqueService.createDistinctionDisciplineScientifiqueDialog;
       }
    set createDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this.distinctionDisciplineScientifiqueService.createDistinctionDisciplineScientifiqueDialog= value;
       }
    
    get editDistinctionDisciplineScientifiqueDialog():boolean {
           return this.distinctionDisciplineScientifiqueService.editDistinctionDisciplineScientifiqueDialog;
       }
    set editDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this.distinctionDisciplineScientifiqueService.editDistinctionDisciplineScientifiqueDialog= value;
       }
    get viewDistinctionDisciplineScientifiqueDialog():boolean {
           return this.distinctionDisciplineScientifiqueService.viewDistinctionDisciplineScientifiqueDialog;
       }
    set viewDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this.distinctionDisciplineScientifiqueService.viewDistinctionDisciplineScientifiqueDialog = value;
       }
       
     get searchDistinctionDisciplineScientifique(): DistinctionDisciplineScientifiqueVo {
        return this.distinctionDisciplineScientifiqueService.searchDistinctionDisciplineScientifique;
       }
    set searchDistinctionDisciplineScientifique(value: DistinctionDisciplineScientifiqueVo) {
        this.distinctionDisciplineScientifiqueService.searchDistinctionDisciplineScientifique = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
