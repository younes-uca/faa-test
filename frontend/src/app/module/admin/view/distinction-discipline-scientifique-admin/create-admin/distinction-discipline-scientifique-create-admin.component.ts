import {Component, OnInit, Input} from '@angular/core';
import {DistinctionDisciplineScientifiqueService} from '../../../../../controller/service/DistinctionDisciplineScientifique.service';
import {DistinctionDisciplineScientifiqueVo} from '../../../../../controller/model/DistinctionDisciplineScientifique.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DistinctionVo} from '../../../../../controller/model/Distinction.model';
import {DistinctionService} from '../../../../../controller/service/Distinction.service';
@Component({
  selector: 'app-distinction-discipline-scientifique-create-admin',
  templateUrl: './distinction-discipline-scientifique-create-admin.component.html',
  styleUrls: ['./distinction-discipline-scientifique-create-admin.component.css']
})
export class DistinctionDisciplineScientifiqueCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();


    _validDisciplineScientifiqueLibelleFr = true;
    _validDisciplineScientifiqueLibelleEng = true;
    _validDisciplineScientifiqueCode = true;



constructor(private datePipe: DatePipe, private distinctionDisciplineScientifiqueService: DistinctionDisciplineScientifiqueService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private disciplineScientifiqueService :DisciplineScientifiqueService
,       private distinctionService :DistinctionService
) {

}


// methods
ngOnInit(): void {

    this.selectedDistinction = new DistinctionVo();
    this.distinctionService.findAll().subscribe((data) => this.distinctions = data);
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
     this.distinctionDisciplineScientifiqueService.save().subscribe(distinctionDisciplineScientifique=>{
       this.distinctionDisciplineScientifiques.push({...distinctionDisciplineScientifique});
       this.createDistinctionDisciplineScientifiqueDialog = false;
       this.submitted = false;
       this.selectedDistinctionDisciplineScientifique = new DistinctionDisciplineScientifiqueVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();

    }







//openPopup
              public async openCreatedistinction(distinction: string) {
                      const isPermistted = await this.roleService.isPermitted('Distinction', 'add');
                       if(isPermistted){
         this.selectedDistinction = new DistinctionVo();
        this.createDistinctionDialog = true;
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
    this.createDistinctionDisciplineScientifiqueDialog  = false;
    this.setValidation(true);
}

// getters and setters

get distinctionDisciplineScientifiques(): Array<DistinctionDisciplineScientifiqueVo> {
    return this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiques;
       }
set distinctionDisciplineScientifiques(value: Array<DistinctionDisciplineScientifiqueVo>) {
        this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiques = value;
       }

 get selectedDistinctionDisciplineScientifique():DistinctionDisciplineScientifiqueVo {
           return this.distinctionDisciplineScientifiqueService.selectedDistinctionDisciplineScientifique;
       }
    set selectedDistinctionDisciplineScientifique(value: DistinctionDisciplineScientifiqueVo) {
        this.distinctionDisciplineScientifiqueService.selectedDistinctionDisciplineScientifique = value;
       }

   get createDistinctionDisciplineScientifiqueDialog(): boolean {
           return this.distinctionDisciplineScientifiqueService.createDistinctionDisciplineScientifiqueDialog;

       }
    set createDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this.distinctionDisciplineScientifiqueService.createDistinctionDisciplineScientifiqueDialog= value;
       }

       get selectedDistinction(): DistinctionVo {
           return this.distinctionService.selectedDistinction;
       }
      set selectedDistinction(value: DistinctionVo) {
        this.distinctionService.selectedDistinction = value;
       }
       get distinctions(): Array<DistinctionVo> {
           return this.distinctionService.distinctions;
       }
       set distinctions(value: Array<DistinctionVo>) {
        this.distinctionService.distinctions = value;
       }
       get createDistinctionDialog(): boolean {
           return this.distinctionService.createDistinctionDialog;
       }
      set createDistinctionDialog(value: boolean) {
        this.distinctionService.createDistinctionDialog= value;
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
