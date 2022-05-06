import {Component, OnInit} from '@angular/core';
import {KeyWordService} from '../../../../../controller/service/KeyWord.service';
import {KeyWordVo} from '../../../../../controller/model/KeyWord.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-key-word-edit-chercheur',
  templateUrl: './key-word-edit-chercheur.component.html',
  styleUrls: ['./key-word-edit-chercheur.component.css']
})
export class KeyWordEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private keyWordService: KeyWordService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
) {
}

// methods
ngOnInit(): void {
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.keyWordService.edit().subscribe(keyWord=>{
    const myIndex = this.keyWords.findIndex(e => e.id === this.selectedKeyWord.id);
    this.keyWords[myIndex] = this.selectedKeyWord;
    this.editKeyWordDialog = false;
    this.selectedKeyWord = new KeyWordVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editKeyWordDialog  = false;
}

// getters and setters

get keyWords(): Array<KeyWordVo> {
    return this.keyWordService.keyWords;
       }
set keyWords(value: Array<KeyWordVo>) {
        this.keyWordService.keyWords = value;
       }

 get selectedKeyWord(): KeyWordVo {
           return this.keyWordService.selectedKeyWord;
       }
    set selectedKeyWord(value: KeyWordVo) {
        this.keyWordService.selectedKeyWord = value;
       }

   get editKeyWordDialog(): boolean {
           return this.keyWordService.editKeyWordDialog;

       }
    set editKeyWordDialog(value: boolean) {
        this.keyWordService.editKeyWordDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
