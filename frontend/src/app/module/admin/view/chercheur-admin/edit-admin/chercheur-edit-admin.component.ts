import {Component, OnInit} from '@angular/core';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {IdentifiantAuteurExpertVo} from '../../../../../controller/model/IdentifiantAuteurExpert.model';
import {IdentifiantAuteurExpertService} from '../../../../../controller/service/IdentifiantAuteurExpert.service';
import {EnjeuxIrdVo} from '../../../../../controller/model/EnjeuxIrd.model';
import {EnjeuxIrdService} from '../../../../../controller/service/EnjeuxIrd.service';
import {EnjeuxIrdChercheurVo} from '../../../../../controller/model/EnjeuxIrdChercheur.model';
import {EnjeuxIrdChercheurService} from '../../../../../controller/service/EnjeuxIrdChercheur.service';
import {DisciplineScientifiqueChercheurVo} from '../../../../../controller/model/DisciplineScientifiqueChercheur.model';
import {DisciplineScientifiqueChercheurService} from '../../../../../controller/service/DisciplineScientifiqueChercheur.service';
import {IdentifiantRechercheVo} from '../../../../../controller/model/IdentifiantRecherche.model';
import {IdentifiantRechercheService} from '../../../../../controller/service/IdentifiantRecherche.service';

@Component({
  selector: 'app-chercheur-edit-admin',
  templateUrl: './chercheur-edit-admin.component.html',
  styleUrls: ['./chercheur-edit-admin.component.css']
})
export class ChercheurEditAdminComponent implements OnInit {

        selectedDisciplineScientifiqueChercheurs: DisciplineScientifiqueChercheurVo = new DisciplineScientifiqueChercheurVo();
        disciplineScientifiqueChercheursListe: Array<DisciplineScientifiqueChercheurVo> = [];

        myDisciplineScientifiques: Array<DisciplineScientifiqueVo> = [];
        myDisciplineScientifiqueErcs: Array<DisciplineScientifiqueErcVo> = [];

        selectedEnjeuxIrdChercheurs: EnjeuxIrdChercheurVo = new EnjeuxIrdChercheurVo();
        enjeuxIrdChercheursListe: Array<EnjeuxIrdChercheurVo> = [];

        myEnjeuxIrds: Array<EnjeuxIrdVo> = [];

        selectedIdentifiantAuteurExperts: IdentifiantAuteurExpertVo = new IdentifiantAuteurExpertVo();
        identifiantAuteurExpertsListe: Array<IdentifiantAuteurExpertVo> = [];

        myIdentifiantRecherches: Array<IdentifiantRechercheVo> = [];


constructor(private datePipe: DatePipe, private chercheurService: ChercheurService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private disciplineScientifiqueService: DisciplineScientifiqueService
 ,       private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
 ,       private identifiantAuteurExpertService: IdentifiantAuteurExpertService
 ,       private enjeuxIrdService: EnjeuxIrdService
 ,       private enjeuxIrdChercheurService: EnjeuxIrdChercheurService
 ,       private disciplineScientifiqueChercheurService: DisciplineScientifiqueChercheurService
 ,       private identifiantRechercheService: IdentifiantRechercheService
) {
}

// methods
ngOnInit(): void {
                this.selectedDisciplineScientifiqueChercheurs.disciplineScientifiqueVo = new DisciplineScientifiqueVo();
                this.disciplineScientifiqueService.findAll().subscribe((data) => this.disciplineScientifiques = data);
                this.selectedDisciplineScientifiqueChercheurs.disciplineScientifiqueErcVo = new DisciplineScientifiqueErcVo();
                this.disciplineScientifiqueErcService.findAll().subscribe((data) => this.disciplineScientifiqueErcs = data);
                this.selectedEnjeuxIrdChercheurs.enjeuxIrdVo = new EnjeuxIrdVo();
                this.enjeuxIrdService.findAll().subscribe((data) => this.enjeuxIrds = data);
                this.selectedIdentifiantAuteurExperts.identifiantRechercheVo = new IdentifiantRechercheVo();
                this.identifiantRechercheService.findAll().subscribe((data) => this.identifiantRecherches = data);
}
        addDisciplineScientifiqueChercheurs() {
        if( this.selectedChercheur.disciplineScientifiqueChercheursVo == null ){
            this.selectedChercheur.disciplineScientifiqueChercheursVo = new Array<DisciplineScientifiqueChercheurVo>();
        }
        this.selectedChercheur.disciplineScientifiqueChercheursVo.push(this.selectedDisciplineScientifiqueChercheurs);
        this.selectedDisciplineScientifiqueChercheurs = new DisciplineScientifiqueChercheurVo();
        }

       deleteDisciplineScientifiqueChercheurs(p: DisciplineScientifiqueChercheurVo) {
        this.selectedChercheur.disciplineScientifiqueChercheursVo.forEach((element, index) => {
            if (element === p) { this.selectedChercheur.disciplineScientifiqueChercheursVo.splice(index, 1); }
        });
    }
        addEnjeuxIrdChercheurs() {
        if( this.selectedChercheur.enjeuxIrdChercheursVo == null ){
            this.selectedChercheur.enjeuxIrdChercheursVo = new Array<EnjeuxIrdChercheurVo>();
        }
        this.selectedChercheur.enjeuxIrdChercheursVo.push(this.selectedEnjeuxIrdChercheurs);
        this.selectedEnjeuxIrdChercheurs = new EnjeuxIrdChercheurVo();
        }

       deleteEnjeuxIrdChercheurs(p: EnjeuxIrdChercheurVo) {
        this.selectedChercheur.enjeuxIrdChercheursVo.forEach((element, index) => {
            if (element === p) { this.selectedChercheur.enjeuxIrdChercheursVo.splice(index, 1); }
        });
    }
        addIdentifiantAuteurExperts() {
        if( this.selectedChercheur.identifiantAuteurExpertsVo == null ){
            this.selectedChercheur.identifiantAuteurExpertsVo = new Array<IdentifiantAuteurExpertVo>();
        }
        this.selectedChercheur.identifiantAuteurExpertsVo.push(this.selectedIdentifiantAuteurExperts);
        this.selectedIdentifiantAuteurExperts = new IdentifiantAuteurExpertVo();
        }

       deleteIdentifiantAuteurExperts(p: IdentifiantAuteurExpertVo) {
        this.selectedChercheur.identifiantAuteurExpertsVo.forEach((element, index) => {
            if (element === p) { this.selectedChercheur.identifiantAuteurExpertsVo.splice(index, 1); }
        });
    }

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedChercheur.createdAt = DateUtils.toDate(this.selectedChercheur.createdAt);
            this.selectedChercheur.updatedAt = DateUtils.toDate(this.selectedChercheur.updatedAt);
    this.chercheurService.edit().subscribe(chercheur=>{
    const myIndex = this.chercheurs.findIndex(e => e.id === this.selectedChercheur.id);
    this.chercheurs[myIndex] = this.selectedChercheur;
    this.editChercheurDialog = false;
    this.selectedChercheur = new ChercheurVo();


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
              public async openCreatedisciplineScientifiqueErc(disciplineScientifiqueErc: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErc', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();
        this.createDisciplineScientifiqueErcDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatedisciplineScientifique(disciplineScientifique: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifique', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
        this.createDisciplineScientifiqueDialog = true;
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
    this.editChercheurDialog  = false;
}

// getters and setters

get chercheurs(): Array<ChercheurVo> {
    return this.chercheurService.chercheurs;
       }
set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       }

 get selectedChercheur(): ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
    set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }

   get editChercheurDialog(): boolean {
           return this.chercheurService.editChercheurDialog;

       }
    set editChercheurDialog(value: boolean) {
        this.chercheurService.editChercheurDialog = value;
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
       get selectedDisciplineScientifiqueErc(): DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
      set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }
       get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
       set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }
       get createDisciplineScientifiqueErcDialog(): boolean {
           return this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog;
       }
      set createDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog= value;
       }
       get selectedDisciplineScientifique(): DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
      set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }
       get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueService.disciplineScientifiques;
       }
       set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       }
       get createDisciplineScientifiqueDialog(): boolean {
           return this.disciplineScientifiqueService.createDisciplineScientifiqueDialog;
       }
      set createDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.createDisciplineScientifiqueDialog= value;
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
