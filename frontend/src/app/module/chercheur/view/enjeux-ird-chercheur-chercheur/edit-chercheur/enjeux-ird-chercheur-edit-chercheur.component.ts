import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdChercheurService} from '../../../../../controller/service/EnjeuxIrdChercheur.service';
import {EnjeuxIrdChercheurVo} from '../../../../../controller/model/EnjeuxIrdChercheur.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {EnjeuxIrdVo} from '../../../../../controller/model/EnjeuxIrd.model';
import {EnjeuxIrdService} from '../../../../../controller/service/EnjeuxIrd.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-enjeux-ird-chercheur-edit-chercheur',
  templateUrl: './enjeux-ird-chercheur-edit-chercheur.component.html',
  styleUrls: ['./enjeux-ird-chercheur-edit-chercheur.component.css']
})
export class EnjeuxIrdChercheurEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private enjeuxIrdChercheurService: EnjeuxIrdChercheurService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private enjeuxIrdService: EnjeuxIrdService
 ,       private chercheurService: ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedEnjeuxIrd = new EnjeuxIrdVo();
    this.enjeuxIrdService.findAll().subscribe((data) => this.enjeuxIrds = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.enjeuxIrdChercheurService.edit().subscribe(enjeuxIrdChercheur=>{
    const myIndex = this.enjeuxIrdChercheurs.findIndex(e => e.id === this.selectedEnjeuxIrdChercheur.id);
    this.enjeuxIrdChercheurs[myIndex] = this.selectedEnjeuxIrdChercheur;
    this.editEnjeuxIrdChercheurDialog = false;
    this.selectedEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreateenjeuxIrd(enjeuxIrd: string) {
                      const isPermistted = await this.roleService.isPermitted('EnjeuxIrd', 'add');
                       if(isPermistted){
         this.selectedEnjeuxIrd = new EnjeuxIrdVo();
        this.createEnjeuxIrdDialog = true;
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
    this.editEnjeuxIrdChercheurDialog  = false;
}

// getters and setters

get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
    return this.enjeuxIrdChercheurService.enjeuxIrdChercheurs;
       }
set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurs = value;
       }

 get selectedEnjeuxIrdChercheur(): EnjeuxIrdChercheurVo {
           return this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur;
       }
    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur = value;
       }

   get editEnjeuxIrdChercheurDialog(): boolean {
           return this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog;

       }
    set editEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.editEnjeuxIrdChercheurDialog = value;
       }

       get selectedEnjeuxIrd(): EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
      set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }
       get enjeuxIrds(): Array<EnjeuxIrdVo> {
           return this.enjeuxIrdService.enjeuxIrds;
       }
       set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       }
       get createEnjeuxIrdDialog(): boolean {
           return this.enjeuxIrdService.createEnjeuxIrdDialog;
       }
      set createEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.createEnjeuxIrdDialog= value;
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
