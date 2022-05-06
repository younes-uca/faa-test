import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueChercheurService} from '../../../../../controller/service/DisciplineScientifiqueChercheur.service';
import {DisciplineScientifiqueChercheurVo} from '../../../../../controller/model/DisciplineScientifiqueChercheur.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-discipline-scientifique-chercheur-view-admin',
  templateUrl: './discipline-scientifique-chercheur-view-admin.component.html',
  styleUrls: ['./discipline-scientifique-chercheur-view-admin.component.css']
})
export class DisciplineScientifiqueChercheurViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueChercheurService: DisciplineScientifiqueChercheurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private disciplineScientifiqueService :DisciplineScientifiqueService
    ,private disciplineScientifiqueErcService :DisciplineScientifiqueErcService
    ,private chercheurService :ChercheurService
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

hideViewDialog(){
    this.viewDisciplineScientifiqueChercheurDialog  = false;
}

// getters and setters

get disciplineScientifiqueChercheurs(): Array<DisciplineScientifiqueChercheurVo> {
    return this.disciplineScientifiqueChercheurService.disciplineScientifiqueChercheurs;
       }
set disciplineScientifiqueChercheurs(value: Array<DisciplineScientifiqueChercheurVo>) {
        this.disciplineScientifiqueChercheurService.disciplineScientifiqueChercheurs = value;
       }

 get selectedDisciplineScientifiqueChercheur():DisciplineScientifiqueChercheurVo {
           return this.disciplineScientifiqueChercheurService.selectedDisciplineScientifiqueChercheur;
       }
    set selectedDisciplineScientifiqueChercheur(value: DisciplineScientifiqueChercheurVo) {
        this.disciplineScientifiqueChercheurService.selectedDisciplineScientifiqueChercheur = value;
       }

   get viewDisciplineScientifiqueChercheurDialog():boolean {
           return this.disciplineScientifiqueChercheurService.viewDisciplineScientifiqueChercheurDialog;

       }
    set viewDisciplineScientifiqueChercheurDialog(value: boolean) {
        this.disciplineScientifiqueChercheurService.viewDisciplineScientifiqueChercheurDialog= value;
       }

       get selectedDisciplineScientifiqueErc():DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
      set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }
       get disciplineScientifiqueErcs():Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
       set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }
       get editDisciplineScientifiqueErcDialog():boolean {
           return this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog;
       }
      set editDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog= value;
       }
       get selectedDisciplineScientifique():DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
      set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }
       get disciplineScientifiques():Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueService.disciplineScientifiques;
       }
       set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       }
       get editDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.editDisciplineScientifiqueDialog;
       }
      set editDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.editDisciplineScientifiqueDialog= value;
       }
       get selectedChercheur():ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
      set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }
       get chercheurs():Array<ChercheurVo> {
           return this.chercheurService.chercheurs;
       }
       set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       }
       get editChercheurDialog():boolean {
           return this.chercheurService.editChercheurDialog;
       }
      set editChercheurDialog(value: boolean) {
        this.chercheurService.editChercheurDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
