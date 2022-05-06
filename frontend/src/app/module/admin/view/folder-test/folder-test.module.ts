import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FolderTestRoutingModule} from './folder-test-routing.module';
import {KeyWordAdminComponent} from './key-word-admin/key-word-admin.component';
import {KeyWordCreateAdminComponent} from './key-word-admin/create-admin/key-word-create-admin.component';
import {KeyWordEditAdminComponent} from './key-word-admin/edit-admin/key-word-edit-admin.component';
import {KeyWordViewAdminComponent} from './key-word-admin/view-admin/key-word-view-admin.component';
import {KeyWordListAdminComponent} from './key-word-admin/list-admin/key-word-list-admin.component';
import {
    EtatEtapeCampagneCreateAdminComponent
} from './etat-etape-campagne-admin/create-admin/etat-etape-campagne-create-admin.component';
import {
    EtatEtapeCampagneListAdminComponent
} from './etat-etape-campagne-admin/list-admin/etat-etape-campagne-list-admin.component';
import {
    EtatEtapeCampagneViewAdminComponent
} from './etat-etape-campagne-admin/view-admin/etat-etape-campagne-view-admin.component';
import {
    EtatEtapeCampagneEditAdminComponent
} from './etat-etape-campagne-admin/edit-admin/etat-etape-campagne-edit-admin.component';
import {EtatEtapeCampagneAdminComponent} from './etat-etape-campagne-admin/etat-etape-campagne-admin.component';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {RouterModule} from '@angular/router';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PanelModule} from 'primeng/panel';
import {BadgeModule} from 'primeng/badge';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {MessagesModule} from 'primeng/messages';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {SplitButtonModule} from 'primeng/splitbutton';


@NgModule({
    declarations: [
        KeyWordAdminComponent,
        KeyWordCreateAdminComponent,
        KeyWordEditAdminComponent,
        KeyWordListAdminComponent,
        KeyWordViewAdminComponent,
        EtatEtapeCampagneCreateAdminComponent,
        EtatEtapeCampagneListAdminComponent,
        EtatEtapeCampagneViewAdminComponent,
        EtatEtapeCampagneEditAdminComponent,
        EtatEtapeCampagneAdminComponent,
    ],
    imports: [
        CommonModule,
        FolderTestRoutingModule,
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
    ],
    exports: [
        KeyWordAdminComponent,
        KeyWordCreateAdminComponent,
        KeyWordEditAdminComponent,
        KeyWordListAdminComponent,
        KeyWordViewAdminComponent,
        EtatEtapeCampagneCreateAdminComponent,
        EtatEtapeCampagneListAdminComponent,
        EtatEtapeCampagneViewAdminComponent,
        EtatEtapeCampagneEditAdminComponent,
        EtatEtapeCampagneAdminComponent,
    ]
})
export class FolderTestModule {
}
