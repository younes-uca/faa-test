import {Component, OnInit, Input} from '@angular/core';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
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
import {DisciplineScientifiqueErcAssociationVo} from '../../../../../controller/model/DisciplineScientifiqueErcAssociation.model';
import {DisciplineScientifiqueErcAssociationService} from '../../../../../controller/service/DisciplineScientifiqueErcAssociation.service';
import {DisciplineScientifiqueParentVo} from '../../../../../controller/model/DisciplineScientifiqueParent.model';
import {DisciplineScientifiqueParentService} from '../../../../../controller/service/DisciplineScientifiqueParent.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
@Component({
  selector: 'app-discipline-scientifique-create-admin',
  templateUrl: './discipline-scientifique-create-admin.component.html',
  styleUrls: ['./discipline-scientifique-create-admin.component.css']
})
export class DisciplineScientifiqueCreateAdminComponent implements OnInit {

        selectedDisciplineScientifiqueErcAssociations: DisciplineScientifiqueErcAssociationVo = new DisciplineScientifiqueErcAssociationVo();
    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDisciplineScientifiqueLibelleFr = true;
   _validDisciplineScientifiqueLibelleEng = true;
   _validDisciplineScientifiqueCode = true;

    _validDisciplineScientifiqueParentLibelleFr = true;
    _validDisciplineScientifiqueParentLibelleEng = true;
    _validDisciplineScientifiqueParentCode = true;



constructor(private datePipe: DatePipe, private disciplineScientifiqueService: DisciplineScientifiqueService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private semanticRelationshipService :SemanticRelationshipService
,       private disciplineScientifiqueErcService :DisciplineScientifiqueErcService
,       private disciplineScientifiqueErcAssociationService :DisciplineScientifiqueErcAssociationService
,       private disciplineScientifiqueParentService :DisciplineScientifiqueParentService
,       private chercheurService :ChercheurService
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


    validateDisciplineScientifiqueErcAssociations(){
    this.errorMessages = new Array();
    }


private setValidation(value : boolean){
    this.validDisciplineScientifiqueLibelleFr = value;
    this.validDisciplineScientifiqueLibelleEng = value;
    this.validDisciplineScientifiqueCode = value;
    }

        addDisciplineScientifiqueErcAssociations() {
        if( this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo == null ){
            this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo = new Array<DisciplineScientifiqueErcAssociationVo>();
        }
       this.validateDisciplineScientifiqueErcAssociations();
       if (this.errorMessages.length === 0) {
              this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo.push(this.selectedDisciplineScientifiqueErcAssociations);
              this.selectedDisciplineScientifiqueErcAssociations = new DisciplineScientifiqueErcAssociationVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
       }

        deleteDisciplineScientifiqueErcAssociations(p: DisciplineScientifiqueErcAssociationVo) {
        this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo.forEach((element, index) => {
            if (element === p) { this.selectedDisciplineScientifique.disciplineScientifiqueErcAssociationsVo.splice(index, 1); }
        });
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
     this.disciplineScientifiqueService.save().subscribe(disciplineScientifique=>{
       this.disciplineScientifiques.push({...disciplineScientifique});
       this.createDisciplineScientifiqueDialog = false;
       this.submitted = false;
       this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateDisciplineScientifiqueLibelleFr();
this.validateDisciplineScientifiqueLibelleEng();
this.validateDisciplineScientifiqueCode();

    }

private validateDisciplineScientifiqueLibelleFr(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifique.libelleFr)) {
            this.errorMessages.push('Libelle fr non valide');
            this.validDisciplineScientifiqueLibelleFr = false;
        } else {
            this.validDisciplineScientifiqueLibelleFr = true;
        }
    }
private validateDisciplineScientifiqueLibelleEng(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifique.libelleEng)) {
            this.errorMessages.push('Libelle eng non valide');
            this.validDisciplineScientifiqueLibelleEng = false;
        } else {
            this.validDisciplineScientifiqueLibelleEng = true;
        }
    }
private validateDisciplineScientifiqueCode(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifique.code)) {
            this.errorMessages.push('Code non valide');
            this.validDisciplineScientifiqueCode = false;
        } else {
            this.validDisciplineScientifiqueCode = true;
        }
    }





















//openPopup
              public async openCreatedisciplineScientifiqueParent(disciplineScientifiqueParent: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueParent', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueParent = new DisciplineScientifiqueParentVo();
        this.createDisciplineScientifiqueParentDialog = true;
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

hideCreateDialog(){
    this.createDisciplineScientifiqueDialog  = false;
    this.setValidation(true);
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

   get createDisciplineScientifiqueDialog(): boolean {
           return this.disciplineScientifiqueService.createDisciplineScientifiqueDialog;

       }
    set createDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.createDisciplineScientifiqueDialog= value;
       }

       get selectedDisciplineScientifiqueParent(): DisciplineScientifiqueParentVo {
           return this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent;
       }
      set selectedDisciplineScientifiqueParent(value: DisciplineScientifiqueParentVo) {
        this.disciplineScientifiqueParentService.selectedDisciplineScientifiqueParent = value;
       }
       get disciplineScientifiqueParents(): Array<DisciplineScientifiqueParentVo> {
           return this.disciplineScientifiqueParentService.disciplineScientifiqueParents;
       }
       set disciplineScientifiqueParents(value: Array<DisciplineScientifiqueParentVo>) {
        this.disciplineScientifiqueParentService.disciplineScientifiqueParents = value;
       }
       get createDisciplineScientifiqueParentDialog(): boolean {
           return this.disciplineScientifiqueParentService.createDisciplineScientifiqueParentDialog;
       }
      set createDisciplineScientifiqueParentDialog(value: boolean) {
        this.disciplineScientifiqueParentService.createDisciplineScientifiqueParentDialog= value;
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

    get validDisciplineScientifiqueParentLibelleFr(): boolean {
    return this._validDisciplineScientifiqueParentLibelleFr;
    }

    set validDisciplineScientifiqueParentLibelleFr(value: boolean) {
    this._validDisciplineScientifiqueParentLibelleFr = value;
    }
    get validDisciplineScientifiqueParentLibelleEng(): boolean {
    return this._validDisciplineScientifiqueParentLibelleEng;
    }

    set validDisciplineScientifiqueParentLibelleEng(value: boolean) {
    this._validDisciplineScientifiqueParentLibelleEng = value;
    }
    get validDisciplineScientifiqueParentCode(): boolean {
    return this._validDisciplineScientifiqueParentCode;
    }

    set validDisciplineScientifiqueParentCode(value: boolean) {
    this._validDisciplineScientifiqueParentCode = value;
    }

}
