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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { DisciplineScientifiqueCreateAdminComponent } from './view/discipline-scientifique-admin/create-admin/discipline-scientifique-create-admin.component';
import { DisciplineScientifiqueEditAdminComponent } from './view/discipline-scientifique-admin/edit-admin/discipline-scientifique-edit-admin.component';
import { DisciplineScientifiqueViewAdminComponent } from './view/discipline-scientifique-admin/view-admin/discipline-scientifique-view-admin.component';
import { DisciplineScientifiqueListAdminComponent } from './view/discipline-scientifique-admin/list-admin/discipline-scientifique-list-admin.component';
import { DisciplineScientifiqueAdminComponent } from './view/discipline-scientifique-admin/discipline-scientifique-admin.component';
import { IdentifiantRechercheCreateAdminComponent } from './view/identifiant-recherche-admin/create-admin/identifiant-recherche-create-admin.component';
import { IdentifiantRechercheEditAdminComponent } from './view/identifiant-recherche-admin/edit-admin/identifiant-recherche-edit-admin.component';
import { IdentifiantRechercheViewAdminComponent } from './view/identifiant-recherche-admin/view-admin/identifiant-recherche-view-admin.component';
import { IdentifiantRechercheListAdminComponent } from './view/identifiant-recherche-admin/list-admin/identifiant-recherche-list-admin.component';
import { IdentifiantRechercheAdminComponent } from './view/identifiant-recherche-admin/identifiant-recherche-admin.component';
import { EnjeuxIrdCreateAdminComponent } from './view/enjeux-ird-admin/create-admin/enjeux-ird-create-admin.component';
import { EnjeuxIrdEditAdminComponent } from './view/enjeux-ird-admin/edit-admin/enjeux-ird-edit-admin.component';
import { EnjeuxIrdViewAdminComponent } from './view/enjeux-ird-admin/view-admin/enjeux-ird-view-admin.component';
import { EnjeuxIrdListAdminComponent } from './view/enjeux-ird-admin/list-admin/enjeux-ird-list-admin.component';
import { EnjeuxIrdAdminComponent } from './view/enjeux-ird-admin/enjeux-ird-admin.component';
import { DistinctionCreateAdminComponent } from './view/distinction-admin/create-admin/distinction-create-admin.component';
import { DistinctionEditAdminComponent } from './view/distinction-admin/edit-admin/distinction-edit-admin.component';
import { DistinctionViewAdminComponent } from './view/distinction-admin/view-admin/distinction-view-admin.component';
import { DistinctionListAdminComponent } from './view/distinction-admin/list-admin/distinction-list-admin.component';
import { DistinctionAdminComponent } from './view/distinction-admin/distinction-admin.component';
import { DisciplineScientifiqueErcParentCreateAdminComponent } from './view/discipline-scientifique-erc-parent-admin/create-admin/discipline-scientifique-erc-parent-create-admin.component';
import { DisciplineScientifiqueErcParentEditAdminComponent } from './view/discipline-scientifique-erc-parent-admin/edit-admin/discipline-scientifique-erc-parent-edit-admin.component';
import { DisciplineScientifiqueErcParentViewAdminComponent } from './view/discipline-scientifique-erc-parent-admin/view-admin/discipline-scientifique-erc-parent-view-admin.component';
import { DisciplineScientifiqueErcParentListAdminComponent } from './view/discipline-scientifique-erc-parent-admin/list-admin/discipline-scientifique-erc-parent-list-admin.component';
import { DisciplineScientifiqueErcParentAdminComponent } from './view/discipline-scientifique-erc-parent-admin/discipline-scientifique-erc-parent-admin.component';
import { SemanticRelationshipCreateAdminComponent } from './view/semantic-relationship-admin/create-admin/semantic-relationship-create-admin.component';
import { SemanticRelationshipEditAdminComponent } from './view/semantic-relationship-admin/edit-admin/semantic-relationship-edit-admin.component';
import { SemanticRelationshipViewAdminComponent } from './view/semantic-relationship-admin/view-admin/semantic-relationship-view-admin.component';
import { SemanticRelationshipListAdminComponent } from './view/semantic-relationship-admin/list-admin/semantic-relationship-list-admin.component';
import { SemanticRelationshipAdminComponent } from './view/semantic-relationship-admin/semantic-relationship-admin.component';
import { DisciplineScientifiqueErcAssociationCreateAdminComponent } from './view/discipline-scientifique-erc-association-admin/create-admin/discipline-scientifique-erc-association-create-admin.component';
import { DisciplineScientifiqueErcAssociationEditAdminComponent } from './view/discipline-scientifique-erc-association-admin/edit-admin/discipline-scientifique-erc-association-edit-admin.component';
import { DisciplineScientifiqueErcAssociationViewAdminComponent } from './view/discipline-scientifique-erc-association-admin/view-admin/discipline-scientifique-erc-association-view-admin.component';
import { DisciplineScientifiqueErcAssociationListAdminComponent } from './view/discipline-scientifique-erc-association-admin/list-admin/discipline-scientifique-erc-association-list-admin.component';
import { DisciplineScientifiqueErcAssociationAdminComponent } from './view/discipline-scientifique-erc-association-admin/discipline-scientifique-erc-association-admin.component';
import { DisciplineScientifiqueErcCreateAdminComponent } from './view/discipline-scientifique-erc-admin/create-admin/discipline-scientifique-erc-create-admin.component';
import { DisciplineScientifiqueErcEditAdminComponent } from './view/discipline-scientifique-erc-admin/edit-admin/discipline-scientifique-erc-edit-admin.component';
import { DisciplineScientifiqueErcViewAdminComponent } from './view/discipline-scientifique-erc-admin/view-admin/discipline-scientifique-erc-view-admin.component';
import { DisciplineScientifiqueErcListAdminComponent } from './view/discipline-scientifique-erc-admin/list-admin/discipline-scientifique-erc-list-admin.component';
import { DisciplineScientifiqueErcAdminComponent } from './view/discipline-scientifique-erc-admin/discipline-scientifique-erc-admin.component';
import { IdentifiantAuteurExpertCreateAdminComponent } from './view/identifiant-auteur-expert-admin/create-admin/identifiant-auteur-expert-create-admin.component';
import { IdentifiantAuteurExpertEditAdminComponent } from './view/identifiant-auteur-expert-admin/edit-admin/identifiant-auteur-expert-edit-admin.component';
import { IdentifiantAuteurExpertViewAdminComponent } from './view/identifiant-auteur-expert-admin/view-admin/identifiant-auteur-expert-view-admin.component';
import { IdentifiantAuteurExpertListAdminComponent } from './view/identifiant-auteur-expert-admin/list-admin/identifiant-auteur-expert-list-admin.component';
import { IdentifiantAuteurExpertAdminComponent } from './view/identifiant-auteur-expert-admin/identifiant-auteur-expert-admin.component';
import { EnjeuxIrdChercheurCreateAdminComponent } from './view/enjeux-ird-chercheur-admin/create-admin/enjeux-ird-chercheur-create-admin.component';
import { EnjeuxIrdChercheurEditAdminComponent } from './view/enjeux-ird-chercheur-admin/edit-admin/enjeux-ird-chercheur-edit-admin.component';
import { EnjeuxIrdChercheurViewAdminComponent } from './view/enjeux-ird-chercheur-admin/view-admin/enjeux-ird-chercheur-view-admin.component';
import { EnjeuxIrdChercheurListAdminComponent } from './view/enjeux-ird-chercheur-admin/list-admin/enjeux-ird-chercheur-list-admin.component';
import { EnjeuxIrdChercheurAdminComponent } from './view/enjeux-ird-chercheur-admin/enjeux-ird-chercheur-admin.component';
import { KeyWordDisciplineScientifiqueErcCreateAdminComponent } from './view/key-word-discipline-scientifique-erc-admin/create-admin/key-word-discipline-scientifique-erc-create-admin.component';
import { KeyWordDisciplineScientifiqueErcEditAdminComponent } from './view/key-word-discipline-scientifique-erc-admin/edit-admin/key-word-discipline-scientifique-erc-edit-admin.component';
import { KeyWordDisciplineScientifiqueErcViewAdminComponent } from './view/key-word-discipline-scientifique-erc-admin/view-admin/key-word-discipline-scientifique-erc-view-admin.component';
import { KeyWordDisciplineScientifiqueErcListAdminComponent } from './view/key-word-discipline-scientifique-erc-admin/list-admin/key-word-discipline-scientifique-erc-list-admin.component';
import { KeyWordDisciplineScientifiqueErcAdminComponent } from './view/key-word-discipline-scientifique-erc-admin/key-word-discipline-scientifique-erc-admin.component';
import { DisciplineScientifiqueParentCreateAdminComponent } from './view/discipline-scientifique-parent-admin/create-admin/discipline-scientifique-parent-create-admin.component';
import { DisciplineScientifiqueParentEditAdminComponent } from './view/discipline-scientifique-parent-admin/edit-admin/discipline-scientifique-parent-edit-admin.component';
import { DisciplineScientifiqueParentViewAdminComponent } from './view/discipline-scientifique-parent-admin/view-admin/discipline-scientifique-parent-view-admin.component';
import { DisciplineScientifiqueParentListAdminComponent } from './view/discipline-scientifique-parent-admin/list-admin/discipline-scientifique-parent-list-admin.component';
import { DisciplineScientifiqueParentAdminComponent } from './view/discipline-scientifique-parent-admin/discipline-scientifique-parent-admin.component';
import { ChercheurCreateAdminComponent } from './view/chercheur-admin/create-admin/chercheur-create-admin.component';
import { ChercheurEditAdminComponent } from './view/chercheur-admin/edit-admin/chercheur-edit-admin.component';
import { ChercheurViewAdminComponent } from './view/chercheur-admin/view-admin/chercheur-view-admin.component';
import { ChercheurListAdminComponent } from './view/chercheur-admin/list-admin/chercheur-list-admin.component';
import { ChercheurAdminComponent } from './view/chercheur-admin/chercheur-admin.component';
import { DisciplineScientifiqueChercheurCreateAdminComponent } from './view/discipline-scientifique-chercheur-admin/create-admin/discipline-scientifique-chercheur-create-admin.component';
import { DisciplineScientifiqueChercheurEditAdminComponent } from './view/discipline-scientifique-chercheur-admin/edit-admin/discipline-scientifique-chercheur-edit-admin.component';
import { DisciplineScientifiqueChercheurViewAdminComponent } from './view/discipline-scientifique-chercheur-admin/view-admin/discipline-scientifique-chercheur-view-admin.component';
import { DisciplineScientifiqueChercheurListAdminComponent } from './view/discipline-scientifique-chercheur-admin/list-admin/discipline-scientifique-chercheur-list-admin.component';
import { DisciplineScientifiqueChercheurAdminComponent } from './view/discipline-scientifique-chercheur-admin/discipline-scientifique-chercheur-admin.component';
import { CampagneCreateAdminComponent } from './view/campagne-admin/create-admin/campagne-create-admin.component';
import { CampagneEditAdminComponent } from './view/campagne-admin/edit-admin/campagne-edit-admin.component';
import { CampagneViewAdminComponent } from './view/campagne-admin/view-admin/campagne-view-admin.component';
import { CampagneListAdminComponent } from './view/campagne-admin/list-admin/campagne-list-admin.component';
import { CampagneAdminComponent } from './view/campagne-admin/campagne-admin.component';
import { DistinctionDisciplineScientifiqueCreateAdminComponent } from './view/distinction-discipline-scientifique-admin/create-admin/distinction-discipline-scientifique-create-admin.component';
import { DistinctionDisciplineScientifiqueEditAdminComponent } from './view/distinction-discipline-scientifique-admin/edit-admin/distinction-discipline-scientifique-edit-admin.component';
import { DistinctionDisciplineScientifiqueViewAdminComponent } from './view/distinction-discipline-scientifique-admin/view-admin/distinction-discipline-scientifique-view-admin.component';
import { DistinctionDisciplineScientifiqueListAdminComponent } from './view/distinction-discipline-scientifique-admin/list-admin/distinction-discipline-scientifique-list-admin.component';
import { DistinctionDisciplineScientifiqueAdminComponent } from './view/distinction-discipline-scientifique-admin/distinction-discipline-scientifique-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {SwitchChercheurAdminComponent} from './view/switch_chercheur/switch-chercheur-admin.component';
import {FolderTestModule} from "./view/folder-test/folder-test.module";

@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent,
     SwitchChercheurAdminComponent,
    DisciplineScientifiqueCreateAdminComponent,
    DisciplineScientifiqueListAdminComponent,
    DisciplineScientifiqueViewAdminComponent,
    DisciplineScientifiqueEditAdminComponent,
    DisciplineScientifiqueAdminComponent,
    IdentifiantRechercheCreateAdminComponent,
    IdentifiantRechercheListAdminComponent,
    IdentifiantRechercheViewAdminComponent,
    IdentifiantRechercheEditAdminComponent,
    IdentifiantRechercheAdminComponent,
    EnjeuxIrdCreateAdminComponent,
    EnjeuxIrdListAdminComponent,
    EnjeuxIrdViewAdminComponent,
    EnjeuxIrdEditAdminComponent,
    EnjeuxIrdAdminComponent,
    DistinctionCreateAdminComponent,
    DistinctionListAdminComponent,
    DistinctionViewAdminComponent,
    DistinctionEditAdminComponent,
    DistinctionAdminComponent,
    DisciplineScientifiqueErcParentCreateAdminComponent,
    DisciplineScientifiqueErcParentListAdminComponent,
    DisciplineScientifiqueErcParentViewAdminComponent,
    DisciplineScientifiqueErcParentEditAdminComponent,
    DisciplineScientifiqueErcParentAdminComponent,
    SemanticRelationshipCreateAdminComponent,
    SemanticRelationshipListAdminComponent,
    SemanticRelationshipViewAdminComponent,
    SemanticRelationshipEditAdminComponent,
    SemanticRelationshipAdminComponent,
    DisciplineScientifiqueErcAssociationCreateAdminComponent,
    DisciplineScientifiqueErcAssociationListAdminComponent,
    DisciplineScientifiqueErcAssociationViewAdminComponent,
    DisciplineScientifiqueErcAssociationEditAdminComponent,
    DisciplineScientifiqueErcAssociationAdminComponent,
    DisciplineScientifiqueErcCreateAdminComponent,
    DisciplineScientifiqueErcListAdminComponent,
    DisciplineScientifiqueErcViewAdminComponent,
    DisciplineScientifiqueErcEditAdminComponent,
    DisciplineScientifiqueErcAdminComponent,
    IdentifiantAuteurExpertCreateAdminComponent,
    IdentifiantAuteurExpertListAdminComponent,
    IdentifiantAuteurExpertViewAdminComponent,
    IdentifiantAuteurExpertEditAdminComponent,
    IdentifiantAuteurExpertAdminComponent,
    EnjeuxIrdChercheurCreateAdminComponent,
    EnjeuxIrdChercheurListAdminComponent,
    EnjeuxIrdChercheurViewAdminComponent,
    EnjeuxIrdChercheurEditAdminComponent,
    EnjeuxIrdChercheurAdminComponent,
    KeyWordDisciplineScientifiqueErcCreateAdminComponent,
    KeyWordDisciplineScientifiqueErcListAdminComponent,
    KeyWordDisciplineScientifiqueErcViewAdminComponent,
    KeyWordDisciplineScientifiqueErcEditAdminComponent,
    KeyWordDisciplineScientifiqueErcAdminComponent,
    DisciplineScientifiqueParentCreateAdminComponent,
    DisciplineScientifiqueParentListAdminComponent,
    DisciplineScientifiqueParentViewAdminComponent,
    DisciplineScientifiqueParentEditAdminComponent,
    DisciplineScientifiqueParentAdminComponent,
    ChercheurCreateAdminComponent,
    ChercheurListAdminComponent,
    ChercheurViewAdminComponent,
    ChercheurEditAdminComponent,
    ChercheurAdminComponent,
    DisciplineScientifiqueChercheurCreateAdminComponent,
    DisciplineScientifiqueChercheurListAdminComponent,
    DisciplineScientifiqueChercheurViewAdminComponent,
    DisciplineScientifiqueChercheurEditAdminComponent,
    DisciplineScientifiqueChercheurAdminComponent,
    CampagneCreateAdminComponent,
    CampagneListAdminComponent,
    CampagneViewAdminComponent,
    CampagneEditAdminComponent,
    CampagneAdminComponent,
    DistinctionDisciplineScientifiqueCreateAdminComponent,
    DistinctionDisciplineScientifiqueListAdminComponent,
    DistinctionDisciplineScientifiqueViewAdminComponent,
    DistinctionDisciplineScientifiqueEditAdminComponent,
    DistinctionDisciplineScientifiqueAdminComponent,
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
    MultiSelectModule,
    FolderTestModule,
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,
    SwitchChercheurAdminComponent,
  DisciplineScientifiqueCreateAdminComponent,
  DisciplineScientifiqueListAdminComponent,
  DisciplineScientifiqueViewAdminComponent,
  DisciplineScientifiqueEditAdminComponent,
  DisciplineScientifiqueAdminComponent,
  IdentifiantRechercheCreateAdminComponent,
  IdentifiantRechercheListAdminComponent,
  IdentifiantRechercheViewAdminComponent,
  IdentifiantRechercheEditAdminComponent,
  IdentifiantRechercheAdminComponent,
  EnjeuxIrdCreateAdminComponent,
  EnjeuxIrdListAdminComponent,
  EnjeuxIrdViewAdminComponent,
  EnjeuxIrdEditAdminComponent,
  EnjeuxIrdAdminComponent,
  DistinctionCreateAdminComponent,
  DistinctionListAdminComponent,
  DistinctionViewAdminComponent,
  DistinctionEditAdminComponent,
  DistinctionAdminComponent,
  DisciplineScientifiqueErcParentCreateAdminComponent,
  DisciplineScientifiqueErcParentListAdminComponent,
  DisciplineScientifiqueErcParentViewAdminComponent,
  DisciplineScientifiqueErcParentEditAdminComponent,
  DisciplineScientifiqueErcParentAdminComponent,
  SemanticRelationshipCreateAdminComponent,
  SemanticRelationshipListAdminComponent,
  SemanticRelationshipViewAdminComponent,
  SemanticRelationshipEditAdminComponent,
  SemanticRelationshipAdminComponent,
  DisciplineScientifiqueErcAssociationCreateAdminComponent,
  DisciplineScientifiqueErcAssociationListAdminComponent,
  DisciplineScientifiqueErcAssociationViewAdminComponent,
  DisciplineScientifiqueErcAssociationEditAdminComponent,
  DisciplineScientifiqueErcAssociationAdminComponent,
  DisciplineScientifiqueErcCreateAdminComponent,
  DisciplineScientifiqueErcListAdminComponent,
  DisciplineScientifiqueErcViewAdminComponent,
  DisciplineScientifiqueErcEditAdminComponent,
  DisciplineScientifiqueErcAdminComponent,
  IdentifiantAuteurExpertCreateAdminComponent,
  IdentifiantAuteurExpertListAdminComponent,
  IdentifiantAuteurExpertViewAdminComponent,
  IdentifiantAuteurExpertEditAdminComponent,
  IdentifiantAuteurExpertAdminComponent,
  EnjeuxIrdChercheurCreateAdminComponent,
  EnjeuxIrdChercheurListAdminComponent,
  EnjeuxIrdChercheurViewAdminComponent,
  EnjeuxIrdChercheurEditAdminComponent,
  EnjeuxIrdChercheurAdminComponent,
  KeyWordDisciplineScientifiqueErcCreateAdminComponent,
  KeyWordDisciplineScientifiqueErcListAdminComponent,
  KeyWordDisciplineScientifiqueErcViewAdminComponent,
  KeyWordDisciplineScientifiqueErcEditAdminComponent,
  KeyWordDisciplineScientifiqueErcAdminComponent,
  DisciplineScientifiqueParentCreateAdminComponent,
  DisciplineScientifiqueParentListAdminComponent,
  DisciplineScientifiqueParentViewAdminComponent,
  DisciplineScientifiqueParentEditAdminComponent,
  DisciplineScientifiqueParentAdminComponent,
  ChercheurCreateAdminComponent,
  ChercheurListAdminComponent,
  ChercheurViewAdminComponent,
  ChercheurEditAdminComponent,
  ChercheurAdminComponent,
  DisciplineScientifiqueChercheurCreateAdminComponent,
  DisciplineScientifiqueChercheurListAdminComponent,
  DisciplineScientifiqueChercheurViewAdminComponent,
  DisciplineScientifiqueChercheurEditAdminComponent,
  DisciplineScientifiqueChercheurAdminComponent,
  CampagneCreateAdminComponent,
  CampagneListAdminComponent,
  CampagneViewAdminComponent,
  CampagneEditAdminComponent,
  CampagneAdminComponent,
  DistinctionDisciplineScientifiqueCreateAdminComponent,
  DistinctionDisciplineScientifiqueListAdminComponent,
  DistinctionDisciplineScientifiqueViewAdminComponent,
  DistinctionDisciplineScientifiqueEditAdminComponent,
  DistinctionDisciplineScientifiqueAdminComponent,
  ],
  entryComponents: [],
})
export class AdminModule { }
