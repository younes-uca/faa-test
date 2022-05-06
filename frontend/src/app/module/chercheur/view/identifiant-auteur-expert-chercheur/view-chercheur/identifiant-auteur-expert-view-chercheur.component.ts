import {Component, OnInit} from '@angular/core';
import {IdentifiantAuteurExpertService} from '../../../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../../../controller/model/IdentifiantAuteurExpert.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {IdentifiantRechercheVo} from '../../../../../controller/model/IdentifiantRecherche.model';
import {IdentifiantRechercheService} from '../../../../../controller/service/IdentifiantRecherche.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-identifiant-auteur-expert-view-chercheur',
  templateUrl: './identifiant-auteur-expert-view-chercheur.component.html',
  styleUrls: ['./identifiant-auteur-expert-view-chercheur.component.css']
})
export class IdentifiantAuteurExpertViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private identifiantAuteurExpertService: IdentifiantAuteurExpertService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private identifiantRechercheService :IdentifiantRechercheService
    ,private chercheurService :ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
    this.identifiantRechercheService.findAll().subscribe((data) => this.identifiantRecherches = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

hideViewDialog(){
    this.viewIdentifiantAuteurExpertDialog  = false;
}

// getters and setters

get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
    return this.identifiantAuteurExpertService.identifiantAuteurExperts;
       }
set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExperts = value;
       }

 get selectedIdentifiantAuteurExpert():IdentifiantAuteurExpertVo {
           return this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert;
       }
    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert = value;
       }

   get viewIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog;

       }
    set viewIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog= value;
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
       get selectedIdentifiantRecherche():IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
      set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }
       get identifiantRecherches():Array<IdentifiantRechercheVo> {
           return this.identifiantRechercheService.identifiantRecherches;
       }
       set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       }
       get editIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.editIdentifiantRechercheDialog;
       }
      set editIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.editIdentifiantRechercheDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
