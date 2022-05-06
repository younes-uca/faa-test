import {Component, OnInit} from '@angular/core';
import {DistinctionDisciplineScientifiqueService} from '../../../../../controller/service/DistinctionDisciplineScientifique.service';
import {DistinctionDisciplineScientifiqueVo} from '../../../../../controller/model/DistinctionDisciplineScientifique.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DisciplineScientifiqueVo} from '../../../../../controller/model/DisciplineScientifique.model';
import {DisciplineScientifiqueService} from '../../../../../controller/service/DisciplineScientifique.service';
import {DistinctionVo} from '../../../../../controller/model/Distinction.model';
import {DistinctionService} from '../../../../../controller/service/Distinction.service';

@Component({
  selector: 'app-distinction-discipline-scientifique-edit-admin',
  templateUrl: './distinction-discipline-scientifique-edit-admin.component.html',
  styleUrls: ['./distinction-discipline-scientifique-edit-admin.component.css']
})
export class DistinctionDisciplineScientifiqueEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private distinctionDisciplineScientifiqueService: DistinctionDisciplineScientifiqueService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private disciplineScientifiqueService: DisciplineScientifiqueService
 ,       private distinctionService: DistinctionService
) {
}

// methods
ngOnInit(): void {
    this.selectedDistinction = new DistinctionVo();
    this.distinctionService.findAll().subscribe((data) => this.distinctions = data);
    this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
    this.disciplineScientifiqueService.findAll().subscribe((data) => this.disciplineScientifiques = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.distinctionDisciplineScientifiqueService.edit().subscribe(distinctionDisciplineScientifique=>{
    const myIndex = this.distinctionDisciplineScientifiques.findIndex(e => e.id === this.selectedDistinctionDisciplineScientifique.id);
    this.distinctionDisciplineScientifiques[myIndex] = this.selectedDistinctionDisciplineScientifique;
    this.editDistinctionDisciplineScientifiqueDialog = false;
    this.selectedDistinctionDisciplineScientifique = new DistinctionDisciplineScientifiqueVo();


    }, error => {
        console.log(error);
    });

}

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

hideEditDialog(){
    this.editDistinctionDisciplineScientifiqueDialog  = false;
}

// getters and setters

get distinctionDisciplineScientifiques(): Array<DistinctionDisciplineScientifiqueVo> {
    return this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiques;
       }
set distinctionDisciplineScientifiques(value: Array<DistinctionDisciplineScientifiqueVo>) {
        this.distinctionDisciplineScientifiqueService.distinctionDisciplineScientifiques = value;
       }

 get selectedDistinctionDisciplineScientifique(): DistinctionDisciplineScientifiqueVo {
           return this.distinctionDisciplineScientifiqueService.selectedDistinctionDisciplineScientifique;
       }
    set selectedDistinctionDisciplineScientifique(value: DistinctionDisciplineScientifiqueVo) {
        this.distinctionDisciplineScientifiqueService.selectedDistinctionDisciplineScientifique = value;
       }

   get editDistinctionDisciplineScientifiqueDialog(): boolean {
           return this.distinctionDisciplineScientifiqueService.editDistinctionDisciplineScientifiqueDialog;

       }
    set editDistinctionDisciplineScientifiqueDialog(value: boolean) {
        this.distinctionDisciplineScientifiqueService.editDistinctionDisciplineScientifiqueDialog = value;
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
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
