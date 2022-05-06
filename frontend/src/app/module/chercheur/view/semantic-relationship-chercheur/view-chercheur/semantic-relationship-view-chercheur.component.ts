import {Component, OnInit} from '@angular/core';
import {SemanticRelationshipService} from '../../../../../controller/service/SemanticRelationship.service';
import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-semantic-relationship-view-chercheur',
  templateUrl: './semantic-relationship-view-chercheur.component.html',
  styleUrls: ['./semantic-relationship-view-chercheur.component.css']
})
export class SemanticRelationshipViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private semanticRelationshipService: SemanticRelationshipService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewSemanticRelationshipDialog  = false;
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

   get viewSemanticRelationshipDialog():boolean {
           return this.semanticRelationshipService.viewSemanticRelationshipDialog;

       }
    set viewSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.viewSemanticRelationshipDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
