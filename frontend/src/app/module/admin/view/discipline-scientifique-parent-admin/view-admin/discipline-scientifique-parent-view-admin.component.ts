import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueParentService} from '../../../../../controller/service/DisciplineScientifiqueParent.service';
import {DisciplineScientifiqueParentVo} from '../../../../../controller/model/DisciplineScientifiqueParent.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-discipline-scientifique-parent-view-admin',
  templateUrl: './discipline-scientifique-parent-view-admin.component.html',
  styleUrls: ['./discipline-scientifique-parent-view-admin.component.css']
})
export class DisciplineScientifiqueParentViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueParentService: DisciplineScientifiqueParentService
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
    this.viewDisciplineScientifiqueParentDialog  = false;
}

// getters and setters

get disciplineScientifiqueParents(): Array<DisciplineScientifiqueParentVo> {
    return this.disciplineScientifiqueParentService.disciplineScientifiqueParents;
       }
set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueParentVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiqueParents = value;
       }

 get selectedDisciplineScientifiqueParent():DisciplineScientifiqueParentVo {
           return this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent;
       }
    set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueParentVo) {
        this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent = value;
       }

   get viewDisciplineScientifiqueParentDialog():boolean {
           return this.disciplineScientifiqueParentService.viewDisciplineScientifiqueParentDialog;

       }
    set viewDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.viewDisciplineScientifiqueParentDialog= value;
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
