import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueErcParentVo} from '../../../../../controller/model/DisciplineScientifiqueErcParent.model';
import {DisciplineScientifiqueErcParentService} from '../../../../../controller/service/DisciplineScientifiqueErcParent.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-discipline-scientifique-erc-view-chercheur',
  templateUrl: './discipline-scientifique-erc-view-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-view-chercheur.component.css']
})
export class DisciplineScientifiqueErcViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private disciplineScientifiqueErcParentService :DisciplineScientifiqueErcParentService
    ,private chercheurService :ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();
    this.disciplineScientifiqueErcParentService.findAll().subscribe((data) => this.disciplineScientifiqueErcParents = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

hideViewDialog(){
    this.viewDisciplineScientifiqueErcDialog  = false;
}

// getters and setters

get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
    return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }

 get selectedDisciplineScientifiqueErc():DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
    set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }

   get viewDisciplineScientifiqueErcDialog():boolean {
           return this.disciplineScientifiqueErcService.viewDisciplineScientifiqueErcDialog;

       }
    set viewDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.viewDisciplineScientifiqueErcDialog= value;
       }

       get selectedDisciplineScientifiqueErcParent():DisciplineScientifiqueErcParentVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent;
       }
      set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent = value;
       }
       get disciplineScientifiqueErcParents():Array<DisciplineScientifiqueErcParentVo> {
           return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents;
       }
       set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcParentVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents = value;
       }
       get editDisciplineScientifiqueErcParentDialog():boolean {
           return this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcParentDialog;
       }
      set editDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcParentDialog= value;
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
