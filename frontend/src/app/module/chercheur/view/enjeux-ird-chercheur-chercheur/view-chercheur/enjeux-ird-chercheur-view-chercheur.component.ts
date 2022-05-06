import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdChercheurService} from '../../../../../controller/service/EnjeuxIrdChercheur.service';
import {EnjeuxIrdChercheurVo} from '../../../../../controller/model/EnjeuxIrdChercheur.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {EnjeuxIrdVo} from '../../../../../controller/model/EnjeuxIrd.model';
import {EnjeuxIrdService} from '../../../../../controller/service/EnjeuxIrd.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-enjeux-ird-chercheur-view-chercheur',
  templateUrl: './enjeux-ird-chercheur-view-chercheur.component.html',
  styleUrls: ['./enjeux-ird-chercheur-view-chercheur.component.css']
})
export class EnjeuxIrdChercheurViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private enjeuxIrdChercheurService: EnjeuxIrdChercheurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private enjeuxIrdService :EnjeuxIrdService
    ,private chercheurService :ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedEnjeuxIrd = new EnjeuxIrdVo();
    this.enjeuxIrdService.findAll().subscribe((data) => this.enjeuxIrds = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

hideViewDialog(){
    this.viewEnjeuxIrdChercheurDialog  = false;
}

// getters and setters

get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
    return this.enjeuxIrdChercheurService.enjeuxIrdChercheurs;
       }
set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurs = value;
       }

 get selectedEnjeuxIrdChercheur():EnjeuxIrdChercheurVo {
           return this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur;
       }
    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur = value;
       }

   get viewEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog;

       }
    set viewEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.viewEnjeuxIrdChercheurDialog= value;
       }

       get selectedEnjeuxIrd():EnjeuxIrdVo {
           return this.enjeuxIrdService.selectedEnjeuxIrd;
       }
      set selectedEnjeuxIrd(value: EnjeuxIrdVo) {
        this.enjeuxIrdService.selectedEnjeuxIrd = value;
       }
       get enjeuxIrds():Array<EnjeuxIrdVo> {
           return this.enjeuxIrdService.enjeuxIrds;
       }
       set enjeuxIrds(value: Array<EnjeuxIrdVo>) {
        this.enjeuxIrdService.enjeuxIrds = value;
       }
       get editEnjeuxIrdDialog():boolean {
           return this.enjeuxIrdService.editEnjeuxIrdDialog;
       }
      set editEnjeuxIrdDialog(value: boolean) {
        this.enjeuxIrdService.editEnjeuxIrdDialog= value;
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
