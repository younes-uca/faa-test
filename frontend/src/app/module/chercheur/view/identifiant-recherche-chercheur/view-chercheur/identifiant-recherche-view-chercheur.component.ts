import {Component, OnInit} from '@angular/core';
import {IdentifiantRechercheService} from '../../../../../controller/service/IdentifiantRecherche.service';
import {IdentifiantRechercheVo} from '../../../../../controller/model/IdentifiantRecherche.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-identifiant-recherche-view-chercheur',
  templateUrl: './identifiant-recherche-view-chercheur.component.html',
  styleUrls: ['./identifiant-recherche-view-chercheur.component.css']
})
export class IdentifiantRechercheViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private identifiantRechercheService: IdentifiantRechercheService
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
    this.viewIdentifiantRechercheDialog  = false;
}

// getters and setters

get identifiantRecherches(): Array<IdentifiantRechercheVo> {
    return this.identifiantRechercheService.identifiantRecherches;
       }
set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       }

 get selectedIdentifiantRecherche():IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
    set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }

   get viewIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.viewIdentifiantRechercheDialog;

       }
    set viewIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.viewIdentifiantRechercheDialog= value;
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
