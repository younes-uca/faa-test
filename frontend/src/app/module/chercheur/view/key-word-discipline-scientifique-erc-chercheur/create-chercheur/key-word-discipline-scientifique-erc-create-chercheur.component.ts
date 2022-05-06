import {Component, OnInit, Input} from '@angular/core';
import {KeyWordDisciplineScientifiqueErcService} from '../../../../../controller/service/KeyWordDisciplineScientifiqueErc.service';
import {KeyWordDisciplineScientifiqueErcVo} from '../../../../../controller/model/KeyWordDisciplineScientifiqueErc.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {KeyWordVo} from '../../../../../controller/model/KeyWord.model';
import {KeyWordService} from '../../../../../controller/service/KeyWord.service';
import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
@Component({
  selector: 'app-key-word-discipline-scientifique-erc-create-chercheur',
  templateUrl: './key-word-discipline-scientifique-erc-create-chercheur.component.html',
  styleUrls: ['./key-word-discipline-scientifique-erc-create-chercheur.component.css']
})
export class KeyWordDisciplineScientifiqueErcCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();


    _validKeyWordLibelleFr = true;
    _validKeyWordLibelleEng = true;
    _validKeyWordCode = true;
    _validDisciplineScientifiqueLibelleFr = true;
    _validDisciplineScientifiqueLibelleEng = true;
    _validDisciplineScientifiqueCode = true;



constructor(private datePipe: DatePipe, private keyWordDisciplineScientifiqueErcService: KeyWordDisciplineScientifiqueErcService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private keyWordService :KeyWordService
,       private disciplineScientifiqueService :DisciplineScientifiqueService
) {

}


// methods
ngOnInit(): void {

    this.selectedKeyWord = new KeyWordVo();
    this.keyWordService.findAll().subscribe((data) => this.keyWords = data);
    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
    this.disciplineScientifiqueService.findAll().subscribe((data) => this.disciplineScientifiques = data);
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
     this.keyWordDisciplineScientifiqueErcService.save().subscribe(keyWordDisciplineScientifiqueErc=>{
       this.keyWordDisciplineScientifiqueErcs.push({...keyWordDisciplineScientifiqueErc});
       this.createKeyWordDisciplineScientifiqueErcDialog = false;
       this.submitted = false;
       this.selectedKeyWordDisciplineScientifiqueErc = new KeyWordDisciplineScientifiqueErcVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();

    }







//openPopup
              public async openCreatekeyWord(keyWord: string) {
                      const isPermistted = await this.roleService.isPermitted('KeyWord', 'add');
                       if(isPermistted){
         this.selectedKeyWord = new KeyWordVo();
        this.createKeyWordDialog = true;
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
    this.createKeyWordDisciplineScientifiqueErcDialog  = false;
    this.setValidation(true);
}

// getters and setters

get keyWordDisciplineScientifiqueErcs(): Array<KeyWordDisciplineScientifiqueErcVo> {
    return this.keyWordDisciplineScientifiqueErcService.keyWordDisciplineScientifiqueErcs;
       }
set keyWordDisciplineScientifiqueErcs(value: Array<KeyWordDisciplineScientifiqueErcVo>) {
        this.keyWordDisciplineScientifiqueErcService.keyWordDisciplineScientifiqueErcs = value;
       }

 get selectedKeyWordDisciplineScientifiqueErc():KeyWordDisciplineScientifiqueErcVo {
           return this.keyWordDisciplineScientifiqueErcService.selectedKeyWordDisciplineScientifiqueErc;
       }
    set selectedKeyWordDisciplineScientifiqueErc(value: KeyWordDisciplineScientifiqueErcVo) {
        this.keyWordDisciplineScientifiqueErcService.selectedKeyWordDisciplineScientifiqueErc = value;
       }

   get createKeyWordDisciplineScientifiqueErcDialog(): boolean {
           return this.keyWordDisciplineScientifiqueErcService.createKeyWordDisciplineScientifiqueErcDialog;

       }
    set createKeyWordDisciplineScientifiqueErcDialog(value: boolean) {
        this.keyWordDisciplineScientifiqueErcService.createKeyWordDisciplineScientifiqueErcDialog= value;
       }

       get selectedKeyWord(): KeyWordVo {
           return this.keyWordService.selectedKeyWord;
       }
      set selectedKeyWord(value: KeyWordVo) {
        this.keyWordService.selectedKeyWord = value;
       }
       get keyWords(): Array<KeyWordVo> {
           return this.keyWordService.keyWords;
       }
       set keyWords(value: Array<KeyWordVo>) {
        this.keyWordService.keyWords = value;
       }
       get createKeyWordDialog(): boolean {
           return this.keyWordService.createKeyWordDialog;
       }
      set createKeyWordDialog(value: boolean) {
        this.keyWordService.createKeyWordDialog= value;
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

}
