import {Component, OnInit} from '@angular/core';
import {CampagneService} from '../../../../../controller/service/Campagne.service';
import {CampagneVo} from '../../../../../controller/model/Campagne.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-campagne-edit-admin',
  templateUrl: './campagne-edit-admin.component.html',
  styleUrls: ['./campagne-edit-admin.component.css']
})
export class CampagneEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private campagneService: CampagneService
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
            this.selectedCampagne.dateDepart = DateUtils.toDate(this.selectedCampagne.dateDepart);
            this.selectedCampagne.dateFin = DateUtils.toDate(this.selectedCampagne.dateFin);
    this.campagneService.edit().subscribe(campagne=>{
    const myIndex = this.campagnes.findIndex(e => e.id === this.selectedCampagne.id);
    this.campagnes[myIndex] = this.selectedCampagne;
    this.editCampagneDialog = false;
    this.selectedCampagne = new CampagneVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editCampagneDialog  = false;
}

// getters and setters

get campagnes(): Array<CampagneVo> {
    return this.campagneService.campagnes;
       }
set campagnes(value: Array<CampagneVo>) {
        this.campagneService.campagnes = value;
       }

 get selectedCampagne(): CampagneVo {
           return this.campagneService.selectedCampagne;
       }
    set selectedCampagne(value: CampagneVo) {
        this.campagneService.selectedCampagne = value;
       }

   get editCampagneDialog(): boolean {
           return this.campagneService.editCampagneDialog;

       }
    set editCampagneDialog(value: boolean) {
        this.campagneService.editCampagneDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
