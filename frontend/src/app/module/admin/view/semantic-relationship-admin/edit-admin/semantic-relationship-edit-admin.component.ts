import {Component, OnInit} from '@angular/core';
import {SemanticRelationshipService} from '../../../../../controller/service/SemanticRelationship.service';
import {SemanticRelationshipVo} from '../../../../../controller/model/SemanticRelationship.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-semantic-relationship-edit-admin',
  templateUrl: './semantic-relationship-edit-admin.component.html',
  styleUrls: ['./semantic-relationship-edit-admin.component.css']
})
export class SemanticRelationshipEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private semanticRelationshipService: SemanticRelationshipService
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
    this.semanticRelationshipService.edit().subscribe(semanticRelationship=>{
    const myIndex = this.semanticRelationships.findIndex(e => e.id === this.selectedSemanticRelationship.id);
    this.semanticRelationships[myIndex] = this.selectedSemanticRelationship;
    this.editSemanticRelationshipDialog = false;
    this.selectedSemanticRelationship = new SemanticRelationshipVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editSemanticRelationshipDialog  = false;
}

// getters and setters

get semanticRelationships(): Array<SemanticRelationshipVo> {
    return this.semanticRelationshipService.semanticRelationships;
       }
set semanticRelationships(value: Array<SemanticRelationshipVo>) {
        this.semanticRelationshipService.semanticRelationships = value;
       }

 get selectedSemanticRelationship(): SemanticRelationshipVo {
           return this.semanticRelationshipService.selectedSemanticRelationship;
       }
    set selectedSemanticRelationship(value: SemanticRelationshipVo) {
        this.semanticRelationshipService.selectedSemanticRelationship = value;
       }

   get editSemanticRelationshipDialog(): boolean {
           return this.semanticRelationshipService.editSemanticRelationshipDialog;

       }
    set editSemanticRelationshipDialog(value: boolean) {
        this.semanticRelationshipService.editSemanticRelationshipDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
