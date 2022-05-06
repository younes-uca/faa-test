
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginChercheurComponent } from './login-chercheur/login-chercheur.component';
import { RegisterChercheurComponent } from './register-chercheur/register-chercheur.component';

import { DisciplineScientifiqueChercheurComponent } from './view/discipline-scientifique-chercheur/discipline-scientifique-chercheur.component';


import { IdentifiantRechercheChercheurComponent } from './view/identifiant-recherche-chercheur/identifiant-recherche-chercheur.component';


import { EnjeuxIrdChercheurComponent } from './view/enjeux-ird-chercheur/enjeux-ird-chercheur.component';


import { DistinctionChercheurComponent } from './view/distinction-chercheur/distinction-chercheur.component';

import { DistinctionCreateChercheurComponent } from './view/distinction-chercheur/create-chercheur/distinction-create-chercheur.component';

import { DisciplineScientifiqueErcParentChercheurComponent } from './view/discipline-scientifique-erc-parent-chercheur/discipline-scientifique-erc-parent-chercheur.component';


import { SemanticRelationshipChercheurComponent } from './view/semantic-relationship-chercheur/semantic-relationship-chercheur.component';


import { DisciplineScientifiqueErcAssociationChercheurComponent } from './view/discipline-scientifique-erc-association-chercheur/discipline-scientifique-erc-association-chercheur.component';


import { DisciplineScientifiqueErcChercheurComponent } from './view/discipline-scientifique-erc-chercheur/discipline-scientifique-erc-chercheur.component';


import { IdentifiantAuteurExpertChercheurComponent } from './view/identifiant-auteur-expert-chercheur/identifiant-auteur-expert-chercheur.component';


import { EnjeuxIrdChercheurChercheurComponent } from './view/enjeux-ird-chercheur-chercheur/enjeux-ird-chercheur-chercheur.component';


import { KeyWordDisciplineScientifiqueErcChercheurComponent } from './view/key-word-discipline-scientifique-erc-chercheur/key-word-discipline-scientifique-erc-chercheur.component';


import { EtatEtapeCampagneChercheurComponent } from './view/etat-etape-campagne-chercheur/etat-etape-campagne-chercheur.component';


import { DisciplineScientifiqueParentChercheurComponent } from './view/discipline-scientifique-parent-chercheur/discipline-scientifique-parent-chercheur.component';


import { ChercheurChercheurComponent } from './view/chercheur-chercheur/chercheur-chercheur.component';


import { DisciplineScientifiqueChercheurChercheurComponent } from './view/discipline-scientifique-chercheur-chercheur/discipline-scientifique-chercheur-chercheur.component';


import { CampagneChercheurComponent } from './view/campagne-chercheur/campagne-chercheur.component';


import { KeyWordChercheurComponent } from './view/key-word-chercheur/key-word-chercheur.component';


import { DistinctionDisciplineScientifiqueChercheurComponent } from './view/distinction-discipline-scientifique-chercheur/distinction-discipline-scientifique-chercheur.component';


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
                                    component: LoginChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'identifiant-recherche',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantRechercheChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'enjeux-ird',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'distinction',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                                 ,{
                                    path: 'create',
                                    component: DistinctionCreateChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-erc-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcParentChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'semantic-relationship',
                            children: [
                                {
                                    path: 'list',
                                    component: SemanticRelationshipChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-erc-association',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcAssociationChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'identifiant-auteur-expert',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantAuteurExpertChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'enjeux-ird-chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdChercheurChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'key-word-discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: KeyWordDisciplineScientifiqueErcChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'etat-etape-campagne',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatEtapeCampagneChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueParentChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'discipline-scientifique-chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueChercheurChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'campagne',
                            children: [
                                {
                                    path: 'list',
                                    component: CampagneChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'key-word',
                            children: [
                                {
                                    path: 'list',
                                    component: KeyWordChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'distinction-discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionDisciplineScientifiqueChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class ChercheurRoutingModule { }
