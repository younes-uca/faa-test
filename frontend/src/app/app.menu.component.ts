import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './controller/service/Auth.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { RoleService } from './controller/service/role.service';
@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modelchercheur : any[];
  modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modelchercheur =
      [
              {
                label: 'Discipline scientifique parent',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique parent',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/discipline-scientifique-parent/list']
                    },
                ]
              },
              {
                label: 'Etat etape campagne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Etat etape campagne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/etat-etape-campagne/list']
                    },
                ]
              },
              {
                label: 'Enjeux ird chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Enjeux ird chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/enjeux-ird-chercheur/list']
                    },
                ]
              },
              {
                label: 'Key word discipline scientifique erc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Key word discipline scientifique erc',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/key-word-discipline-scientifique-erc/list']
                    },
                ]
              },
              {
                label: 'Distinction discipline scientifique',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Distinction discipline scientifique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/distinction-discipline-scientifique/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/discipline-scientifique-chercheur/list']
                    },
                ]
              },
              {
                label: 'Key word',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Key word',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/key-word/list']
                    },
                ]
              },
              {
                label: 'Identifiant recherche',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Identifiant recherche',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/identifiant-recherche/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/discipline-scientifique/list']
                    },
                ]
              },
              {
                label: 'Chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/chercheur/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique erc parent',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique erc parent',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/discipline-scientifique-erc-parent/list']
                    },
                ]
              },
              {
                label: 'Semantic relationship',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Semantic relationship',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/semantic-relationship/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique erc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique erc',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/discipline-scientifique-erc/list']
                    },
                ]
              },
              {
                label: 'Enjeux ird',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Enjeux ird',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/enjeux-ird/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique erc association',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique erc association',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/discipline-scientifique-erc-association/list']
                    },
                ]
              },
              {
                label: 'Identifiant auteur expert',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Identifiant auteur expert',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/identifiant-auteur-expert/list']
                    },
                ]
              },
              {
                label: 'Campagne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Campagne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/campagne/list']
                    },
                ]
              },
              {
                label: 'Distinction',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Distinction',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/distinction/list']
                    },
                    {
                      label: 'Nouveau Distinction',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/distinction/create']
                    },
                ]
              },
    ]
    this.modeladmin =
      [
              {
                label: 'Discipline scientifique parent',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique parent',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/discipline-scientifique-parent/list']
                    },
                ]
              },
              {
                label: 'Etat etape campagne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Etat etape campagne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/etat-etape-campagne/list']
                    },
                ]
              },
              {
                label: 'Enjeux ird chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Enjeux ird chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/enjeux-ird-chercheur/list']
                    },
                ]
              },
              {
                label: 'Key word discipline scientifique erc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Key word discipline scientifique erc',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/key-word-discipline-scientifique-erc/list']
                    },
                ]
              },
              {
                label: 'Distinction discipline scientifique',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Distinction discipline scientifique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/distinction-discipline-scientifique/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/discipline-scientifique-chercheur/list']
                    },
                ]
              },
              {
                label: 'Key word',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Key word',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/key-word/list']
                    },
                ]
              },
              {
                label: 'Identifiant recherche',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Identifiant recherche',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/identifiant-recherche/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/discipline-scientifique/list']
                    },
                ]
              },
              {
                label: 'Chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/chercheur/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique erc parent',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique erc parent',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/discipline-scientifique-erc-parent/list']
                    },
                ]
              },
              {
                label: 'Semantic relationship',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Semantic relationship',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/semantic-relationship/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique erc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique erc',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/discipline-scientifique-erc/list']
                    },
                ]
              },
              {
                label: 'Enjeux ird',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Enjeux ird',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/enjeux-ird/list']
                    },
                ]
              },
              {
                label: 'Discipline scientifique erc association',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Discipline scientifique erc association',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/discipline-scientifique-erc-association/list']
                    },
                ]
              },
              {
                label: 'Identifiant auteur expert',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Identifiant auteur expert',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/identifiant-auteur-expert/list']
                    },
                ]
              },
              {
                label: 'Campagne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Campagne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/campagne/list']
                    },
                ]
              },
              {
                label: 'Distinction',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Distinction',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/distinction/list']
                    },
                    {
                      label: 'Nouveau Distinction',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/distinction/create']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
