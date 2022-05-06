import {Component, OnInit, Input} from '@angular/core';
import {DisciplineScientifiqueChercheurService} from '../../../../../controller/service/DisciplineScientifiqueChercheur.service';
import {DisciplineScientifiqueChercheurVo} from '../../../../../controller/model/DisciplineScientifiqueChercheur.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {DisciplineScientifiqueErcVo} from '../../../../../controller/model/DisciplineScientifiqueErc.model';
import {DisciplineScientifiqueErcService} from '../../../../../controller/service/DisciplineScientifiqueErc.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
@Component({
  selector: 'app-discipline-scientifique-chercheur-create-chercheur',
  templateUrl: './discipline-scientifique-chercheur-create-chercheur.component.html',
  styleUrls: ['./discipline-scientifique-chercheur-create-chercheur.component.css']
})
export class DisciplineScientifiqueChercheurCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();


    _validDisciplineScientifiqueLibelleFr = true;
    _validDisciplineScientifiqueLibelleEng = true;
    _validDisciplineScientifiqueCode = true;
    _validDisciplineScientifiqueErcLibelleFr = true;
    _validDisciplineScientifiqueErcLibelleEng = true;
    _validDisciplineScientifiqueErcCode = true;



constructor(private datePipe: DatePipe, private disciplineScientifiqueChercheurService: DisciplineScientifiqueChercheurService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private disciplineScientifiqueErcService :DisciplineScientifiqueErcService
,       private chercheurService :ChercheurService
,       private disciplineScientifiqueService :DisciplineScientifiqueService
) {

}


// methods
ngOnInit(): void {

    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
    this.disciplineScientifiqueService.findAll().subscribe((data) => this.disciplineScientifiques = data);
    this.selectedDisciplineScientifiqueErc = new DisciplineScientifiqueErcVo();
    this.disciplineScientifiqueErcService.findAll().subscribe((data) => this.disciplineScientifiqueErcs = data);
    this.selectedChercheur = new ChercheurVo();
    this.chercheurService.findAll().subscribe((data) => this.chercheurs = data);
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
     this.disciplineScientifiqueChercheurService.save().subscribe(disciplineScientifiqueChercheur=>{
       this.disciplineScientifiqueChercheurs.push({...disciplineScientifiqueChercheur});
       this.createDisciplineScientifiqueChercheurDialog = false;
       this.submitted = false;
       this.selectedDisciplineScientifiqueChercheur = new DisciplineScientifiqueChercheurVo();


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
    this.createDisciplineScientifiqueChercheurDialog  = false;
    this.setValidation(true);
}

// getters and setters

get disciplineScientifiqueChercheurs(): Array<DisciplineScientifiqueChercheurVo> {
    return this.disciplineScientifiqueChercheurService.disciplineScientifiqueChercheurs;
       }
set disciplineScientifiqueChercheurs(value: Array<DisciplineScientifiqueChercheurVo>) {
        this.disciplineScientifiqueChercheurService.disciplineScientifiqueChercheurs = value;
       }

 get selectedDisciplineScientifiqueChercheur():DisciplineScientifiqueChercheurVo {
           return this.disciplineScientifiqueChercheurService.selectedDisciplineScientifiqueChercheur;
       }
    set selectedDisciplineScientifiqueChercheur(value: DisciplineScientifiqueChercheurVo) {
        this.disciplineScientifiqueChercheurService.selectedDisciplineScientifiqueChercheur = value;
       }

   get createDisciplineScientifiqueChercheurDialog(): boolean {
           return this.disciplineScientifiqueChercheurService.createDisciplineScientifiqueChercheurDialog;

       }
    set createDisciplineScientifiqueChercheurDialog(value: boolean) {
        this.disciplineScientifiqueChercheurService.createDisciplineScientifiqueChercheurDialog= value;
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

}
