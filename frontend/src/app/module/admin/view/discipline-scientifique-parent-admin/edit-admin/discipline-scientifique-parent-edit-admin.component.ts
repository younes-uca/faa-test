import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueParentService} from '../../../../../controller/service/DisciplineScientifiqueParent.service';
import {DisciplineScientifiqueParentVo} from '../../../../../controller/model/DisciplineScientifiqueParent.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-discipline-scientifique-parent-edit-admin',
  templateUrl: './discipline-scientifique-parent-edit-admin.component.html',
  styleUrls: ['./discipline-scientifique-parent-edit-admin.component.css']
})
export class DisciplineScientifiqueParentEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueParentService: DisciplineScientifiqueParentService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private chercheurService: ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedDisciplineScientifiqueParent.dateArchivage = DateUtils.toDate(this.selectedDisciplineScientifiqueParent.dateArchivage);
            this.selectedDisciplineScientifiqueParent.dateCreation = DateUtils.toDate(this.selectedDisciplineScientifiqueParent.dateCreation);
    this.disciplineScientifiqueParentService.edit().subscribe(disciplineScientifiqueParent=>{
    const myIndex = this.disciplineScientifiqueParents.findIndex(e => e.id === this.selectedDisciplineScientifiqueParent.id);
    this.disciplineScientifiqueParents[myIndex] = this.selectedDisciplineScientifiqueParent;
    this.editDisciplineScientifiqueParentDialog = false;
    this.selectedDisciplineScientifiqueParent = new DisciplineScientifiqueParentVo();


    }, error => {
        console.log(error);
    });

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
    this.editDisciplineScientifiqueParentDialog  = false;
}

// getters and setters

get disciplineScientifiqueParents(): Array<DisciplineScientifiqueParentVo> {
    return this.disciplineScientifiqueParentService.disciplineScientifiqueParents;
       }
set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueParentVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiqueParents = value;
       }

 get selectedDisciplineScientifiqueParent(): DisciplineScientifiqueParentVo {
           return this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent;
       }
    set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueParentVo) {
        this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent = value;
       }

   get editDisciplineScientifiqueParentDialog(): boolean {
           return this.disciplineScientifiqueParentService.editDisciplineScientifiqueParentDialog;

       }
    set editDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.editDisciplineScientifiqueParentDialog = value;
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
