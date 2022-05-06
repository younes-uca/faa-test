import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeyWordAdminComponent} from './key-word-admin/key-word-admin.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
      [
        {path: 'key-word/list', component: KeyWordAdminComponent },
        {path: 'etat-etape-campagne/list', component: KeyWordAdminComponent },
      ]
  )],
  exports: [RouterModule]
})
export class FolderTestRoutingModule { }
