import {Component, OnInit, Input} from '@angular/core';
import {DisciplineScientifiqueErcParentService} from '../../../../../controller/service/DisciplineScientifiqueErcParent.service';
import {DisciplineScientifiqueErcParentVo} from '../../../../../controller/model/DisciplineScientifiqueErcParent.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
@Component({
  selector: 'app-discipline-scientifique-erc-parent-create-chercheur',
  templateUrl: './discipline-scientifique-erc-parent-create-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-erc-parent-create-chercheur.component.css']
})
export class DisciplineScientifiqueErcParentCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDisciplineScientifiqueErcParentLibelleFr = true;
   _validDisciplineScientifiqueErcParentLibelleEng = true;
   _validDisciplineScientifiqueErcParentCode = true;




constructor(private datePipe: DatePipe, private disciplineScientifiqueErcParentService: DisciplineScientifiqueErcParentService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private chercheurService :ChercheurService
) {

}


// methods
ngOnInit(): void {

    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}




private setValidation(value : boolean){
    this.validDisciplineScientifiqueErcParentLibelleFr = value;
    this.validDisciplineScientifiqueErcParentLibelleEng = value;
    this.validDisciplineScientifiqueErcParentCode = value;
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
     this.disciplineScientifiqueErcParentService.save().subscribe(disciplineScientifiqueErcParent=>{
       this.disciplineScientifiqueErcParents.push({...disciplineScientifiqueErcParent});
       this.createDisciplineScientifiqueErcParentDialog = false;
       this.submitted = false;
       this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateDisciplineScientifiqueErcParentLibelleFr();
this.validateDisciplineScientifiqueErcParentLibelleEng();
this.validateDisciplineScientifiqueErcParentCode();

    }

private validateDisciplineScientifiqueErcParentLibelleFr(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifiqueErcParent.libelleFr)) {
            this.errorMessages.push('Libelle fr non valide');
            this.validDisciplineScientifiqueErcParentLibelleFr = false;
        } else {
            this.validDisciplineScientifiqueErcParentLibelleFr = true;
        }
    }
private validateDisciplineScientifiqueErcParentLibelleEng(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifiqueErcParent.libelleEng)) {
            this.errorMessages.push('Libelle eng non valide');
            this.validDisciplineScientifiqueErcParentLibelleEng = false;
        } else {
            this.validDisciplineScientifiqueErcParentLibelleEng = true;
        }
    }
private validateDisciplineScientifiqueErcParentCode(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifiqueErcParent.code)) {
            this.errorMessages.push('Code non valide');
            this.validDisciplineScientifiqueErcParentCode = false;
        } else {
            this.validDisciplineScientifiqueErcParentCode = true;
        }
    }














//openPopup
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
    this.createDisciplineScientifiqueErcParentDialog  = false;
    this.setValidation(true);
}

// getters and setters

get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcParentVo> {
    return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents;
       }
set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcParentVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents = value;
       }

 get selectedDisciplineScientifiqueErcParent():DisciplineScientifiqueErcParentVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent;
       }
    set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent = value;
       }

   get createDisciplineScientifiqueErcParentDialog(): boolean {
           return this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcParentDialog;

       }
    set createDisciplineScientifiqueErcParentDialog(value: boolean) {
        this.disciplineScientifiqueErcParentService.createDisciplineScientifiqueErcParentDialog= value;
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

    get validDisciplineScientifiqueErcParentLibelleFr(): boolean {
    return this._validDisciplineScientifiqueErcParentLibelleFr;
    }

    set validDisciplineScientifiqueErcParentLibelleFr(value: boolean) {
    this._validDisciplineScientifiqueErcParentLibelleFr = value;
    }
    get validDisciplineScientifiqueErcParentLibelleEng(): boolean {
    return this._validDisciplineScientifiqueErcParentLibelleEng;
    }

    set validDisciplineScientifiqueErcParentLibelleEng(value: boolean) {
    this._validDisciplineScientifiqueErcParentLibelleEng = value;
    }
    get validDisciplineScientifiqueErcParentCode(): boolean {
    return this._validDisciplineScientifiqueErcParentCode;
    }

    set validDisciplineScientifiqueErcParentCode(value: boolean) {
    this._validDisciplineScientifiqueErcParentCode = value;
    }


}
