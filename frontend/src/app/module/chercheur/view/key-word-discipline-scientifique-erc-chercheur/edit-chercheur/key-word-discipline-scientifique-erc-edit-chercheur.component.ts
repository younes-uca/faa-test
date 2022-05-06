import {Component, OnInit} from '@angular/core';
import {KeyWordDisciplineScientifiqueErcService} from '../../../../../controller/service/KeyWordDisciplineScientifiqueErc.service';
import {KeyWordDisciplineScientifiqueErcVo} from '../../../../../controller/model/KeyWordDisciplineScientifiqueErc.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {KeyWordVo} from '../../../../../controller/model/KeyWord.model';
import {KeyWordService} from '../../../../../controller/service/KeyWord.service';
import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';

@Component({
  selector: 'app-key-word-discipline-scientifique-erc-edit-chercheur',
  templateUrl: './key-word-discipline-scientifique-erc-edit-chercheur.component.html',
  styleUrls: ['./key-word-discipline-scientifique-erc-edit-chercheur.component.css']
})
export class KeyWordDisciplineScientifiqueErcEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private keyWordDisciplineScientifiqueErcService: KeyWordDisciplineScientifiqueErcService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private keyWordService: KeyWordService
 ,       private disciplineScientifiqueService: DisciplineScientifiqueService
) {
}

// methods
ngOnInit(): void {
    this.selectedKeyWord = new KeyWordVo();
    this.keyWordService.findAll().subscribe((data) => this.keyWords = data);
    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
    this.disciplineScientifiqueService.findAll().subscribe((data) => this.disciplineScientifiques = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.keyWordDisciplineScientifiqueErcService.edit().subscribe(keyWordDisciplineScientifiqueErc=>{
    const myIndex = this.keyWordDisciplineScientifiqueErcs.findIndex(e => e.id === this.selectedKeyWordDisciplineScientifiqueErc.id);
    this.keyWordDisciplineScientifiqueErcs[myIndex] = this.selectedKeyWordDisciplineScientifiqueErc;
    this.editKeyWordDisciplineScientifiqueErcDialog = false;
    this.selectedKeyWordDisciplineScientifiqueErc = new KeyWordDisciplineScientifiqueErcVo();


    }, error => {
        console.log(error);
    });

}

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

hideEditDialog(){
    this.editKeyWordDisciplineScientifiqueErcDialog  = false;
}

// getters and setters

get keyWordDisciplineScientifiqueErcs(): Array<KeyWordDisciplineScientifiqueErcVo> {
    return this.keyWordDisciplineScientifiqueErcService.keyWordDisciplineScientifiqueErcs;
       }
set keyWordDisciplineScientifiqueErcs(value: Array<KeyWordDisciplineScientifiqueErcVo>) {
        this.keyWordDisciplineScientifiqueErcService.keyWordDisciplineScientifiqueErcs = value;
       }

 get selectedKeyWordDisciplineScientifiqueErc(): KeyWordDisciplineScientifiqueErcVo {
           return this.keyWordDisciplineScientifiqueErcService.selectedKeyWordDisciplineScientifiqueErc;
       }
    set selectedKeyWordDisciplineScientifiqueErc(value: KeyWordDisciplineScientifiqueErcVo) {
        this.keyWordDisciplineScientifiqueErcService.selectedKeyWordDisciplineScientifiqueErc = value;
       }

   get editKeyWordDisciplineScientifiqueErcDialog(): boolean {
           return this.keyWordDisciplineScientifiqueErcService.editKeyWordDisciplineScientifiqueErcDialog;

       }
    set editKeyWordDisciplineScientifiqueErcDialog(value: boolean) {
        this.keyWordDisciplineScientifiqueErcService.editKeyWordDisciplineScientifiqueErcDialog = value;
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
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
