import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueErcParentService} from '../../../../../controller/service/DisciplineScientifiqueErcParent.service';
import {DisciplineScientifiqueErcParentVo} from '../../../../../controller/model/DisciplineScientifiqueErcParent.model';
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
  selector: 'app-discipline-scientifique-erc-parent-edit-admin',
  templateUrl: './discipline-scientifique-erc-parent-edit-admin.component.html',
  styleUrls: ['./discipline-scientifique-erc-parent-edit-admin.component.css']
})
export class DisciplineScientifiqueErcParentEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcParentService
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
            this.selectedDisciplineScientifiqueErcParent.dateArchivage = DateUtils.toDate(this.selectedDisciplineScientifiqueErcParent.dateArchivage);
            this.selectedDisciplineScientifiqueErcParent.dateCreation = DateUtils.toDate(this.selectedDisciplineScientifiqueErcParent.dateCreation);
    this.disciplineScientifiqueErcParentService.edit().subscribe(disciplineScientifiqueErcParent=>{
    const myIndex = this.disciplineScientifiqueErcParents.findIndex(e => e.id === this.selectedDisciplineScientifiqueErcParent.id);
    this.disciplineScientifiqueErcParents[myIndex] = this.selectedDisciplineScientifiqueErcParent;
    this.editDisciplineScientifiqueErcParentDialog = false;
    this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();


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
    this.editDisciplineScientifiqueErcParentDialog  = false;
}

// getters and setters

get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcParentVo> {
    return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents;
       }
set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcParentVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents = value;
       }

 get selectedDisciplineScientifiqueErcParent(): DisciplineScientifiqueErcParentVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent;
       }
    set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent = value;
       }

   get editDisciplineScientifiqueErcParentDialog(): boolean {
           return this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcParentDialog;

       }
    set editDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.editDisciplineScientifiqueErcParentDialog = value;
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
