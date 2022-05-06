import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueErcParentVo} from '../../../../../controller/model/DisciplineScientifiqueErcParent.model';
import {DisciplineScientifiqueErcParentService} from '../../../../../controller/service/DisciplineScientifiqueErcParent.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-discipline-scientifique-erc-edit-admin',
  templateUrl: './discipline-scientifique-erc-edit-admin.component.html',
  styleUrls: ['./discipline-scientifique-erc-edit-admin.component.css']
})
export class DisciplineScientifiqueErcEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcParentService
 ,       private chercheurService: ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();
    this.disciplineScientifiqueErcParentService.findAll().subscribe((data) => this.disciplineScientifiqueErcParents = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedDisciplineScientifiqueErc.dateArchivage = DateUtils.toDate(this.selectedDisciplineScientifiqueErc.dateArchivage);
            this.selectedDisciplineScientifiqueErc.dateCreation = DateUtils.toDate(this.selectedDisciplineScientifiqueErc.dateCreation);
    this.disciplineScientifiqueErcService.edit().subscribe(disciplineScientifiqueErc=>{
    const myIndex = this.disciplineScientifiqueErcs.findIndex(e => e.id === this.selectedDisciplineScientifiqueErc.id);
    this.disciplineScientifiqueErcs[myIndex] = this.selectedDisciplineScientifiqueErc;
    this.editDisciplineScientifiqueErcDialog = false;
    this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatedisciplineScientifiqueErcParent(disciplineScientifiqueErcParent: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcParent', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();
        this.createDisciplineScientifiqueErcParentDialog = true;
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
    this.editDisciplineScientifiqueErcDialog  = false;
}

// getters and setters

get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
    return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }

 get selectedDisciplineScientifiqueErc(): DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
    set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }

   get editDisciplineScientifiqueErcDialog(): boolean {
           return this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog;

       }
    set editDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog = value;
       }

       get selectedDisciplineScientifiqueErcParent(): DisciplineScientifiqueErcParentVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent;
       }
      set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent = value;
       }
       get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcParentVo> {
           return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents;
       }
       set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcParentVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents = value;
       }
       get createDisciplineScientifiqueErcParentDialog(): boolean {
           return this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcParentDialog;
       }
      set createDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcParentDialog= value;
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
