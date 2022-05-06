import {Component, OnInit} from '@angular/core';
import {ChercheurService} from '../../../../controller/service/Chercheur.service';
import {ChercheurVo} from '../../../../controller/model/Chercheur.model';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';


@Component({
    selector: 'app-switch-chercheur-admin',
    templateUrl: './switch-chercheur-admin.component.html',
    styleUrls: ['./switch-chercheur-admin.component.css']
})
export class SwitchChercheurAdminComponent implements OnInit {

    constructor(private chercheurService: ChercheurService, private roleService: RoleService, private messageService: MessageService, private authService: AuthService) {
    }

    // methods
    ngOnInit(): void {
        this.loadChercheurs();
    }

    public async loadChercheurs() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Chercheur', 'list');
        isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    // getters and setters
    hideVisibleDialog(): void {
        this.switchChercheurDialog = false;
    }

    get chercheurs(): Array<ChercheurVo> {
        return this.chercheurService.chercheurs;
    }

    set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
    }

    get selectedChercheur(): ChercheurVo {
        return this.chercheurService.selectedChercheur;
    }

    set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
    }

    get createChercheurDialog(): boolean {
        return this.chercheurService.createChercheurDialog;

    }

    set createChercheurDialog(value: boolean) {
        this.chercheurService.createChercheurDialog = value;
    }

    get switchChercheurDialog(): boolean {
        return this.chercheurService.switchChercheurDialog;

    }

    set switchChercheurDialog(value: boolean) {
        this.chercheurService.switchChercheurDialog = value;
    }

    get searchChercheur(): ChercheurVo {
        return this.chercheurService.searchChercheur;
    }

    set searchChercheur(value: ChercheurVo) {
        this.chercheurService.searchChercheur = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatList;
    }

    public searchRequest() {
        this.chercheurService.findByCriteria(this.searchChercheur).subscribe(chercheurs => {
            this.chercheurs = chercheurs;
        }, error => console.log(error));
    }

    switchChercheur(chercheur: ChercheurVo) {
        this.authService.registerConnectedChercheur(chercheur);
        window.location.reload();

    }
}
