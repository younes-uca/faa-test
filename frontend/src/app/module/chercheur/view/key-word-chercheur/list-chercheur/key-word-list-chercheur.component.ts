import {Component, OnInit} from '@angular/core';
import {KeyWordService} from '../../../../../controller/service/KeyWord.service';
import {KeyWordVo} from '../../../../../controller/model/KeyWord.model';
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
  selector: 'app-key-word-list-chercheur',
  templateUrl: './key-word-list-chercheur.component.html',
  styleUrls: ['./key-word-list-chercheur.component.css']
})
export class KeyWordListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'KeyWord';


    constructor(private datePipe: DatePipe, private keyWordService: KeyWordService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadKeyWords();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadKeyWords(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('KeyWord', 'list');
        isPermistted ? this.keyWordService.findAll().subscribe(keyWords => this.keyWords = keyWords,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.keyWordService.findByCriteria(this.searchKeyWord).subscribe(keyWords=>{
            
            this.keyWords = keyWords;
           // this.searchKeyWord = new KeyWordVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelleFr', header: 'Libelle fr'},
                            {field: 'libelleEng', header: 'Libelle eng'},
                            {field: 'code', header: 'Code'},
        ];
    }
    
    public async editKeyWord(keyWord:KeyWordVo){
        const isPermistted = await this.roleService.isPermitted('KeyWord', 'edit');
         if(isPermistted){
          this.keyWordService.findByIdWithAssociatedList(keyWord).subscribe(res => {
           this.selectedKeyWord = res;
            this.editKeyWordDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewKeyWord(keyWord:KeyWordVo){
        const isPermistted = await this.roleService.isPermitted('KeyWord', 'view');
        if(isPermistted){
           this.keyWordService.findByIdWithAssociatedList(keyWord).subscribe(res => {
           this.selectedKeyWord = res;
            this.viewKeyWordDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateKeyWord(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedKeyWord = new KeyWordVo();
            this.createKeyWordDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteKeyWord(keyWord:KeyWordVo){
       const isPermistted = await this.roleService.isPermitted('KeyWord', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Key word) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.keyWordService.delete(keyWord).subscribe(status=>{
                          if(status > 0){
                          const position = this.keyWords.indexOf(keyWord);
                          position > -1 ? this.keyWords.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Key word Supprimé',
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


public async duplicateKeyWord(keyWord: KeyWordVo) {

     this.keyWordService.findByIdWithAssociatedList(keyWord).subscribe(
	 res => {
	       this.initDuplicateKeyWord(res);
	       this.selectedKeyWord = res;
	       this.selectedKeyWord.id = null;
            this.createKeyWordDialog = true;

});

	}

	initDuplicateKeyWord(res: KeyWordVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.keyWords.map(e => {
    return {
                    'Libelle fr': e.libelleFr ,
                    'Libelle eng': e.libelleEng ,
                    'Code': e.code ,
     }
      });

      this.criteriaData = [{
            'Libelle fr': this.searchKeyWord.libelleFr ? this.searchKeyWord.libelleFr : environment.emptyForExport ,
            'Libelle eng': this.searchKeyWord.libelleEng ? this.searchKeyWord.libelleEng : environment.emptyForExport ,
            'Code': this.searchKeyWord.code ? this.searchKeyWord.code : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get keyWords(): Array<KeyWordVo> {
           return this.keyWordService.keyWords;
       }
    set keyWords(value: Array<KeyWordVo>) {
        this.keyWordService.keyWords = value;
       }

    get keyWordSelections(): Array<KeyWordVo> {
           return this.keyWordService.keyWordSelections;
       }
    set keyWordSelections(value: Array<KeyWordVo>) {
        this.keyWordService.keyWordSelections = value;
       }
   
     


    get selectedKeyWord():KeyWordVo {
           return this.keyWordService.selectedKeyWord;
       }
    set selectedKeyWord(value: KeyWordVo) {
        this.keyWordService.selectedKeyWord = value;
       }
    
    get createKeyWordDialog():boolean {
           return this.keyWordService.createKeyWordDialog;
       }
    set createKeyWordDialog(value: boolean) {
        this.keyWordService.createKeyWordDialog= value;
       }
    
    get editKeyWordDialog():boolean {
           return this.keyWordService.editKeyWordDialog;
       }
    set editKeyWordDialog(value: boolean) {
        this.keyWordService.editKeyWordDialog= value;
       }
    get viewKeyWordDialog():boolean {
           return this.keyWordService.viewKeyWordDialog;
       }
    set viewKeyWordDialog(value: boolean) {
        this.keyWordService.viewKeyWordDialog = value;
       }
       
     get searchKeyWord(): KeyWordVo {
        return this.keyWordService.searchKeyWord;
       }
    set searchKeyWord(value: KeyWordVo) {
        this.keyWordService.searchKeyWord = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
