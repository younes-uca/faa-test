import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdService} from '../../../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdVo} from '../../../../../controller/model/EnjeuxIrd.model';
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
  selector: 'app-enjeux-ird-edit-admin',
  templateUrl: './enjeux-ird-edit-admin.component.html',
  styleUrls: ['./enjeux-ird-edit-admin.component.css']
})
export class EnjeuxIrdEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private enjeuxIrdService: EnjeuxIrdService
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
            this.selectedEnjeuxIrd.dateArchivage = DateUtils.toDate(this.selectedEnjeuxIrd.dateArchivage);
            this.selectedEnjeuxIrd.dateCreation = DateUtils.toDate(this.selectedEnjeuxIrd.dateCreation);
    this.enjeuxIrdService.edit().subscribe(enjeuxIrd=>{
    const myIndex = this.enjeuxIrds.findIndex(e => e.id === this.selectedEnjeuxIrd.id);
    this.enjeuxIrds[myIndex] = this.selectedEnjeuxIrd;
    this.editEnjeuxIrdDialog = false;
    this.selectedEnjeuxIrd = new EnjeuxIrdVo();


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
    this.editEnjeuxIrdDialog  = false;
}

// getters and setters

get enjeuxIrds(): Array<EnjeuxIrdVo> {
    return this.enjeuxIrdService.enjeuxIrds;
       }
set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       }

 get selectedEnjeuxIrd(): EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
    set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }

   get editEnjeuxIrdDialog(): boolean {
           return this.enjeuxIrdService.editEnjeuxIrdDialog;

       }
    set editEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.editEnjeuxIrdDialog = value;
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
