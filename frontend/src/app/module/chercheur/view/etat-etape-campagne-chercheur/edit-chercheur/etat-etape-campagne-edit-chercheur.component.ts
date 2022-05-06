import {Component, OnInit} from '@angular/core';
import {EtatEtapeCampagneService} from '../../../../../controller/service/EtatEtapeCampagne.service';
import {EtatEtapeCampagneVo} from '../../../../../controller/model/EtatEtapeCampagne.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-etat-etape-campagne-edit-chercheur',
  templateUrl: './etat-etape-campagne-edit-chercheur.component.html',
  styleUrls: ['./etat-etape-campagne-edit-chercheur.component.css']
})
export class EtatEtapeCampagneEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private etatEtapeCampagneService: EtatEtapeCampagneService
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
    this.etatEtapeCampagneService.edit().subscribe(etatEtapeCampagne=>{
    const myIndex = this.etatEtapeCampagnes.findIndex(e => e.id === this.selectedEtatEtapeCampagne.id);
    this.etatEtapeCampagnes[myIndex] = this.selectedEtatEtapeCampagne;
    this.editEtatEtapeCampagneDialog = false;
    this.selectedEtatEtapeCampagne = new EtatEtapeCampagneVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editEtatEtapeCampagneDialog  = false;
}

// getters and setters

get etatEtapeCampagnes(): Array<EtatEtapeCampagneVo> {
    return this.etatEtapeCampagneService.etatEtapeCampagnes;
       }
set etatEtapeCampagnes(value: Array<EtatEtapeCampagneVo>) {
        this.etatEtapeCampagneService.etatEtapeCampagnes = value;
       }

 get selectedEtatEtapeCampagne(): EtatEtapeCampagneVo {
           return this.etatEtapeCampagneService.selectedEtatEtapeCampagne;
       }
    set selectedEtatEtapeCampagne(value: EtatEtapeCampagneVo) {
        this.etatEtapeCampagneService.selectedEtatEtapeCampagne = value;
       }

   get editEtatEtapeCampagneDialog(): boolean {
           return this.etatEtapeCampagneService.editEtatEtapeCampagneDialog;

       }
    set editEtatEtapeCampagneDialog(value: boolean) {
        this.etatEtapeCampagneService.editEtatEtapeCampagneDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
