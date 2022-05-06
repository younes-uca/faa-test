import {Component, OnInit, Input} from '@angular/core';
import {KeyWordService} from '../../../../../controller/service/KeyWord.service';
import {KeyWordVo} from '../../../../../controller/model/KeyWord.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-key-word-create-chercheur',
  templateUrl: './key-word-create-chercheur.component.html',
  styleUrls: ['./key-word-create-chercheur.component.css']
})
export class KeyWordCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validKeyWordLibelleFr = true;
   _validKeyWordLibelleEng = true;
   _validKeyWordCode = true;




constructor(private datePipe: DatePipe, private keyWordService: KeyWordService
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
    this.validKeyWordLibelleFr = value;
    this.validKeyWordLibelleEng = value;
    this.validKeyWordCode = value;
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
     this.keyWordService.save().subscribe(keyWord=>{
       this.keyWords.push({...keyWord});
       this.createKeyWordDialog = false;
       this.submitted = false;
       this.selectedKeyWord = new KeyWordVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateKeyWordLibelleFr();
this.validateKeyWordLibelleEng();
this.validateKeyWordCode();

    }

private validateKeyWordLibelleFr(){
        if (this.stringUtilService.isEmpty(this.selectedKeyWord.libelleFr)) {
            this.errorMessages.push('Libelle fr non valide');
            this.validKeyWordLibelleFr = false;
        } else {
            this.validKeyWordLibelleFr = true;
        }
    }
private validateKeyWordLibelleEng(){
        if (this.stringUtilService.isEmpty(this.selectedKeyWord.libelleEng)) {
            this.errorMessages.push('Libelle eng non valide');
            this.validKeyWordLibelleEng = false;
        } else {
            this.validKeyWordLibelleEng = true;
        }
    }
private validateKeyWordCode(){
        if (this.stringUtilService.isEmpty(this.selectedKeyWord.code)) {
            this.errorMessages.push('Code non valide');
            this.validKeyWordCode = false;
        } else {
            this.validKeyWordCode = true;
        }
    }







//openPopup
// methods

hideCreateDialog(){
    this.createKeyWordDialog  = false;
    this.setValidation(true);
}

// getters and setters

get keyWords(): Array<KeyWordVo> {
    return this.keyWordService.keyWords;
       }
set keyWords(value: Array<KeyWordVo>) {
        this.keyWordService.keyWords = value;
       }

 get selectedKeyWord():KeyWordVo {
           return this.keyWordService.selectedKeyWord;
       }
    set selectedKeyWord(value: KeyWordVo) {
        this.keyWordService.selectedKeyWord = value;
       }

   get createKeyWordDialog(): boolean {
           return this.keyWordService.createKeyWordDialog;

       }
    set createKeyWordDialog(value: boolean) {
        this.keyWordService.createKeyWordDialog= value;
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

    get validKeyWordLibelleFr(): boolean {
    return this._validKeyWordLibelleFr;
    }

    set validKeyWordLibelleFr(value: boolean) {
    this._validKeyWordLibelleFr = value;
    }
    get validKeyWordLibelleEng(): boolean {
    return this._validKeyWordLibelleEng;
    }

    set validKeyWordLibelleEng(value: boolean) {
    this._validKeyWordLibelleEng = value;
    }
    get validKeyWordCode(): boolean {
    return this._validKeyWordCode;
    }

    set validKeyWordCode(value: boolean) {
    this._validKeyWordCode = value;
    }


}
