import {Component, OnInit} from '@angular/core';
import {IdentifiantAuteurExpertService} from '../../../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../../../controller/model/IdentifiantAuteurExpert.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {IdentifiantRechercheVo} from '../../../../../controller/model/IdentifiantRecherche.model';
import {IdentifiantRechercheService} from '../../../../../controller/service/IdentifiantRecherche.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';

@Component({
  selector: 'app-identifiant-auteur-expert-edit-chercheur',
  templateUrl: './identifiant-auteur-expert-edit-chercheur.component.html',
  styleUrls: ['./identifiant-auteur-expert-edit-chercheur.component.css']
})
export class IdentifiantAuteurExpertEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private identifiantAuteurExpertService: IdentifiantAuteurExpertService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private identifiantRechercheService: IdentifiantRechercheService
 ,       private chercheurService: ChercheurService
) {
}

// methods
ngOnInit(): void {
    this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
    this.identifiantRechercheService.findAll().subscribe((data) => this.identifiantRecherches = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.identifiantAuteurExpertService.edit().subscribe(identifiantAuteurExpert=>{
    const myIndex = this.identifiantAuteurExperts.findIndex(e => e.id === this.selectedIdentifiantAuteurExpert.id);
    this.identifiantAuteurExperts[myIndex] = this.selectedIdentifiantAuteurExpert;
    this.editIdentifiantAuteurExpertDialog = false;
    this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();


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
              public async openCreateidentifiantRecherche(identifiantRecherche: string) {
                      const isPermistted = await this.roleService.isPermitted('IdentifiantRecherche', 'add');
                       if(isPermistted){
         this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
        this.createIdentifiantRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editIdentifiantAuteurExpertDialog  = false;
}

// getters and setters

get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
    return this.identifiantAuteurExpertService.identifiantAuteurExperts;
       }
set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExperts = value;
       }

 get selectedIdentifiantAuteurExpert(): IdentifiantAuteurExpertVo {
           return this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert;
       }
    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert = value;
       }

   get editIdentifiantAuteurExpertDialog(): boolean {
           return this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog;

       }
    set editIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog = value;
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
       get selectedIdentifiantRecherche(): IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
      set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }
       get identifiantRecherches(): Array<IdentifiantRechercheVo> {
           return this.identifiantRechercheService.identifiantRecherches;
       }
       set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       }
       get createIdentifiantRechercheDialog(): boolean {
           return this.identifiantRechercheService.createIdentifiantRechercheDialog;
       }
      set createIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.createIdentifiantRechercheDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
