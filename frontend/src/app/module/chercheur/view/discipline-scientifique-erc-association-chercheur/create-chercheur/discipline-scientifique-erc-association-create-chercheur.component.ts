import {Component, OnInit, Input} from '@angular/core';
import {DisciplineScientifiqueErcAssociationService} from '../../../../../controller/service/DisciplineScientifiqueErcAssociation.service';
import {DisciplineScientifiqueErcAssociationVo} from '../../../../../controller/model/DisciplineScientifiqueErcAssociation.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
import {SemanticRelationshipService} from '../../../../../controller/service/SemanticRelationship.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
@Component({
  selector: 'app-discipline-scientifique-erc-association-create-chercheur',
  templateUrl: './discipline-scientifique-erc-association-create-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-association-create-chercheur.component.css']
})
export class DisciplineScientifiqueErcAssociationCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();


    _validDisciplineScientifiqueErcLibelleFr = true;
    _validDisciplineScientifiqueErcLibelleEng = true;
    _validDisciplineScientifiqueErcCode = true;
    _validDisciplineScientifiqueLibelleFr = true;
    _validDisciplineScientifiqueLibelleEng = true;
    _validDisciplineScientifiqueCode = true;
    _validSemanticRelationshipLibelle = true;
    _validSemanticRelationshipCode = true;



constructor(private datePipe: DatePipe, private disciplineScientifiqueErcAssociationService: DisciplineScientifiqueErcAssociationService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private semanticRelationshipService :SemanticRelationshipService
,       private disciplineScientifiqueErcService :DisciplineScientifiqueErcService
,       private disciplineScientifiqueService :DisciplineScientifiqueService
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




private setValidation(value : boolean){
    }


public save(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.saveWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public saveWithShowOption(showList: boolean){
     this.disciplineScientifiqueErcAssociationService.save().subscribe(disciplineScientifiqueErcAssociation=>{
       this.disciplineScientifiqueErcAssociations.push({...disciplineScientifiqueErcAssociation});
       this.createDisciplineScientifiqueErcAssociationDialog = false;
       this.submitted = false;
       this.selectedDisciplineScientifiqueErcAssociation = new DisciplineScientifiqueErcAssociationVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();

    }








//openPopup
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

hideCreateDialog(){
    this.createDisciplineScientifiqueErcAssociationDialog  = false;
    this.setValidation(true);
}

// getters and setters

get disciplineScientifiqueErcAssociations(): Array<DisciplineScientifiqueErcAssociationVo> {
    return this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociations;
       }
set disciplineScientifiqueErcAssociations(value: Array<DisciplineScientifiqueErcAssociationVo>) {
        this.disciplineScientifiqueErcAssociationService.disciplineScientifiqueErcAssociations = value;
       }

 get selectedDisciplineScientifiqueErcAssociation():DisciplineScientifiqueErcAssociationVo {
           return this.disciplineScientifiqueErcAssociationService.selectedDisciplineScientifiqueErcAssociation;
       }
    set selectedDisciplineScientifiqueErcAssociation(value: DisciplineScientifiqueErcAssociationVo) {
        this.disciplineScientifiqueErcAssociationService.selectedDisciplineScientifiqueErcAssociation = value;
       }

   get createDisciplineScientifiqueErcAssociationDialog(): boolean {
           return this.disciplineScientifiqueErcAssociationService.createDisciplineScientifiqueErcAssociationDialog;

       }
    set createDisciplineScientifiqueErcAssociationDialog(value: boolean) {
        this.disciplineScientifiqueErcAssociationService.createDisciplineScientifiqueErcAssociationDialog= value;
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
            return environment.dateFormatCreate;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }

     get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }




    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
    }


    get validDisciplineScientifiqueErcLibelleFr(): boolean {
    return this._validDisciplineScientifiqueErcLibelleFr;
    }

    set validDisciplineScientifiqueErcLibelleFr(value: boolean) {
    this._validDisciplineScientifiqueErcLibelleFr = value;
    }
    get validDisciplineScientifiqueErcLibelleEng(): boolean {
    return this._validDisciplineScientifiqueErcLibelleEng;
    }

    set validDisciplineScientifiqueErcLibelleEng(value: boolean) {
    this._validDisciplineScientifiqueErcLibelleEng = value;
    }
    get validDisciplineScientifiqueErcCode(): boolean {
    return this._validDisciplineScientifiqueErcCode;
    }

    set validDisciplineScientifiqueErcCode(value: boolean) {
    this._validDisciplineScientifiqueErcCode = value;
    }
    get validDisciplineScientifiqueLibelleFr(): boolean {
    return this._validDisciplineScientifiqueLibelleFr;
    }

    set validDisciplineScientifiqueLibelleFr(value: boolean) {
    this._validDisciplineScientifiqueLibelleFr = value;
    }
    get validDisciplineScientifiqueLibelleEng(): boolean {
    return this._validDisciplineScientifiqueLibelleEng;
    }

    set validDisciplineScientifiqueLibelleEng(value: boolean) {
    this._validDisciplineScientifiqueLibelleEng = value;
    }
    get validDisciplineScientifiqueCode(): boolean {
    return this._validDisciplineScientifiqueCode;
    }

    set validDisciplineScientifiqueCode(value: boolean) {
    this._validDisciplineScientifiqueCode = value;
    }
    get validSemanticRelationshipLibelle(): boolean {
    return this._validSemanticRelationshipLibelle;
    }

    set validSemanticRelationshipLibelle(value: boolean) {
    this._validSemanticRelationshipLibelle = value;
    }
    get validSemanticRelationshipCode(): boolean {
    return this._validSemanticRelationshipCode;
    }

    set validSemanticRelationshipCode(value: boolean) {
    this._validSemanticRelationshipCode = value;
    }

}
