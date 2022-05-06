
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

import { DisciplineScientifiqueAdminComponent } from './view/discipline-scientifique-admin/discipline-scientifique-admin.component';


import { IdentifiantRechercheAdminComponent } from './view/identifiant-recherche-admin/identifiant-recherche-admin.component';


import { EnjeuxIrdAdminComponent } from './view/enjeux-ird-admin/enjeux-ird-admin.component';


import { DistinctionAdminComponent } from './view/distinction-admin/distinction-admin.component';


import { DisciplineScientifiqueErcParentAdminComponent } from './view/discipline-scientifique-erc-parent-admin/discipline-scientifique-erc-parent-admin.component';


import { SemanticRelationshipAdminComponent } from './view/semantic-relationship-admin/semantic-relationship-admin.component';


import { DisciplineScientifiqueErcAssociationAdminComponent } from './view/discipline-scientifique-erc-association-admin/discipline-scientifique-erc-association-admin.component';


import { DisciplineScientifiqueErcAdminComponent } from './view/discipline-scientifique-erc-admin/discipline-scientifique-erc-admin.component';


import { IdentifiantAuteurExpertAdminComponent } from './view/identifiant-auteur-expert-admin/identifiant-auteur-expert-admin.component';


import { EnjeuxIrdChercheurAdminComponent } from './view/enjeux-ird-chercheur-admin/enjeux-ird-chercheur-admin.component';


import { KeyWordDisciplineScientifiqueErcAdminComponent } from './view/key-word-discipline-scientifique-erc-admin/key-word-discipline-scientifique-erc-admin.component';


import { EtatEtapeCampagneAdminComponent } from './view/folder-test/etat-etape-campagne-admin/etat-etape-campagne-admin.component';


import { DisciplineScientifiqueParentAdminComponent } from './view/discipline-scientifique-parent-admin/discipline-scientifique-parent-admin.component';


import { ChercheurAdminComponent } from './view/chercheur-admin/chercheur-admin.component';


import { DisciplineScientifiqueChercheurAdminComponent } from './view/discipline-scientifique-chercheur-admin/discipline-scientifique-chercheur-admin.component';


import { CampagneAdminComponent } from './view/campagne-admin/campagne-admin.component';


import { DistinctionDisciplineScientifiqueAdminComponent } from './view/distinction-discipline-scientifique-admin/distinction-discipline-scientifique-admin.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'identifiant-recherche',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantRechercheAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'enjeux-ird',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'distinction',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-erc-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcParentAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'semantic-relationship',
                            children: [
                                {
                                    path: 'list',
                                    component: SemanticRelationshipAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-erc-association',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcAssociationAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'identifiant-auteur-expert',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantAuteurExpertAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'enjeux-ird-chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdChercheurAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'key-word-discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: KeyWordDisciplineScientifiqueErcAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueParentAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueChercheurAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'campagne',
                            children: [
                                {
                                    path: 'list',
                                    component: CampagneAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'distinction-discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionDisciplineScientifiqueAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'folderTest',
                            loadChildren: './view/folder-test/folder-test-routing.module#FolderTestRoutingModule',
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
