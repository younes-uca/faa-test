import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueErcParentService} from '../../../../../controller/service/DisciplineScientifiqueErcParent.service';
import {DisciplineScientifiqueErcParentVo} from '../../../../../controller/model/DisciplineScientifiqueErcParent.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-discipline-scientifique-erc-parent-view-admin',
  templateUrl: './discipline-scientifique-erc-parent-view-admin.component.html',
  styleUrls: ['./discipline-scientifique-erc-parent-view-admin.component.css']
})
export class DisciplineScientifiqueErcParentViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcParentService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private chercheurService :ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

hideViewDialog(){
    this.viewDisciplineScientifiqueErcParentDialog  = false;
}

// getters and setters

get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcParentVo> {
    return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents;
       }
set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcParentVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents = value;
       }

 get selectedDisciplineScientifiqueErcParent():DisciplineScientifiqueErcParentVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent;
       }
    set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent = value;
       }

   get viewDisciplineScientifiqueErcParentDialog():boolean {
           return this.disciplineScientifiqueErcParentService.viewDisciplineScientifiqueErcParentDialog;

       }
    set viewDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.viewDisciplineScientifiqueErcParentDialog= value;
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
