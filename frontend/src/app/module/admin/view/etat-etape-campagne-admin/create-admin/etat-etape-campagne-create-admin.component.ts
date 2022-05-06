import {Component, OnInit, Input} from '@angular/core';
import {EtatEtapeCampagneService} from '../../../../../controller/service/EtatEtapeCampagne.service';
import {EtatEtapeCampagneVo} from '../../../../../controller/model/EtatEtapeCampagne.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-etat-etape-campagne-create-admin',
  templateUrl: './etat-etape-campagne-create-admin.component.html',
  styleUrls: ['./etat-etape-campagne-create-admin.component.css']
})
export class EtatEtapeCampagneCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validEtatEtapeCampagneLibelle = true;
   _validEtatEtapeCampagneCode = true;




constructor(private datePipe: DatePipe, private etatEtapeCampagneService: EtatEtapeCampagneService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}


// methods
ngOnInit(): void {

}




private setValidation(value : boolean){
    this.validEtatEtapeCampagneLibelle = value;
    this.validEtatEtapeCampagneCode = value;
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
     this.etatEtapeCampagneService.save().subscribe(etatEtapeCampagne=>{
       this.etatEtapeCampagnes.push({...etatEtapeCampagne});
       this.createEtatEtapeCampagneDialog = false;
       this.submitted = false;
       this.selectedEtatEtapeCampagne = new EtatEtapeCampagneVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateEtatEtapeCampagneLibelle();
this.validateEtatEtapeCampagneCode();

    }

private validateEtatEtapeCampagneLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedEtatEtapeCampagne.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatEtapeCampagneLibelle = false;
        } else {
            this.validEtatEtapeCampagneLibelle = true;
        }
    }
private validateEtatEtapeCampagneCode(){
        if (this.stringUtilService.isEmpty(this.selectedEtatEtapeCampagne.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatEtapeCampagneCode = false;
        } else {
            this.validEtatEtapeCampagneCode = true;
        }
    }







//openPopup
// methods

hideCreateDialog(){
    this.createEtatEtapeCampagneDialog  = false;
    this.setValidation(true);
}

// getters and setters

get etatEtapeCampagnes(): Array<EtatEtapeCampagneVo> {
    return this.etatEtapeCampagneService.etatEtapeCampagnes;
       }
set etatEtapeCampagnes(value: Array<EtatEtapeCampagneVo>) {
        this.etatEtapeCampagneService.etatEtapeCampagnes = value;
       }

 get selectedEtatEtapeCampagne():EtatEtapeCampagneVo {
           return this.etatEtapeCampagneService.selectedEtatEtapeCampagne;
       }
    set selectedEtatEtapeCampagne(value: EtatEtapeCampagneVo) {
        this.etatEtapeCampagneService.selectedEtatEtapeCampagne = value;
       }

   get createEtatEtapeCampagneDialog(): boolean {
           return this.etatEtapeCampagneService.createEtatEtapeCampagneDialog;

       }
    set createEtatEtapeCampagneDialog(value: boolean) {
        this.etatEtapeCampagneService.createEtatEtapeCampagneDialog= value;
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

    get validEtatEtapeCampagneLibelle(): boolean {
    return this._validEtatEtapeCampagneLibelle;
    }

    set validEtatEtapeCampagneLibelle(value: boolean) {
    this._validEtatEtapeCampagneLibelle = value;
    }
    get validEtatEtapeCampagneCode(): boolean {
    return this._validEtatEtapeCampagneCode;
    }

    set validEtatEtapeCampagneCode(value: boolean) {
    this._validEtatEtapeCampagneCode = value;
    }


}
