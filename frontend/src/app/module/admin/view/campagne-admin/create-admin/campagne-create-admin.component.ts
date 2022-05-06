import {Component, OnInit, Input} from '@angular/core';
import {CampagneService} from '../../../../../controller/service/Campagne.service';
import {CampagneVo} from '../../../../../controller/model/Campagne.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-campagne-create-admin',
  templateUrl: './campagne-create-admin.component.html',
  styleUrls: ['./campagne-create-admin.component.css']
})
export class CampagneCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validCampagneLibelle = true;




constructor(private datePipe: DatePipe, private campagneService: CampagneService
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
    this.validCampagneLibelle = value;
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
     this.campagneService.save().subscribe(campagne=>{
       this.campagnes.push({...campagne});
       this.createCampagneDialog = false;
       this.submitted = false;
       this.selectedCampagne = new CampagneVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateCampagneLibelle();

    }

private validateCampagneLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedCampagne.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCampagneLibelle = false;
        } else {
            this.validCampagneLibelle = true;
        }
    }









//openPopup
// methods

hideCreateDialog(){
    this.createCampagneDialog  = false;
    this.setValidation(true);
}

// getters and setters

get campagnes(): Array<CampagneVo> {
    return this.campagneService.campagnes;
       }
set campagnes(value: Array<CampagneVo>) {
        this.campagneService.campagnes = value;
       }

 get selectedCampagne():CampagneVo {
           return this.campagneService.selectedCampagne;
       }
    set selectedCampagne(value: CampagneVo) {
        this.campagneService.selectedCampagne = value;
       }

   get createCampagneDialog(): boolean {
           return this.campagneService.createCampagneDialog;

       }
    set createCampagneDialog(value: boolean) {
        this.campagneService.createCampagneDialog= value;
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

    get validCampagneLibelle(): boolean {
    return this._validCampagneLibelle;
    }

    set validCampagneLibelle(value: boolean) {
    this._validCampagneLibelle = value;
    }


}
