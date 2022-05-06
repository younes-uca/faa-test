import {Component, OnInit, Input} from '@angular/core';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
import {DisciplineScientifiqueErcParentVo} from '../../../../../controller/model/DisciplineScientifiqueErcParent.model';
import {DisciplineScientifiqueErcParentService} from '../../../../../controller/service/DisciplineScientifiqueErcParent.service';
@Component({
  selector: 'app-discipline-scientifique-erc-create-admin',
  templateUrl: './discipline-scientifique-erc-create-admin.component.html',
  styleUrls: ['./discipline-scientifique-erc-create-admin.component.css']
})
export class DisciplineScientifiqueErcCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDisciplineScientifiqueErcLibelleFr = true;
   _validDisciplineScientifiqueErcLibelleEng = true;
   _validDisciplineScientifiqueErcCode = true;

    _validDisciplineScientifiqueErcParentLibelleFr = true;
    _validDisciplineScientifiqueErcParentLibelleEng = true;
    _validDisciplineScientifiqueErcParentCode = true;



constructor(private datePipe: DatePipe, private disciplineScientifiqueErcService: DisciplineScientifiqueErcService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private chercheurService :ChercheurService
,       private disciplineScientifiqueErcParentService :DisciplineScientifiqueErcParentService
) {

}


// methods
ngOnInit(): void {

    this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();
    this.disciplineScientifiqueErcParentService.findAll().subscribe((data) => this.disciplineScientifiqueErcParents = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
}




private setValidation(value : boolean){
    this.validDisciplineScientifiqueErcLibelleFr = value;
    this.validDisciplineScientifiqueErcLibelleEng = value;
    this.validDisciplineScientifiqueErcCode = value;
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
     this.disciplineScientifiqueErcService.save().subscribe(disciplineScientifiqueErc=>{
       this.disciplineScientifiqueErcs.push({...disciplineScientifiqueErc});
       this.createDisciplineScientifiqueErcDialog = false;
       this.submitted = false;
       this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateDisciplineScientifiqueErcLibelleFr();
this.validateDisciplineScientifiqueErcLibelleEng();
this.validateDisciplineScientifiqueErcCode();

    }

private validateDisciplineScientifiqueErcLibelleFr(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifiqueErc.libelleFr)) {
            this.errorMessages.push('Libelle fr non valide');
            this.validDisciplineScientifiqueErcLibelleFr = false;
        } else {
            this.validDisciplineScientifiqueErcLibelleFr = true;
        }
    }
private validateDisciplineScientifiqueErcLibelleEng(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifiqueErc.libelleEng)) {
            this.errorMessages.push('Libelle eng non valide');
            this.validDisciplineScientifiqueErcLibelleEng = false;
        } else {
            this.validDisciplineScientifiqueErcLibelleEng = true;
        }
    }
private validateDisciplineScientifiqueErcCode(){
        if (this.stringUtilService.isEmpty(this.selectedDisciplineScientifiqueErc.code)) {
            this.errorMessages.push('Code non valide');
            this.validDisciplineScientifiqueErcCode = false;
        } else {
            this.validDisciplineScientifiqueErcCode = true;
        }
    }















//openPopup
              public async openCreatedisciplineScientifiqueErcParent(disciplineScientifiqueErcParent: string) {
                      const isPermistted = await this.roleService.isPermitted('DisciplineScientifiqueErcParent', 'add');
                       if(isPermistted){
         this.selectedDisciplineScientifiqueErcParent = new DisciplineScientifiqueErcParentVo();
        this.createDisciplineScientifiqueErcParentDialog = true;
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
    this.createDisciplineScientifiqueErcDialog  = false;
    this.setValidation(true);
}

// getters and setters

get disciplineScientifiqueErcs(): Array<DisciplineScientifiqueErcVo> {
    return this.disciplineScientifiqueErcService.disciplineScientifiqueErcs;
       }
set disciplineScientifiqueErcs(value: Array<DisciplineScientifiqueErcVo>) {
        this.disciplineScientifiqueErcService.disciplineScientifiqueErcs = value;
       }

 get selectedDisciplineScientifiqueErc():DisciplineScientifiqueErcVo {
           return this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc;
       }
    set selectedDisciplineScientifiqueErc(value: DisciplineScientifiqueErcVo) {
        this.disciplineScientifiqueErcService.selectedDisciplineScientifiqueErc = value;
       }

   get createDisciplineScientifiqueErcDialog(): boolean {
           return this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog;

       }
    set createDisciplineScientifiqueErcDialog(value: boolean) {
        this.disciplineScientifiqueErcService.createDisciplineScientifiqueErcDialog= value;
       }

       get selectedDisciplineScientifiqueErcParent(): DisciplineScientifiqueErcParentVo {
           return this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent;
       }
      set selectedDisciplineScientifiqueErcParent(value: DisciplineScientifiqueErcParentVo) {
        this.disciplineScientifiqueErcParentService.selectedDisciplineScientifiqueErcParent = value;
       }
       get disciplineScientifiqueErcParents(): Array<DisciplineScientifiqueErcParentVo> {
           return this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents;
       }
       set disciplineScientifiqueErcParents(value: Array<DisciplineScientifiqueErcParentVo>) {
        this.disciplineScientifiqueErcParentService.disciplineScientifiqueErcParents = value;
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
