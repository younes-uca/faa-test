import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueParentVo} from '../../../../../controller/model/DisciplineScientifiqueParent.model';
import {DisciplineScientifiqueParentService} from '../../../../../controller/service/DisciplineScientifiqueParent.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcAssociationVo} from '../../../../../controller/model/DisciplineScientifiqueErcAssociation.model';
import {DisciplineScientifiqueErcAssociationService} from '../../../../../controller/service/DisciplineScientifiqueErcAssociation.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
import {SemanticRelationshipService} from '../../../../../controller/service/SemanticRelationship.service';

@Component({
  selector: 'app-discipline-scientifique-view-chercheur',
  templateUrl: './discipline-scientifique-view-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-view-chercheur.component.css']
})
export class DisciplineScientifiqueViewChercheurComponent implements OnInit {

        selectedDisciplineScientifiqueErcAssociations: DisciplineScientifiqueErcAssociationVo = new DisciplineScientifiqueErcAssociationVo();
        disciplineScientifiqueErcAssociationsListe: Array<DisciplineScientifiqueErcAssociationVo> = [];

        myDisciplineScientifiqueErcs: Array<DisciplineScientifiqueErcVo> = [];
        mySemanticRelationships: Array<SemanticRelationshipVo> = [];


constructor(private datePipe: DatePipe, private disciplineScientifiqueService: DisciplineScientifiqueService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private disciplineScientifiqueParentService :DisciplineScientifiqueParentService
    ,private disciplineScientifiqueErcService :DisciplineScientifiqueErcService
    ,private disciplineScientifiqueErcAssociationService :DisciplineScientifiqueErcAssociationService
    ,private chercheurService :ChercheurService
    ,private semanticRelationshipService :SemanticRelationshipService
) {
}

// methods
ngOnInit(): void {
                this.selectedDisciplineScientifiqueErcAssociations.disciplineScientifiqueErcVo = new DisciplineScientifiqueErcVo();
                this.disciplineScientifiqueErcService.findAll().subscribe((data) => this.disciplineScientifiqueErcs = data);
                this.selectedDisciplineScientifiqueErcAssociations.semanticRelationshipVo = new SemanticRelationshipVo();
                this.semanticRelationshipService.findAll().subscribe((data) => this.semanticRelationships = data);
    this.selectedDisciplineScientifiqueParent = new DisciplineScientifiqueParentVo();
    this.disciplineScientifiqueParentService.findAll().subscribe((data) => this.disciplineScientifiqueParents = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}

hideViewDialog(){
    this.viewDisciplineScientifiqueDialog  = false;
}

// getters and setters

get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
    return this.disciplineScientifiqueService.disciplineScientifiques;
       }
set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       }

 get selectedDisciplineScientifique():DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }

   get viewDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog;

       }
    set viewDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog= value;
       }

       get selectedDisciplineScientifiqueParent():DisciplineScientifiqueParentVo {
           return this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent;
       }
      set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueParentVo) {
        this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent = value;
       }
       get disciplineScientifiqueParents():Array<DisciplineScientifiqueParentVo> {
           return this.disciplineScientifiqueParentService.disciplineScientifiqueParents;
       }
       set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueParentVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiqueParents = value;
       }
       get editDisciplineScientifiqueParentDialog():boolean {
           return this.disciplineScientifiqueParentService.editDisciplineScientifiqueParentDialog;
       }
      set editDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.editDisciplineScientifiqueParentDialog= value;
       }
       get selectedDisciplineScientifiqueErc():DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
      set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }
       get disciplineScientifiqueErcs():Array<DisciplineScientifiqueErcVo> {
           return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
       set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }
       get editDisciplineScientifiqueErcDialog():boolean {
           return this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog;
       }
      set editDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.editDisciplineScientifiqueErcDialog= value;
       }
       get selectedSemanticRelationship():SemanticRelationshipVo {
           return this.semanticRelationshipService.selectedSemanticRelationship;
       }
      set selectedSemanticRelationship(value: SemanticRelationshipVo) {
        this.semanticRelationshipService.selectedSemanticRelationship = value;
       }
       get semanticRelationships():Array<SemanticRelationshipVo> {
           return this.semanticRelationshipService.semanticRelationships;
       }
       set semanticRelationships(value: Array<SemanticRelationshipVo>) {
        this.semanticRelationshipService.semanticRelationships = value;
       }
       get editSemanticRelationshipDialog():boolean {
           return this.semanticRelationshipService.editSemanticRelationshipDialog;
       }
      set editSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.editSemanticRelationshipDialog= value;
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
