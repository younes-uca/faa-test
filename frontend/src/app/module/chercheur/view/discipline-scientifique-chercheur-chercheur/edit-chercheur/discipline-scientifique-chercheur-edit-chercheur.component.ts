import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueChercheurService} from '../../../../../controller/service/DisciplineScientifiqueChercheur.service';
import {DisciplineScientifiqueChercheurVo} from '../../../../../controller/model/DisciplineScientifiqueChercheur.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-discipline-scientifique-chercheur-edit-chercheur',
  templateUrl: './discipline-scientifique-chercheur-edit-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-chercheur-edit-chercheur.component.css']
})
export class DisciplineScientifiqueChercheurEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueChercheurService: DisciplineScientifiqueChercheurService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private disciplineScientifiqueService: DisciplineScientifiqueService
 ,       private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
 ,       private chercheurService: ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
    this.disciplineScientifiqueService.findAll().subscribe((data) => this.disciplineScientifiques = data);
    this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();
    this.disciplineScientifiqueErcService.findAll().subscribe((data) => this.disciplineScientifiqueErcs = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.disciplineScientifiqueChercheurService.edit().subscribe(disciplineScientifiqueChercheur=>{
    const myIndex = this.disciplineScientifiqueChercheurs.findIndex(e => e.id === this.selectedDisciplineScientifiqueChercheur.id);
    this.disciplineScientifiqueChercheurs[myIndex] = this.selectedDisciplineScientifiqueChercheur;
    this.editDisciplineScientifiqueChercheurDialog = false;
    this.selectedDisciplineScientifiqueChercheur = new DisciplineScientifiqueChercheurVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatedisciplineScientifiqueErc(disciplineScientifiqueErc: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErc', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();
        this.createDisciplineScientifiqueErcDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatedisciplineScientifique(disciplineScientifique: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
        this.createDisciplineScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatechercheur(chercheur: string) {
                      const isPermistted = await this.roleService.isPermitted('Chercheur', 'add');
                       if(isPermistted){
         this.selectedChercheur = new ChercheurVo();
        this.createChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editDisciplineScientifiqueChercheurDialog  = false;
}

// getters and setters

get disciplineScientifiqueChercheurs(): Array<DisciplineScientifiqueChercheurVo> {
    return this.disciplineScientifiqueChercheurService.disciplineScientifiqueChercheurs;
       }
set disciplineScientifiqueChercheurs(value: Array<DisciplineScientifiqueChercheurVo>) {
        this.disciplineScientifiqueChercheurService.disciplineScientifiqueChercheurs = value;
       }

 get selectedDisciplineScientifiqueChercheur(): DisciplineScientifiqueChercheurVo {
           return this.disciplineScientifiqueChercheurService.selectedDisciplineScientifiqueChercheur;
       }
    set selectedDisciplineScientifiqueChercheur(value: DisciplineScientifiqueChercheurVo) {
        this.disciplineScientifiqueChercheurService.selectedDisciplineScientifiqueChercheur = value;
       }

   get editDisciplineScientifiqueChercheurDialog(): boolean {
           return this.disciplineScientifiqueChercheurService.editDisciplineScientifiqueChercheurDialog;

       }
    set editDisciplineScientifiqueChercheurDialog(value: boolean) {
        this.disciplineScientifiqueChercheurService.editDisciplineScientifiqueChercheurDialog = value;
       }

       get selectedDisciplineScientifiqueErc(): DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
      set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }
       get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
       set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }
       get createDisciplineScientifiqueErcDialog(): boolean {
           return this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog;
       }
      set createDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog= value;
       }
       get selectedDisciplineScientifique(): DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
      set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }
       get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueService.disciplineScientifiques;
       }
       set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       }
       get createDisciplineScientifiqueDialog(): boolean {
           return this.disciplineScientifiqueService.createDisciplineScientifiqueDialog;
       }
      set createDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.createDisciplineScientifiqueDialog= value;
       }
       get selectedChercheur(): ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
      set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }
       get chercheurs(): Array<ChercheurVo> {
           return this.chercheurService.chercheurs;
       }
       set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       }
       get createChercheurDialog(): boolean {
           return this.chercheurService.createChercheurDialog;
       }
      set createChercheurDialog(value: boolean) {
        this.chercheurService.createChercheurDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
