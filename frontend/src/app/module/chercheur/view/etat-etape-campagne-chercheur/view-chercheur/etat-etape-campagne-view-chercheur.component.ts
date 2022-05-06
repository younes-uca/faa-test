import {Component, OnInit} from '@angular/core';
import {EtatEtapeCampagneService} from '../../../../../controller/service/EtatEtapeCampagne.service';
import {EtatEtapeCampagneVo} from '../../../../../controller/model/EtatEtapeCampagne.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-etat-etape-campagne-view-chercheur',
  templateUrl: './etat-etape-campagne-view-chercheur.component.html',
  styleUrls: ['./etat-etape-campagne-view-chercheur.component.css']
})
export class EtatEtapeCampagneViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private etatEtapeCampagneService: EtatEtapeCampagneService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewEtatEtapeCampagneDialog  = false;
}

// getters and setters

get etatEtapeCampagnes(): Array<EtatEtapeCampagneVo> {
    return this.etatEtapeCampagneService.etatEtapeCampagnes;
       }
set etatEtapeCampagnes(value: Array<EtatEtapeCampagneVo>) {
        this.etatEtapeCampagneService.etatEtapeCampagnes = value;
       }

 get selectedEtatEtapeCampagne():EtatEtapeCampagneVo {
           return this.etatEtapeCampagneService.selectedEtatEtapeCampagne;
       }
    set selectedEtatEtapeCampagne(value: EtatEtapeCampagneVo) {
        this.etatEtapeCampagneService.selectedEtatEtapeCampagne = value;
       }

   get viewEtatEtapeCampagneDialog():boolean {
           return this.etatEtapeCampagneService.viewEtatEtapeCampagneDialog;

       }
    set viewEtatEtapeCampagneDialog(value: boolean) {
        this.etatEtapeCampagneService.viewEtatEtapeCampagneDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
