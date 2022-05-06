import {Component, OnInit, Input} from '@angular/core';
import {IdentifiantAuteurExpertService} from '../../../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../../../controller/model/IdentifiantAuteurExpert.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {IdentifiantRechercheVo} from '../../../../../controller/model/IdentifiantRecherche.model';
import {IdentifiantRechercheService} from '../../../../../controller/service/IdentifiantRecherche.service';
import {ChercheurVo} from '../../../../../controller/model/Chercheur.model';
import {ChercheurService} from '../../../../../controller/service/Chercheur.service';
@Component({
  selector: 'app-identifiant-auteur-expert-create-chercheur',
  templateUrl: './identifiant-auteur-expert-create-chercheur.component.html',
  styleUrls: ['./identifiant-auteur-expert-create-chercheur.component.css']
})
export class IdentifiantAuteurExpertCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();


    _validIdentifiantRechercheLibelle = true;
    _validIdentifiantRechercheCode = true;



constructor(private datePipe: DatePipe, private identifiantAuteurExpertService: IdentifiantAuteurExpertService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private identifiantRechercheService :IdentifiantRechercheService
,       private chercheurService :ChercheurService
) {

}


// methods
ngOnInit(): void {

    this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
    this.identifiantRechercheService.findAll().subscribe((data) => this.identifiantRecherches = data);
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
     this.identifiantAuteurExpertService.save().subscribe(identifiantAuteurExpert=>{
       this.identifiantAuteurExperts.push({...identifiantAuteurExpert});
       this.createIdentifiantAuteurExpertDialog = false;
       this.submitted = false;
       this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();

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

hideCreateDialog(){
    this.createIdentifiantAuteurExpertDialog  = false;
    this.setValidation(true);
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

   get createIdentifiantAuteurExpertDialog(): boolean {
           return this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog;

       }
    set createIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog= value;
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


    get validIdentifiantRechercheLibelle(): boolean {
    return this._validIdentifiantRechercheLibelle;
    }

    set validIdentifiantRechercheLibelle(value: boolean) {
    this._validIdentifiantRechercheLibelle = value;
    }
    get validIdentifiantRechercheCode(): boolean {
    return this._validIdentifiantRechercheCode;
    }

    set validIdentifiantRechercheCode(value: boolean) {
    this._validIdentifiantRechercheCode = value;
    }

}
