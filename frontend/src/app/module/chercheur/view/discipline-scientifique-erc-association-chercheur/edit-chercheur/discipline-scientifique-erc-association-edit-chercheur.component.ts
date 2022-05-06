import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueErcAssociationService} from '../../../../../controller/service/DisciplineScientifiqueErcAssociation.service';
import {DisciplineScientifiqueErcAssociationVo} from '../../../../../controller/model/DisciplineScientifiqueErcAssociation.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
import {SemanticRelationshipService} from '../../../../../controller/service/SemanticRelationship.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';

@Component({
  selector: 'app-discipline-scientifique-erc-association-edit-chercheur',
  templateUrl: './discipline-scientifique-erc-association-edit-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-association-edit-chercheur.component.css']
})
export class DisciplineScientifiqueErcAssociationEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private disciplineScientifiqueErcAssociationService: DisciplineScientifiqueErcAssociationService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private disciplineScientifiqueService: DisciplineScientifiqueService
 ,       private semanticRelationshipService: SemanticRelationshipService
 ,       private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
) {
}

// methods
ngOnInit(): void {
    this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();
    this.disciplineScientifiqueErcService.findAll().subscribe((data) => this.disciplineScientifiqueErcs = data);
    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
    this.disciplineScientifiqueService.findAll().subscribe((data) => this.disciplineScientifiques = data);
    this.selectedSemanticRelationship = new SemanticRelationshipVo();
    this.semanticRelationshipService.findAll().subscribe((data) => this.semanticRelationships = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.disciplineScientifiqueErcAssociationService.edit().subscribe(disciplineScientifiqueErcAssociation=>{
    const myIndex = this.disciplineScientifiqueErcAssociations.findIndex(e => e.id === this.selectedDisciplineScientifiqueErcAssociation.id);
    this.disciplineScientifiqueErcAssociations[myIndex] = this.selectedDisciplineScientifiqueErcAssociation;
    this.editDisciplineScientifiqueErcAssociationDialog = false;
    this.selectedDisciplineScientifiqueErcAssociation = new DisciplineScientifiqueErcAssociationVo();


    }, error => {
        console.log(error);
    });

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
              public async openCreatesemanticRelationship(semanticRelationship: string) {
                      const isPermistted = await this.roleService.isPermitted('SemanticRelationship', 'add');
                       if(isPermistted){
         this.selectedSemanticRelationship = new SemanticRelationshipVo();
        this.createSemanticRelationshipDialog = true;
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
// methods

hideEditDialog(){
    this.editDisciplineScientifiqueErcAssociationDialog  = false;
}

// getters and setters

get disciplineScientifiqueErcAssociations(): Array<DisciplineScientifiqueErcAssociationVo> {
    return this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociations;
       }
set disciplineScientifiqueErcAssociations(value: Array<DisciplineScientifiqueErcAssociationVo>) {
        this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociations = value;
       }

 get selectedDisciplineScientifiqueErcAssociation(): DisciplineScientifiqueErcAssociationVo {
           return this.disciplineScientifiqueErcAssociationService.selectedDisciplineScientifiqueErcAssociation;
       }
    set selectedDisciplineScientifiqueErcAssociation(value: DisciplineScientifiqueErcAssociationVo) {
        this.disciplineScientifiqueErcAssociationService.selectedDisciplineScientifiqueErcAssociation = value;
       }

   get editDisciplineScientifiqueErcAssociationDialog(): boolean {
           return this.disciplineScientifiqueErcAssociationService.editDisciplineScientifiqueErcAssociationDialog;

       }
    set editDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this.disciplineScientifiqueErcAssociationService.editDisciplineScientifiqueErcAssociationDialog = value;
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
       get selectedSemanticRelationship(): SemanticRelationshipVo {
           return this.semanticRelationshipService.selectedSemanticRelationship;
       }
      set selectedSemanticRelationship(value: SemanticRelationshipVo) {
        this.semanticRelationshipService.selectedSemanticRelationship = value;
       }
       get semanticRelationships(): Array<SemanticRelationshipVo> {
           return this.semanticRelationshipService.semanticRelationships;
       }
       set semanticRelationships(value: Array<SemanticRelationshipVo>) {
        this.semanticRelationshipService.semanticRelationships = value;
       }
       get createSemanticRelationshipDialog(): boolean {
           return this.semanticRelationshipService.createSemanticRelationshipDialog;
       }
      set createSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.createSemanticRelationshipDialog= value;
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

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
