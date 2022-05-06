import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginChercheurComponent } from './login-chercheur/login-chercheur.component';
import { RegisterChercheurComponent } from './register-chercheur/register-chercheur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { DisciplineScientifiqueCreateChercheurComponent } from './view/discipline-scientifique-chercheur/create-chercheur/discipline-scientifique-create-chercheur.component';
import { DisciplineScientifiqueEditChercheurComponent } from './view/discipline-scientifique-chercheur/edit-chercheur/discipline-scientifique-edit-chercheur.component';
import { DisciplineScientifiqueViewChercheurComponent } from './view/discipline-scientifique-chercheur/view-chercheur/discipline-scientifique-view-chercheur.component';
import { DisciplineScientifiqueListChercheurComponent } from './view/discipline-scientifique-chercheur/list-chercheur/discipline-scientifique-list-chercheur.component';
import { DisciplineScientifiqueChercheurComponent } from './view/discipline-scientifique-chercheur/discipline-scientifique-chercheur.component';
import { IdentifiantRechercheCreateChercheurComponent } from './view/identifiant-recherche-chercheur/create-chercheur/identifiant-recherche-create-chercheur.component';
import { IdentifiantRechercheEditChercheurComponent } from './view/identifiant-recherche-chercheur/edit-chercheur/identifiant-recherche-edit-chercheur.component';
import { IdentifiantRechercheViewChercheurComponent } from './view/identifiant-recherche-chercheur/view-chercheur/identifiant-recherche-view-chercheur.component';
import { IdentifiantRechercheListChercheurComponent } from './view/identifiant-recherche-chercheur/list-chercheur/identifiant-recherche-list-chercheur.component';
import { IdentifiantRechercheChercheurComponent } from './view/identifiant-recherche-chercheur/identifiant-recherche-chercheur.component';
import { EnjeuxIrdCreateChercheurComponent } from './view/enjeux-ird-chercheur/create-chercheur/enjeux-ird-create-chercheur.component';
import { EnjeuxIrdEditChercheurComponent } from './view/enjeux-ird-chercheur/edit-chercheur/enjeux-ird-edit-chercheur.component';
import { EnjeuxIrdViewChercheurComponent } from './view/enjeux-ird-chercheur/view-chercheur/enjeux-ird-view-chercheur.component';
import { EnjeuxIrdListChercheurComponent } from './view/enjeux-ird-chercheur/list-chercheur/enjeux-ird-list-chercheur.component';
import { EnjeuxIrdChercheurComponent } from './view/enjeux-ird-chercheur/enjeux-ird-chercheur.component';
import { DistinctionCreateChercheurComponent } from './view/distinction-chercheur/create-chercheur/distinction-create-chercheur.component';
import { DistinctionEditChercheurComponent } from './view/distinction-chercheur/edit-chercheur/distinction-edit-chercheur.component';
import { DistinctionViewChercheurComponent } from './view/distinction-chercheur/view-chercheur/distinction-view-chercheur.component';
import { DistinctionListChercheurComponent } from './view/distinction-chercheur/list-chercheur/distinction-list-chercheur.component';
import { DistinctionChercheurComponent } from './view/distinction-chercheur/distinction-chercheur.component';
import { DisciplineScientifiqueErcParentCreateChercheurComponent } from './view/discipline-scientifique-erc-parent-chercheur/create-chercheur/discipline-scientifique-erc-parent-create-chercheur.component';
import { DisciplineScientifiqueErcParentEditChercheurComponent } from './view/discipline-scientifique-erc-parent-chercheur/edit-chercheur/discipline-scientifique-erc-parent-edit-chercheur.component';
import { DisciplineScientifiqueErcParentViewChercheurComponent } from './view/discipline-scientifique-erc-parent-chercheur/view-chercheur/discipline-scientifique-erc-parent-view-chercheur.component';
import { DisciplineScientifiqueErcParentListChercheurComponent } from './view/discipline-scientifique-erc-parent-chercheur/list-chercheur/discipline-scientifique-erc-parent-list-chercheur.component';
import { DisciplineScientifiqueErcParentChercheurComponent } from './view/discipline-scientifique-erc-parent-chercheur/discipline-scientifique-erc-parent-chercheur.component';
import { SemanticRelationshipCreateChercheurComponent } from './view/semantic-relationship-chercheur/create-chercheur/semantic-relationship-create-chercheur.component';
import { SemanticRelationshipEditChercheurComponent } from './view/semantic-relationship-chercheur/edit-chercheur/semantic-relationship-edit-chercheur.component';
import { SemanticRelationshipViewChercheurComponent } from './view/semantic-relationship-chercheur/view-chercheur/semantic-relationship-view-chercheur.component';
import { SemanticRelationshipListChercheurComponent } from './view/semantic-relationship-chercheur/list-chercheur/semantic-relationship-list-chercheur.component';
import { SemanticRelationshipChercheurComponent } from './view/semantic-relationship-chercheur/semantic-relationship-chercheur.component';
import { DisciplineScientifiqueErcAssociationCreateChercheurComponent } from './view/discipline-scientifique-erc-association-chercheur/create-chercheur/discipline-scientifique-erc-association-create-chercheur.component';
import { DisciplineScientifiqueErcAssociationEditChercheurComponent } from './view/discipline-scientifique-erc-association-chercheur/edit-chercheur/discipline-scientifique-erc-association-edit-chercheur.component';
import { DisciplineScientifiqueErcAssociationViewChercheurComponent } from './view/discipline-scientifique-erc-association-chercheur/view-chercheur/discipline-scientifique-erc-association-view-chercheur.component';
import { DisciplineScientifiqueErcAssociationListChercheurComponent } from './view/discipline-scientifique-erc-association-chercheur/list-chercheur/discipline-scientifique-erc-association-list-chercheur.component';
import { DisciplineScientifiqueErcAssociationChercheurComponent } from './view/discipline-scientifique-erc-association-chercheur/discipline-scientifique-erc-association-chercheur.component';
import { DisciplineScientifiqueErcCreateChercheurComponent } from './view/discipline-scientifique-erc-chercheur/create-chercheur/discipline-scientifique-erc-create-chercheur.component';
import { DisciplineScientifiqueErcEditChercheurComponent } from './view/discipline-scientifique-erc-chercheur/edit-chercheur/discipline-scientifique-erc-edit-chercheur.component';
import { DisciplineScientifiqueErcViewChercheurComponent } from './view/discipline-scientifique-erc-chercheur/view-chercheur/discipline-scientifique-erc-view-chercheur.component';
import { DisciplineScientifiqueErcListChercheurComponent } from './view/discipline-scientifique-erc-chercheur/list-chercheur/discipline-scientifique-erc-list-chercheur.component';
import { DisciplineScientifiqueErcChercheurComponent } from './view/discipline-scientifique-erc-chercheur/discipline-scientifique-erc-chercheur.component';
import { IdentifiantAuteurExpertCreateChercheurComponent } from './view/identifiant-auteur-expert-chercheur/create-chercheur/identifiant-auteur-expert-create-chercheur.component';
import { IdentifiantAuteurExpertEditChercheurComponent } from './view/identifiant-auteur-expert-chercheur/edit-chercheur/identifiant-auteur-expert-edit-chercheur.component';
import { IdentifiantAuteurExpertViewChercheurComponent } from './view/identifiant-auteur-expert-chercheur/view-chercheur/identifiant-auteur-expert-view-chercheur.component';
import { IdentifiantAuteurExpertListChercheurComponent } from './view/identifiant-auteur-expert-chercheur/list-chercheur/identifiant-auteur-expert-list-chercheur.component';
import { IdentifiantAuteurExpertChercheurComponent } from './view/identifiant-auteur-expert-chercheur/identifiant-auteur-expert-chercheur.component';
import { EnjeuxIrdChercheurCreateChercheurComponent } from './view/enjeux-ird-chercheur-chercheur/create-chercheur/enjeux-ird-chercheur-create-chercheur.component';
import { EnjeuxIrdChercheurEditChercheurComponent } from './view/enjeux-ird-chercheur-chercheur/edit-chercheur/enjeux-ird-chercheur-edit-chercheur.component';
import { EnjeuxIrdChercheurViewChercheurComponent } from './view/enjeux-ird-chercheur-chercheur/view-chercheur/enjeux-ird-chercheur-view-chercheur.component';
import { EnjeuxIrdChercheurListChercheurComponent } from './view/enjeux-ird-chercheur-chercheur/list-chercheur/enjeux-ird-chercheur-list-chercheur.component';
import { EnjeuxIrdChercheurChercheurComponent } from './view/enjeux-ird-chercheur-chercheur/enjeux-ird-chercheur-chercheur.component';
import { KeyWordDisciplineScientifiqueErcCreateChercheurComponent } from './view/key-word-discipline-scientifique-erc-chercheur/create-chercheur/key-word-discipline-scientifique-erc-create-chercheur.component';
import { KeyWordDisciplineScientifiqueErcEditChercheurComponent } from './view/key-word-discipline-scientifique-erc-chercheur/edit-chercheur/key-word-discipline-scientifique-erc-edit-chercheur.component';
import { KeyWordDisciplineScientifiqueErcViewChercheurComponent } from './view/key-word-discipline-scientifique-erc-chercheur/view-chercheur/key-word-discipline-scientifique-erc-view-chercheur.component';
import { KeyWordDisciplineScientifiqueErcListChercheurComponent } from './view/key-word-discipline-scientifique-erc-chercheur/list-chercheur/key-word-discipline-scientifique-erc-list-chercheur.component';
import { KeyWordDisciplineScientifiqueErcChercheurComponent } from './view/key-word-discipline-scientifique-erc-chercheur/key-word-discipline-scientifique-erc-chercheur.component';
import { EtatEtapeCampagneCreateChercheurComponent } from './view/etat-etape-campagne-chercheur/create-chercheur/etat-etape-campagne-create-chercheur.component';
import { EtatEtapeCampagneEditChercheurComponent } from './view/etat-etape-campagne-chercheur/edit-chercheur/etat-etape-campagne-edit-chercheur.component';
import { EtatEtapeCampagneViewChercheurComponent } from './view/etat-etape-campagne-chercheur/view-chercheur/etat-etape-campagne-view-chercheur.component';
import { EtatEtapeCampagneListChercheurComponent } from './view/etat-etape-campagne-chercheur/list-chercheur/etat-etape-campagne-list-chercheur.component';
import { EtatEtapeCampagneChercheurComponent } from './view/etat-etape-campagne-chercheur/etat-etape-campagne-chercheur.component';
import { DisciplineScientifiqueParentCreateChercheurComponent } from './view/discipline-scientifique-parent-chercheur/create-chercheur/discipline-scientifique-parent-create-chercheur.component';
import { DisciplineScientifiqueParentEditChercheurComponent } from './view/discipline-scientifique-parent-chercheur/edit-chercheur/discipline-scientifique-parent-edit-chercheur.component';
import { DisciplineScientifiqueParentViewChercheurComponent } from './view/discipline-scientifique-parent-chercheur/view-chercheur/discipline-scientifique-parent-view-chercheur.component';
import { DisciplineScientifiqueParentListChercheurComponent } from './view/discipline-scientifique-parent-chercheur/list-chercheur/discipline-scientifique-parent-list-chercheur.component';
import { DisciplineScientifiqueParentChercheurComponent } from './view/discipline-scientifique-parent-chercheur/discipline-scientifique-parent-chercheur.component';
import { ChercheurCreateChercheurComponent } from './view/chercheur-chercheur/create-chercheur/chercheur-create-chercheur.component';
import { ChercheurEditChercheurComponent } from './view/chercheur-chercheur/edit-chercheur/chercheur-edit-chercheur.component';
import { ChercheurViewChercheurComponent } from './view/chercheur-chercheur/view-chercheur/chercheur-view-chercheur.component';
import { ChercheurListChercheurComponent } from './view/chercheur-chercheur/list-chercheur/chercheur-list-chercheur.component';
import { ChercheurChercheurComponent } from './view/chercheur-chercheur/chercheur-chercheur.component';
import { DisciplineScientifiqueChercheurCreateChercheurComponent } from './view/discipline-scientifique-chercheur-chercheur/create-chercheur/discipline-scientifique-chercheur-create-chercheur.component';
import { DisciplineScientifiqueChercheurEditChercheurComponent } from './view/discipline-scientifique-chercheur-chercheur/edit-chercheur/discipline-scientifique-chercheur-edit-chercheur.component';
import { DisciplineScientifiqueChercheurViewChercheurComponent } from './view/discipline-scientifique-chercheur-chercheur/view-chercheur/discipline-scientifique-chercheur-view-chercheur.component';
import { DisciplineScientifiqueChercheurListChercheurComponent } from './view/discipline-scientifique-chercheur-chercheur/list-chercheur/discipline-scientifique-chercheur-list-chercheur.component';
import { DisciplineScientifiqueChercheurChercheurComponent } from './view/discipline-scientifique-chercheur-chercheur/discipline-scientifique-chercheur-chercheur.component';
import { CampagneCreateChercheurComponent } from './view/campagne-chercheur/create-chercheur/campagne-create-chercheur.component';
import { CampagneEditChercheurComponent } from './view/campagne-chercheur/edit-chercheur/campagne-edit-chercheur.component';
import { CampagneViewChercheurComponent } from './view/campagne-chercheur/view-chercheur/campagne-view-chercheur.component';
import { CampagneListChercheurComponent } from './view/campagne-chercheur/list-chercheur/campagne-list-chercheur.component';
import { CampagneChercheurComponent } from './view/campagne-chercheur/campagne-chercheur.component';
import { KeyWordCreateChercheurComponent } from './view/key-word-chercheur/create-chercheur/key-word-create-chercheur.component';
import { KeyWordEditChercheurComponent } from './view/key-word-chercheur/edit-chercheur/key-word-edit-chercheur.component';
import { KeyWordViewChercheurComponent } from './view/key-word-chercheur/view-chercheur/key-word-view-chercheur.component';
import { KeyWordListChercheurComponent } from './view/key-word-chercheur/list-chercheur/key-word-list-chercheur.component';
import { KeyWordChercheurComponent } from './view/key-word-chercheur/key-word-chercheur.component';
import { DistinctionDisciplineScientifiqueCreateChercheurComponent } from './view/distinction-discipline-scientifique-chercheur/create-chercheur/distinction-discipline-scientifique-create-chercheur.component';
import { DistinctionDisciplineScientifiqueEditChercheurComponent } from './view/distinction-discipline-scientifique-chercheur/edit-chercheur/distinction-discipline-scientifique-edit-chercheur.component';
import { DistinctionDisciplineScientifiqueViewChercheurComponent } from './view/distinction-discipline-scientifique-chercheur/view-chercheur/distinction-discipline-scientifique-view-chercheur.component';
import { DistinctionDisciplineScientifiqueListChercheurComponent } from './view/distinction-discipline-scientifique-chercheur/list-chercheur/distinction-discipline-scientifique-list-chercheur.component';
import { DistinctionDisciplineScientifiqueChercheurComponent } from './view/distinction-discipline-scientifique-chercheur/distinction-discipline-scientifique-chercheur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
   LoginChercheurComponent,
   RegisterChercheurComponent,
    DisciplineScientifiqueCreateChercheurComponent,
    DisciplineScientifiqueListChercheurComponent,
    DisciplineScientifiqueViewChercheurComponent,
    DisciplineScientifiqueEditChercheurComponent,
    DisciplineScientifiqueChercheurComponent,
    IdentifiantRechercheCreateChercheurComponent,
    IdentifiantRechercheListChercheurComponent,
    IdentifiantRechercheViewChercheurComponent,
    IdentifiantRechercheEditChercheurComponent,
    IdentifiantRechercheChercheurComponent,
    EnjeuxIrdCreateChercheurComponent,
    EnjeuxIrdListChercheurComponent,
    EnjeuxIrdViewChercheurComponent,
    EnjeuxIrdEditChercheurComponent,
    EnjeuxIrdChercheurComponent,
    DistinctionCreateChercheurComponent,
    DistinctionListChercheurComponent,
    DistinctionViewChercheurComponent,
    DistinctionEditChercheurComponent,
    DistinctionChercheurComponent,
    DisciplineScientifiqueErcParentCreateChercheurComponent,
    DisciplineScientifiqueErcParentListChercheurComponent,
    DisciplineScientifiqueErcParentViewChercheurComponent,
    DisciplineScientifiqueErcParentEditChercheurComponent,
    DisciplineScientifiqueErcParentChercheurComponent,
    SemanticRelationshipCreateChercheurComponent,
    SemanticRelationshipListChercheurComponent,
    SemanticRelationshipViewChercheurComponent,
    SemanticRelationshipEditChercheurComponent,
    SemanticRelationshipChercheurComponent,
    DisciplineScientifiqueErcAssociationCreateChercheurComponent,
    DisciplineScientifiqueErcAssociationListChercheurComponent,
    DisciplineScientifiqueErcAssociationViewChercheurComponent,
    DisciplineScientifiqueErcAssociationEditChercheurComponent,
    DisciplineScientifiqueErcAssociationChercheurComponent,
    DisciplineScientifiqueErcCreateChercheurComponent,
    DisciplineScientifiqueErcListChercheurComponent,
    DisciplineScientifiqueErcViewChercheurComponent,
    DisciplineScientifiqueErcEditChercheurComponent,
    DisciplineScientifiqueErcChercheurComponent,
    IdentifiantAuteurExpertCreateChercheurComponent,
    IdentifiantAuteurExpertListChercheurComponent,
    IdentifiantAuteurExpertViewChercheurComponent,
    IdentifiantAuteurExpertEditChercheurComponent,
    IdentifiantAuteurExpertChercheurComponent,
    EnjeuxIrdChercheurCreateChercheurComponent,
    EnjeuxIrdChercheurListChercheurComponent,
    EnjeuxIrdChercheurViewChercheurComponent,
    EnjeuxIrdChercheurEditChercheurComponent,
    EnjeuxIrdChercheurChercheurComponent,
    KeyWordDisciplineScientifiqueErcCreateChercheurComponent,
    KeyWordDisciplineScientifiqueErcListChercheurComponent,
    KeyWordDisciplineScientifiqueErcViewChercheurComponent,
    KeyWordDisciplineScientifiqueErcEditChercheurComponent,
    KeyWordDisciplineScientifiqueErcChercheurComponent,
    EtatEtapeCampagneCreateChercheurComponent,
    EtatEtapeCampagneListChercheurComponent,
    EtatEtapeCampagneViewChercheurComponent,
    EtatEtapeCampagneEditChercheurComponent,
    EtatEtapeCampagneChercheurComponent,
    DisciplineScientifiqueParentCreateChercheurComponent,
    DisciplineScientifiqueParentListChercheurComponent,
    DisciplineScientifiqueParentViewChercheurComponent,
    DisciplineScientifiqueParentEditChercheurComponent,
    DisciplineScientifiqueParentChercheurComponent,
    ChercheurCreateChercheurComponent,
    ChercheurListChercheurComponent,
    ChercheurViewChercheurComponent,
    ChercheurEditChercheurComponent,
    ChercheurChercheurComponent,
    DisciplineScientifiqueChercheurCreateChercheurComponent,
    DisciplineScientifiqueChercheurListChercheurComponent,
    DisciplineScientifiqueChercheurViewChercheurComponent,
    DisciplineScientifiqueChercheurEditChercheurComponent,
    DisciplineScientifiqueChercheurChercheurComponent,
    CampagneCreateChercheurComponent,
    CampagneListChercheurComponent,
    CampagneViewChercheurComponent,
    CampagneEditChercheurComponent,
    CampagneChercheurComponent,
    KeyWordCreateChercheurComponent,
    KeyWordListChercheurComponent,
    KeyWordViewChercheurComponent,
    KeyWordEditChercheurComponent,
    KeyWordChercheurComponent,
    DistinctionDisciplineScientifiqueCreateChercheurComponent,
    DistinctionDisciplineScientifiqueListChercheurComponent,
    DistinctionDisciplineScientifiqueViewChercheurComponent,
    DistinctionDisciplineScientifiqueEditChercheurComponent,
    DistinctionDisciplineScientifiqueChercheurComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule
  ],
  exports: [
  LoginChercheurComponent,
  RegisterChercheurComponent,
  DisciplineScientifiqueCreateChercheurComponent,
  DisciplineScientifiqueListChercheurComponent,
  DisciplineScientifiqueViewChercheurComponent,
  DisciplineScientifiqueEditChercheurComponent,
  DisciplineScientifiqueChercheurComponent,
  IdentifiantRechercheCreateChercheurComponent,
  IdentifiantRechercheListChercheurComponent,
  IdentifiantRechercheViewChercheurComponent,
  IdentifiantRechercheEditChercheurComponent,
  IdentifiantRechercheChercheurComponent,
  EnjeuxIrdCreateChercheurComponent,
  EnjeuxIrdListChercheurComponent,
  EnjeuxIrdViewChercheurComponent,
  EnjeuxIrdEditChercheurComponent,
  EnjeuxIrdChercheurComponent,
  DistinctionCreateChercheurComponent,
  DistinctionListChercheurComponent,
  DistinctionViewChercheurComponent,
  DistinctionEditChercheurComponent,
  DistinctionChercheurComponent,
  DisciplineScientifiqueErcParentCreateChercheurComponent,
  DisciplineScientifiqueErcParentListChercheurComponent,
  DisciplineScientifiqueErcParentViewChercheurComponent,
  DisciplineScientifiqueErcParentEditChercheurComponent,
  DisciplineScientifiqueErcParentChercheurComponent,
  SemanticRelationshipCreateChercheurComponent,
  SemanticRelationshipListChercheurComponent,
  SemanticRelationshipViewChercheurComponent,
  SemanticRelationshipEditChercheurComponent,
  SemanticRelationshipChercheurComponent,
  DisciplineScientifiqueErcAssociationCreateChercheurComponent,
  DisciplineScientifiqueErcAssociationListChercheurComponent,
  DisciplineScientifiqueErcAssociationViewChercheurComponent,
  DisciplineScientifiqueErcAssociationEditChercheurComponent,
  DisciplineScientifiqueErcAssociationChercheurComponent,
  DisciplineScientifiqueErcCreateChercheurComponent,
  DisciplineScientifiqueErcListChercheurComponent,
  DisciplineScientifiqueErcViewChercheurComponent,
  DisciplineScientifiqueErcEditChercheurComponent,
  DisciplineScientifiqueErcChercheurComponent,
  IdentifiantAuteurExpertCreateChercheurComponent,
  IdentifiantAuteurExpertListChercheurComponent,
  IdentifiantAuteurExpertViewChercheurComponent,
  IdentifiantAuteurExpertEditChercheurComponent,
  IdentifiantAuteurExpertChercheurComponent,
  EnjeuxIrdChercheurCreateChercheurComponent,
  EnjeuxIrdChercheurListChercheurComponent,
  EnjeuxIrdChercheurViewChercheurComponent,
  EnjeuxIrdChercheurEditChercheurComponent,
  EnjeuxIrdChercheurChercheurComponent,
  KeyWordDisciplineScientifiqueErcCreateChercheurComponent,
  KeyWordDisciplineScientifiqueErcListChercheurComponent,
  KeyWordDisciplineScientifiqueErcViewChercheurComponent,
  KeyWordDisciplineScientifiqueErcEditChercheurComponent,
  KeyWordDisciplineScientifiqueErcChercheurComponent,
  EtatEtapeCampagneCreateChercheurComponent,
  EtatEtapeCampagneListChercheurComponent,
  EtatEtapeCampagneViewChercheurComponent,
  EtatEtapeCampagneEditChercheurComponent,
  EtatEtapeCampagneChercheurComponent,
  DisciplineScientifiqueParentCreateChercheurComponent,
  DisciplineScientifiqueParentListChercheurComponent,
  DisciplineScientifiqueParentViewChercheurComponent,
  DisciplineScientifiqueParentEditChercheurComponent,
  DisciplineScientifiqueParentChercheurComponent,
  ChercheurCreateChercheurComponent,
  ChercheurListChercheurComponent,
  ChercheurViewChercheurComponent,
  ChercheurEditChercheurComponent,
  ChercheurChercheurComponent,
  DisciplineScientifiqueChercheurCreateChercheurComponent,
  DisciplineScientifiqueChercheurListChercheurComponent,
  DisciplineScientifiqueChercheurViewChercheurComponent,
  DisciplineScientifiqueChercheurEditChercheurComponent,
  DisciplineScientifiqueChercheurChercheurComponent,
  CampagneCreateChercheurComponent,
  CampagneListChercheurComponent,
  CampagneViewChercheurComponent,
  CampagneEditChercheurComponent,
  CampagneChercheurComponent,
  KeyWordCreateChercheurComponent,
  KeyWordListChercheurComponent,
  KeyWordViewChercheurComponent,
  KeyWordEditChercheurComponent,
  KeyWordChercheurComponent,
  DistinctionDisciplineScientifiqueCreateChercheurComponent,
  DistinctionDisciplineScientifiqueListChercheurComponent,
  DistinctionDisciplineScientifiqueViewChercheurComponent,
  DistinctionDisciplineScientifiqueEditChercheurComponent,
  DistinctionDisciplineScientifiqueChercheurComponent,
  ],
  entryComponents: [],
})
export class ChercheurModule { }
