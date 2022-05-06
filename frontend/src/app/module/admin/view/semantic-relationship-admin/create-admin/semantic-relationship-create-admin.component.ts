import {Component, OnInit, Input} from '@angular/core';
import {SemanticRelationshipService} from '../../../../../controller/service/SemanticRelationship.service';
import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-semantic-relationship-create-admin',
  templateUrl: './semantic-relationship-create-admin.component.html',
  styleUrls: ['./semantic-relationship-create-admin.component.css']
})
export class SemanticRelationshipCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validSemanticRelationshipLibelle = true;
   _validSemanticRelationshipCode = true;




constructor(private datePipe: DatePipe, private semanticRelationshipService: SemanticRelationshipService
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
    this.validSemanticRelationshipLibelle = value;
    this.validSemanticRelationshipCode = value;
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
     this.semanticRelationshipService.save().subscribe(semanticRelationship=>{
       this.semanticRelationships.push({...semanticRelationship});
       this.createSemanticRelationshipDialog = false;
       this.submitted = false;
       this.selectedSemanticRelationship = new SemanticRelationshipVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateSemanticRelationshipLibelle();
this.validateSemanticRelationshipCode();

    }

private validateSemanticRelationshipLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedSemanticRelationship.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validSemanticRelationshipLibelle = false;
        } else {
            this.validSemanticRelationshipLibelle = true;
        }
    }
private validateSemanticRelationshipCode(){
        if (this.stringUtilService.isEmpty(this.selectedSemanticRelationship.code)) {
            this.errorMessages.push('Code non valide');
            this.validSemanticRelationshipCode = false;
        } else {
            this.validSemanticRelationshipCode = true;
        }
    }







//openPopup
// methods

hideCreateDialog(){
    this.createSemanticRelationshipDialog  = false;
    this.setValidation(true);
}

// getters and setters

get semanticRelationships(): Array<SemanticRelationshipVo> {
    return this.semanticRelationshipService.semanticRelationships;
       }
set semanticRelationships(value: Array<SemanticRelationshipVo>) {
        this.semanticRelationshipService.semanticRelationships = value;
       }

 get selectedSemanticRelationship():SemanticRelationshipVo {
           return this.semanticRelationshipService.selectedSemanticRelationship;
       }
    set selectedSemanticRelationship(value: SemanticRelationshipVo) {
        this.semanticRelationshipService.selectedSemanticRelationship = value;
       }

   get createSemanticRelationshipDialog(): boolean {
           return this.semanticRelationshipService.createSemanticRelationshipDialog;

       }
    set createSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.createSemanticRelationshipDialog= value;
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
